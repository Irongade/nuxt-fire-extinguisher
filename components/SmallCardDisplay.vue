<template>
    <div class="container">
        <h3 class="header">
            {{data.title}}
        </h3>
        <div class="card-container">
            <SmallCard v-for="card in data.cards" :key="card.id" :card="card" />
        </div>
    </div>
</template>

<script>
export default {
    props: ['data']
}
</script>

<style scoped>
    .container {
        padding: 2rem 0
    }
    .header {
        font-weight: 700;
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }
    .card-container {
        display: grid;
        justify-content: space-between;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        grid-gap: 1.25rem;
    }
</style>