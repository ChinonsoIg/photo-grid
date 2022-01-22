<template>
  <div class="backdrop">
    <span
      class="close-modal"
      @click.self="closeModal">
      X
    </span>
    <div class="modal">
      <!-- Named slot -->
      <slot name="imageDetails"></slot>
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
    background: var(--backdrop);
    width: 100%;
    height: 100%;
  }
  .modal {
    width: 60%;
    height: auto;
    margin: 60px auto;
    background: var(--white);
    border-radius: 0.5rem;
  }
  .close-modal {
    position: relative;
    top: 8%;
    right: -40%;
    /* margin: auto; */
    color: var(--white-5);
    font-size: large;
    font-weight: 300;
    cursor: pointer;
    padding: 2px 7px;
    border-radius: 50%;
  }
  .close-modal:hover {
    color: var(--white-5);
    background: var(--white-5);
  }
  @media (max-width: 992px) {
    .modal {
      width: 70%;
      /* margin: 60px auto; */
    }
    .close-modal {
      font-size: large;
      padding: 2px 6px;
      top: 10%;
    }
  }
  @media (max-width: 576px) {
    .modal {
      width: 80%;
    }
    .close-modal {
      font-size: medium;
      right: -43%;
    }
  }

</style>
