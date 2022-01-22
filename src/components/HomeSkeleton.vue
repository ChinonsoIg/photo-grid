<template>
  <div class="grid-container">
    <div class="skeleton-collection">
      <div></div>
      <div class="skeleton-text-container">
        <div class="skeleton-text"></div>
        <div class="skeleton-text"></div>
      </div>
    </div>
    <div class="skeleton-collection">
      <div></div>
      <div class="skeleton-text-container">
        <div class="skeleton-text"></div>
        <div class="skeleton-text"></div>
      </div>
    </div>
    <div class="skeleton-collection">
      <div></div>
      <div class="skeleton-text-container">
        <div class="skeleton-text"></div>
        <div class="skeleton-text"></div>
      </div>
    </div>
    <div class="skeleton-collection">
      <div></div>
      <div class="skeleton-text-container">
        <div class="skeleton-text"></div>
        <div class="skeleton-text"></div>
      </div>
    </div>
    <div class="skeleton-collection">
      <div></div>
      <div class="skeleton-text-container">
        <div class="skeleton-text"></div>
        <div class="skeleton-text"></div>
      </div>
    </div>
    <div class="skeleton-collection">
      <div></div>
      <div class="skeleton-text-container">
        <div class="skeleton-text"></div>
        <div class="skeleton-text"></div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomeSkeleton',
  methods: {
    populateDiv(div) {
      console.log(div);
    },
  },
};
</script>

<style scoped>
  .grid-container {
    max-width: 900px;
    margin: -60px auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 10px;
  }
  .skeleton-collection {
    height: 300px;
    margin: .4rem;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }
  .skeleton-collection {
    opacity: .7;
    animation: skeleton-collection-loading 1s linear infinite alternate;
  }
  @keyframes skeleton-collection-loading {
    0% {
      background-color: var(--skeleton-85);
    }
    100% {
      background-color: var(--skeleton-95);
    }
  }

  .skeleton-text-container {
    width: 95%;
    margin: 0 auto;
  }
  .skeleton-text {
    width: 98%;
    height: .5rem;
    margin-bottom: .25rem;
    border-radius: .125rem;
  }
  .skeleton-text:last-child {
    width: 60%;
  }

  .skeleton-text {
    opacity: .7;
    animation: skeleton-text-loading 1s linear infinite alternate;
  }
  @keyframes skeleton-text-loading {
    0% {
      background-color: var(--skeleton-50);
    }
    100% {
      background-color: var(--skeleton-80);
    }
  }

</style>
