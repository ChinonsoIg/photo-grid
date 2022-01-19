<template>
  <main class="main">
    <div class="grid-container" v-if="photos.length">
      <!-- <h1>Search component here</h1> -->
      <div
        v-for="photo in photos"
        :key="photo.id"
        class="grid-item"
         @click.alt="toggleModal(photo)">
          <img :src="photo.urls.full" class="images-collection" />
      </div>
      <div v-if="showModal">
        <Modal @close="toggleModal()">
          <template v-slot:links>
            <img :src="photoUrl" alt="name" class="image-modal">
            <div class="caption">
              <p>{{ name }}</p>
              <small><i>{{ location }}</i></small>
            </div>
          </template>
        </Modal>
      </div>
    </div>

    <div v-else>
      <p>Loading photos....</p>
    </div>
  </main>
</template>

<script>
// @ is an alias to /src
import Modal from '@/components/Modal.vue';
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
        urls: { full },
      } = photo;

      this.name = name;
      this.description = description;
      // eslint-disable-next-line camelcase
      this.altDescription = alt_description;
      this.location = location;
      this.photoUrl = full;
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
          // console.log(res.response.results);
          const newPhotos = res.response.results;
          this.photos = [...newPhotos];
        });
    },
  },
  mounted() {
    this.fetchPhotos(4);
  },
  components: {
    Modal,
  },
};
</script>

<style scoped>
  .main {
    /* position: relative; */
    height: 100vh;
    max-width: 900px;
    margin: auto;
    border: 1px solid purple;
  }
  .grid-container {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    grid-auto-rows: 3rem;
    padding: 1rem;
    box-sizing: border-box;
  }
  .images-collection {
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-color: #eeeeee;
    border-radius: 1rem;
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
  .caption {
    position: relative;
    bottom: 0;
    margin: 20px 0 5px;
    padding: 0 1rem;
    /* height: 10%; */
    border: 2px solid red;
  }
  .caption p {
    font-size: small;
    text-align: left;
    /* margin: ; */
  }
  .caption small {
    font-size: small;
    text-align: left;
  }
  .image-modal {
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 0.5rem 0.5rem 0 0;
  }

  @media (max-width: 768px) {
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
    }
  }

</style>
