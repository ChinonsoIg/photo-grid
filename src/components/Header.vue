<template>
  <header>
    <!-- @input="getQuery" -->
    <form @submit.prevent="getQuery">
      <input
        type="text"
        v-model="query"
        placeholder="Search for photo"
      >
    </form>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      query: '',
    };
  },
  methods: {
    getQuery() {
      console.log('q: ', this.query);
      this.$emit('submit', this.query);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  height: 200px;
  display: grid;
  place-items: center;
  background-color: rgba(0, 128, 128, 0.1);
  width: 100%;
}
form {
  position: relative;
  top: -60px;
  width: 80%;
  margin: 0 auto;
  background: gray;
  text-align: left;
  padding: 0;
  border-radius: 10px;
  /* border: 2px solid red; */
}
input {
  display: block;
  width: 100%;
  padding: 10px 6px;
  font-size: 16px;
  border-radius: 10px;
  box-sizing: border-box;
  border: none;
}

@media (max-width: 575.98px) {
  .header {
    height: 120px;
  }
  form {
    position: relative;
    top: -40px;
    width: 95%;
    margin: 0 auto;
    background: gray;
    text-align: left;
    padding: 0;
    border-radius: 5px;
    /* border: 2px solid red; */
  }
  input {
    display: block;
    width: 100%;
    padding: 6px;
    border-radius: 5px;
    box-sizing: border-box;
    border: none;
  }
}
</style>
