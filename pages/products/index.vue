<template>
   <div class="container">
        <LargeCardDisplay v-for="data in largeCardInfo.slice(0,1)" :key="data.id + 'large'" :data="data" />
        <SmallCardDisplay v-for="data in smallCardInfo.slice(0,1)" :key="data.id + 'small'" :data="data" />
   </div>
</template>

<script>
import { largeCardSections, smallCardSections } from '@/assets/data.js'
export default {
    data() {
        return {
            largeCardInfo: largeCardSections,
            smallCardInfo: smallCardSections
        }
    },
    created() {
        console.log(this.$nuxt);
    }
 }
</script>

<style>

</style>