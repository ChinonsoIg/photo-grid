<template>
  <div class="backdrop">
    <span
      class="close-modal"
      @click.self="closeModal">
      X
    </span>
    <div class="modal">
      <!-- Named slot -->
      <!-- <div class="actions"> -->
        <slot name="imageDetails"></slot>
      <!-- </div> -->

    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closeModal() {
      console.log('close');
      this.$emit('close');
    },
  },
};

</script>

<style scoped>
  .backdrop {
    top: 0;
    left: 0;
    position: fixed;
    /* background: rgba(0, 0, 0, 0.5); */
    background: rgba(0, 0, 0, 0.8);
    width: 100%;
    height: 100%;
  }
  .modal {
    /* box-sizing: border-box; */
    width: 60%;
    height: 85vh;
    margin: 0 auto;
    background: rgb(255, 255, 255);
    border-radius: 0.5rem;
    box-sizing: border-box;
    border: 2px solid red;
  }
  .close-modal {
    position: relative;
    top: 8%;
    right: -40%;
    margin: auto;
    color: rgba(255, 255, 255, 0.5);
    font-size: large;
    font-weight: 100;
    cursor: pointer;
    padding: 2px 7px;
    border-radius: 50%;
  }
  .close-modal:hover {
    color: rgba(255, 255, 255, 0.6);
    background: rgba(255, 255, 255, 0.4);
  }
  @media (max-width: 992px) {
    .modal {
      width: 70%;
      height: 65vh;
      margin: 40px auto;
      background: rgb(255, 255, 255);
      border-radius: 0.5rem;
    }
    .close-modal {
      font-size: medium;
      padding: 2px 6px;
      top: 3%;
    }
  }
  @media (max-width: 576px) {
    .grid-container {
      grid-template-columns: repeat(1, 1fr);
      padding: 1.5rem;
      gap: 2rem;
      grid-auto-rows: 5rem;
    }
    .close-modal {
      font-size: small;
      right: -42%;
    }
  }

</style>
