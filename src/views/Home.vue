<template>
  <main>
    <header class="search">
      <Header
        v-on:onsubmit="searchPhotos"
        :searchTitle="searchTitle"
      />
    </header>

    <section v-if="isLoading">
      <HomeSkeleton />
    </section>

    <section v-else>
      <section class="error" v-if="isError">
        <h3>Oooppss!</h3>
        <p>{{ isErrorMessage }}</p>
        <p>Kindly check your network connection and try again</p>
      </section>

      <section class="no-result" v-else-if="noResult">
        <h3>Wrong search term!</h3>
        <p>Please enter a meaningful city/country name.</p>
      </section>

      <section class="grid-container" v-else>
        <div
          v-for="photo in photos"
          :key="photo.id"
          class="grid-item"
          @click="toggleModal(photo)">
            <img :src="photo.urls.regular" class="img-collection" />
        </div>
        <div v-if="showModal">
          <Modal @close="toggleModal()">
            <template v-slot:imageDetails>
              <img :src="photoUrl" alt="name" class="image-modal">
              <div class="caption">
                <h6>{{ name }}</h6>
                <p>{{ location ? location : description }}</p>
              </div>
            </template>
          </Modal>
        </div>
      </section>
    </section>

    <!-- <section v-else>
      <HomeSkeleton />
    </section> -->
  </main>
</template>

<script>
// @ is an alias to /src
import Modal from '@/components/Modal.vue';
import Header from '@/components/Header.vue';
import HomeSkeleton from '@/components/HomeSkeleton.vue';
import unsplash from '../config/index';

export default {
  name: 'Home',
  data() {
    return {
      photos: [],
      isLoading: false,
      isError: false,
      isErrorMessage: '',
      noResult: false,

      name: '',
      description: '',
      altDescription: '',
      location: '',
      photoUrl: '',
      searchValue: '',
      searchTitle: '',
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
      this.isLoading = true;
      this.isError = false;
      this.noResult = false;

      unsplash.photos
        .list({
          page,
          perPage: 10,
          orderBy: 'latest',
        })
        .then((res) => {
          const newPhotos = res.response.results;
          console.log(newPhotos);
          this.photos = [...newPhotos];
          // set loading to false after app has successfully mounted
          this.isLoading = false;
          this.isError = false;
          this.noResult = false;
        })
        .catch((err) => {
          this.isLoading = false;
          this.noResult = false;
          this.isError = true;
          this.isErrorMessage = err.message;
        })
        .finally(() => {
          this.isLoading = false;
          if ((this.photos.length === 0) && (!this.isError)) {
            this.noResult = true;
          }
        });
    },
    searchPhotos(query) {
      this.isLoading = true;
      this.isError = false;
      this.noResult = false;

      this.searchValue = query;
      this.searchTitle = `Searching for "${this.searchValue}"`;

      setTimeout(() => {
        // this.fetchPhotos(1);
        unsplash.search
          .getPhotos({
            query,
            page: 1,
            perPage: 10,
          })
          .then((res) => {
            const result = res.response.results;
            this.photos = [...result];
            this.searchTitle = `Search results for "${this.searchValue}"`;
            this.isLoading = false;
            this.noResult = false;
            this.isError = false;
          })
          .catch((err) => {
            this.isLoading = false;
            this.noResult = false;
            this.isError = true;
            this.isErrorMessage = err.message;
          })
          .finally(() => {
            this.isLoading = false;
            if ((this.photos.length === 0) && (!this.isError)) {
              this.noResult = true;
            }
          });
      }, 3000);
    },
  },
  mounted() {
    // set loading to true when the app is loading
    this.isLoading = true;
    setTimeout(() => {
      this.fetchPhotos(1);
    }, 2000);
  },
  components: {
    Modal,
    Header,
    HomeSkeleton,
  },
};
</script>

<style>
  main {
    min-height: 100vh;
    overflow-y: visible;
    width: 100%;
    margin: 0 auto;
  }

  .grid-container {
    column-count: 3;
    margin: -60px auto;
    max-width: 800px;
  }
  /* screen size 992px and below */
  @media screen and (max-width: 992px) {
    .grid-container {
      column-count: 2;
      padding: 0 15px;
    }
  }
  /* screen size 576px and below */
  @media  (max-width: 576px) {
    .grid-container {
      column-count: 1;
    }
  }

  .grid-item {
    margin-bottom: 15px;
  }

  .img-collection {
    width: 100%;
    border-radius: 10px;
    /* background-color: #eeeeee; */
  }
  .img-collection:hover {
    cursor: pointer;
    box-shadow: 0 13px 27px -5px
      var(--hover-shades-1),
      0 8px 16px -8px
      var(--hover-shades-2),
      0 -6px 16px -6px
      var(--hover-shades-3);
  }
  .caption p, h6 {
    margin: 0.2rem 0.4rem;
    padding-bottom: 0.4rem;
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
    max-height: 400px;
    object-fit: cover;
    border-radius: 0.5rem 0.5rem 0 0;
  }
  .error, .no-result {
    display: grid;
    place-items: center;
  }

</style>
