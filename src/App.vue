<template>
  <div>
    <router-view></router-view> <!-- This renders the current route component -->
    <!-- Display logos here -->
    <div v-if="logos.length">
      <div v-for="logo in logos" :key="logo.id" class="py-8 px-24">
        <img :src="logo.imageUrl" :alt="logo.name" class="w-32" />
      </div>
    </div>
    <div v-else>
      <p class="text-center text-gray-500">Henüz logo eklenmedi.</p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'App',
  computed: {
    ...mapState(['logos'])
  },
  async created() {
    // Fetch logos when the component is created
    await this.$store.dispatch('fetchLogos');
  }
}
</script>

<style scoped>
/* Add additional styles if needed */
</style>
