<template>
  <div class="Hero container">
      <div class="text-container">
        <h1 class="header">
            Find your Fire extinguisher
        </h1>
        <p class="snippet">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi voluptatum nostrum ea laudantium laborum quod tempora dicta, sunt, tempore deleniti ab distinctio culpa esse minima reprehenderit? Repellendus, facilis? Quidem, harum.</p>
        <button class="button btn" @click="scrollToProducts">Start Looking</button>
      </div>
        <img class="image" src="~assets/svgs/fire-extinguisher.svg" alt="" />
  </div>
</template>

<script>
export default {
    methods: {
        scrollToProducts() {
            let elem = document.getElementById('largeCard')
            elem.scrollIntoView({
                behavior: 'smooth'
            })
        }
    }
}
</script>

<style scoped>
 .Hero {
        height: 100vh;
        position: relative;
        display: flex;
        padding: 5rem 0;
        align-items: flex-start;
        justify-content: space-between;
    }
    .text-container {
        width: 50%;
        margin-top: 4rem;
    }
    .header {
        font-weight: 900;
        font-size: 5rem;
    }
    .snippet {
        color: grey;
        font-size: 1.25rem;
    }
    .image {
        width: 27.5rem;
        margin-top: 2rem;
    }
    .overlay {
        background: rgba(0, 0, 0, 0);
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
    }
    .button {
        padding: 1rem 4rem;
        border-radius: 100rem;
        background-color: rgb(231, 81, 43);
        color: white;
        width: 20rem;
        font-weight: 700;
        transition: 0.5s;
    }
    .button:hover {
        width: 21.5rem;
    }
    @media (max-width: 500px) {
        .Hero {
            height: 40vh;
        }
    } 
</style>