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
    <h5>{{ searchTitle }}</h5>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: ['searchTitle'],
  data() {
    return {
      query: '',
    };
  },
  methods: {
    getQuery() {
      this.$emit('onsubmit', this.query);
      console.log('q: ', this.query);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  height: 200px;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-items: center;
  align-items: center;
  padding: 20px 0 0;
  background-color: var(--tealLight);
}
form {
  width: 80%;
  margin: 0 auto;
  background: var(--gray);
  text-align: left;
  padding: 0;
  border-radius: 10px;
  /* border: 2px solid red; */
}
h5 {
  color: var(--tealDark);
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
    width: 95%;
    border-radius: 5px;
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
