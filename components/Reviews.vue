<template>
  <div>
      <h3>
          Customer Reviews
      </h3>
      <div v-if="!$fetchState.pending">
          <ReviewCard v-for="review in reviewers" :key="review.login.uuid" :review="review" />
      </div>
      <div v-else>
          loading ......
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            reviewers: []
        }
    },
    async fetch() {
        console.log(this.$fetchState, '1')
        this.reviewers = await fetch('https://randomuser.me/api/?results=5').then(res => res.json()).then(res => res.results)
    }
}
</script>

<style scoped>

</style>