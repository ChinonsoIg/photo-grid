<template>
  <div v-if="photo">
    <img :src="photo.image" />
    <h4>{{ photo.title }}</h4>
    <p>{{photo.details }}</p>
  </div>

  <div v-else>
    <p>Loading photos details....</p>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      photo: null,
    };
  },
  // mounted() {
  //   fetch(`http://localhost:3000/photos/${this.id}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       this.photo = data;
  //       return this.photo;
  //     })
  //     .catch((err) => console.log(err.message));
  // },
};
</script>

<style>

</style>
