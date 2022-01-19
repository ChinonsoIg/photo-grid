<template>
  <div class="backdrop" @click.self="closeModal">
    <span class="close-modal" @click="closeModal">X</span>
    <div class="modal">
      <!-- <slot></slot> -->

      <!-- Named slot -->
      <!-- <div class="actions"> -->
        <slot name="links"></slot>
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
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
  }
  .modal {
    box-sizing: border-box;
    width: 60%;
    /* padding: 20px; */
    margin: 0 auto;
    background: rgb(255, 255, 255);
    border-radius: 0.5rem;
    box-sizing: border-box;
    height: 85vh;
    /* border: 2px solid brown; */
  }
  .close-modal {
    position: relative;
    color: red;
    font-size: larger;
    font-weight: 700;
    top: 8%;
    right: -40%;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    .modal {
      box-sizing: border-box;
      width: 80%;
      /* padding: 20px; */
      margin: 0 auto;
      background: rgb(255, 255, 255);
      border-radius: 0.5rem;
      box-sizing: border-box;
      height: 70vh;
      border: 2px solid brown;
    }
    .close-modal {
      position: relative;
      color: red;
      font-size: larger;
      font-weight: 700;
      top: 8%;
      right: -40%;
      cursor: pointer;
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
