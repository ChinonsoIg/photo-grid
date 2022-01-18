<template>
  <main class="main">
    <div class="grid-container" v-if="photos.length">
      <!-- <h1>Search component here</h1> -->
      <div v-for="photo in photos" :key="photo.id" class="grid-item">
        <router-link :to="{ name: 'PhotoDetails', params: { id: photo.id } }">
          <img :src="photo.image" />
        </router-link>
      </div>
    </div>

    <div v-else>
      <p>Loading photos....</p>
    </div>
  </main>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  data() {
    return {
      photos: [],
    };
  },
  mounted() {
    fetch('http://localhost:3000/photos')
      .then((res) => res.json())
      .then((data) => {
        this.photos = data;
        return this.photos;
      })
      .catch((err) => console.log(err.message));
  },
  // components: {
  //   HelloWorld,
  // },
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

  .grid-item {
    grid-row: span 6;
    border-radius: 1rem;
    cursor: pointer;
    outline: none;
    }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
    background-color: #eeeeee;
    border-radius: 1rem;
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
