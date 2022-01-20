<template>
  <div class="grid-container">
    <div
      v-for="photo in photos"
      :key="photo.id"
      class="grid-item"
        @click="toggleModal(photo)">
        <img :src="photo.urls.regular" class="images-collection" />
    </div>
    <!-- <div v-if="showModal">
      <Modal @close="toggleModal()">
        <template v-slot:imageDetails>
          <img :src="photoUrl" alt="name" class="image-modal">
          <div class="caption">
            <h6>{{ name }}</h6>
            <p>{{ location ? location : description }}</p>
          </div>
        </template>
      </Modal>
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
  .grid-container {
    margin: auto;
    position: relative;
    top: -100px;
    max-width: 900px;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    grid-auto-rows: 3rem;
    padding: 1rem;
    box-sizing: border-box;
    /* z-index: 5; */
    /* background: none; */
  }
  .images-collection {
    width: 100%;
    /* padding-top: 100%; */
    /* height: 100%;
    object-fit: cover; */
    background-color: #eeeeee;
    /* border-radius: 1rem; */
  }
  .images-collection:hover {
    box-shadow: 0 13px 27px -5px
      hsla(240, 30.1%, 28%, 0.25),
      0 8px 16px -8px
      hsla(0, 0%, 0%, 0.3),
      0 -6px 16px -6px
      hsla(0, 0%, 0%, 0.03);
  }
  .grid-item {
    grid-row: span 6;
    border-radius: 1rem;
    cursor: pointer;
    outline: none;
  }
  .grid-item:nth-child(odd) {
    grid-row: span 5;
  }
  .grid-item:nth-child(1) {
    grid-row: span 4;
  }
  .caption p, h6 {
    margin: 0.2rem 0.4rem;
    /* border: 1px solid red; */
  }
  .caption h6 {
    text-align: left;
  }
  .caption p {
    font-size: medium;
    text-align: left;
    font-style: italic;
  }
  .image-modal {
    width: 100%;
    height: 420px;
    object-fit: cover;
    border-radius: 0.5rem 0.5rem 0 0;
  }

  @media (max-width: 992px) {
    .grid-container {
      gap: 1rem;
      grid-auto-rows: 2.5rem;
      grid-template-columns: repeat(2, 1fr);
      padding: 1rem;
    }
    .grid-item {
      grid-row: span 6;
    }
  }
  @media (max-width: 576px) {
    .grid-container {
      grid-template-columns: repeat(1, 1fr);
      padding: 1.5rem;
      gap: 2rem;
      grid-auto-rows: 5rem;
      top: -100px;
    }
  }

</style>
