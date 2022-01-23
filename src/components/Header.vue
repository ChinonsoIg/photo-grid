<template>
  <header>
    <!-- @input="getQuery" -->
    <form @submit.prevent="getQuery">
      <unicon name="search" class="icon"></unicon>
    <!-- <unicon name="layer-group" fill="royalblue" icon-style="monochrome"></unicon> -->
      <input
        type="text"
        v-model="query"
        @input="resetSearch"
        placeholder="Search for photo"
      >
    </form>
    <h5>
      {{ searchTitle }}
      <span class="lightText">{{ searchValue }}</span>
    </h5>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: ['searchTitle', 'searchValue'],
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
    resetSearch() {
      if (this.query.length < 1) {
        console.log('input less than 1 ');
        this.$emit('onreset', this.searchTitle, this.searchValue);
      }
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
    padding: 0 15px;
    border-radius: 5px;
    background: var(--white);

    display: -ms-flexbox;
    display: flex;
    align-items: center;
  }
  input {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border-radius: 5px;
    border: none;
    caret-color: var(--tealDark);
  }
  input:focus {
    outline: none;
    border: none;
  }
  h5 {
    color: var(--tealDark);
  }
  .lightText {
    color: var(--tealMedium);
  }

  @media (max-width: 576px) {
    .header {
      height: 120px;
    }
    form {
      width: 95%;
      border-radius: 5px;
    }
    input {
      width: 100%;
      padding: 6px;
    }
  }

</style>
