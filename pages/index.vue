<template>
    <div class="container">
      <Hero />
      <LargeCardDisplay v-for="data in largeCardInfo" :key="data.id + 'large'" :data="data" />
      <SmallCardDisplay v-for="data in smallCardInfo" :key="data.id + 'small'" :data="data" />
    </div>
</template>

<script>
import Hero from '../components/Hero.vue'
import LargeCardDisplay from '../components/LargeCardDisplay.vue'

import {largeCardSections} from '@/assets/data.js'
import {smallCardSections} from '@/assets/data.js'

export default {
    components: { 
      Hero, 
      LargeCardDisplay 
    },
    data() {
      return {
        largeCardInfo: largeCardSections,
        smallCardInfo: smallCardSections
      }
    }
  }
</script>
 