<template>
  <div class="wrapper">
      <div class="skeleton-collection skeleton">
        <div></div>
        <div class="skeleton-text-container">
          <div class="skeletons skeleton-text"></div>
          <div class="skeletons skeleton-text"></div>
        </div>
      </div>
      <div class="skeleton-collection skeleton">
        <div></div>
        <div class="skeleton-text-container">
          <div class="skeletons skeleton-text"></div>
          <div class="skeletons skeleton-text"></div>
        </div>
      </div>
      <div class="skeleton-collection skeleton">
        <div></div>
        <div class="skeleton-text-container">
          <div class="skeletons skeleton-text"></div>
          <div class="skeletons skeleton-text"></div>
        </div>
      </div>
      <div class="skeleton-collection skeleton">
        <div></div>
        <div class="skeleton-text-container">
          <div class="skeletons skeleton-text"></div>
          <div class="skeletons skeleton-text"></div>
        </div>
      </div>
      <!-- <div class="skeleton-collection skeleton">
        <div></div>
        <div class="skeleton-text-container">
          <div class="skeletons skeleton-text"></div>
          <div class="skeletons skeleton-text"></div>
        </div>
      </div> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import Modal from '@/components/Modal.vue';
import unsplash from '../api/index';

export default {
  name: 'Home',
  data() {
    return {
      photos: [],

      name: '',
      description: '',
      altDescription: '',
      location: '',
      photoUrl: '',
      showModal: false,
    };
  },
  methods: {
    toggleModal(photo) {
      if (!photo) {
        this.showModal = !this.showModal;
        return;
      }
      const {
        description,
        // eslint-disable-next-line camelcase
        alt_description,
        user: { name, location },
        urls: { regular },
      } = photo;

      this.name = name;
      this.description = description;
      // eslint-disable-next-line camelcase
      this.altDescription = alt_description;
      this.location = location;
      this.photoUrl = regular;
      this.showModal = !this.showModal;
    },
    fetchPhotos(page) {
      unsplash.photos
        .list({
          page,
          perPage: 10,
          orederBy: 'latest',
        })
        .then((res) => {
          const newPhotos = res.response.results;
          console.log(newPhotos);
          this.photos = [...newPhotos];
        });
    },
    searchPhotos(query) {
      console.log('query parent: ', query);

      unsplash.search
        .getPhotos({
          query,
          page: 1,
          perPage: 10,
        })
        .then((res) => {
          const result = res.response.results;
          this.photos = [...result];
        });
    },
  },
  mounted() {
    this.fetchPhotos(1);
  },
};
</script>

<style scoped>
  .wrapper {
    max-width: 900px;
    margin: -60px auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 10px;
  }
  .skeleton-collection {
    height: 300px;
    min-width: 200px;
    margin: .4rem;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    border: 1px solid red;
  }
  .skeleton {
    opacity: .7;
    animation: skeleton-loading 1s linear infinite alternate;
  }
  @keyframes skeleton-loading {
    0% {
      background-color: hsl(200, 20%, 85%);
    }
    100% {
      background-color: hsl(200, 20%, 95%);
    }
  }

  .skeletons {
    opacity: .7;
    animation: skeletons-loading 1s linear infinite alternate;
  }
  @keyframes skeletons-loading {
    0% {
      background-color: hsl(200, 20%, 50%);
    }
    100% {
      background-color: hsl(200, 20%, 80%);
    }
  }

  .skeleton-text-container {
    width: 196px;
    margin: 0 auto;
  }
  .skeleton-text {
    width: 98%;
    height: .5rem;
    margin-bottom: .25rem;
    border-radius: .125rem;
  }
  .skeleton-text:last-child {
    width: 60%;
  }

  .skeleton {
    opacity: .7;
    animation: skeleton-loading 1s linear infinite alternate;
  }
  @keyframes skeleton-loading {
    0% {
      background-color: hsl(200, 20%, 85%);
    }
    100% {
      background-color: hsl(200, 20%, 95%);
    }
  }

  .skeletons {
    opacity: .7;
    animation: skeletons-loading 1s linear infinite alternate;
  }
  @keyframes skeletons-loading {
    0% {
      background-color: hsl(200, 20%, 50%);
    }
    100% {
      background-color: hsl(200, 20%, 80%);
    }
  }
</style>
