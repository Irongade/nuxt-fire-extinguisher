<template>
  <div id="largeCard" class="Large container">
      <h4 class="header">
          {{data.title}}
      </h4>
      <p class="snippet">
          {{data.snippet}}
      </p>
    <div class="cards-container">
        <LargeCard v-for="card in data.cards" :key="card.id" :card="card" />
    </div>
  </div>
</template>

<script>
export default {
    props: ['data'],
    // data() {
    //     data: null
    // },
    // watch: {
    //     data() {
    //         return data
    //     }
    // }
}
</script>

<style scoped>
.Large {
    margin-top: 2rem;
}
.header {
    font-weight: 700;
    font-size: 1.5rem;
}
.snippet {
    color: grey;
    margin-bottom: 1.5rem;
}
.cards-container {
    display: grid;
    /* justify-content: space-between; */
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2rem;
}
</style>