<template>
    <div>
      <!-- Logolar ve üst menü -->
      <img class="w-full" style="filter: brightness(0.5);" src="https://cms-tabii-public-image.tabii.com/int/webp/w1600/q85/37964.jpeg">
      <div v-if="logos.length" class="flex flex-row justify-between w-full fixed top-0">
        <div v-for="logo in logos" :key="logo.id" class="py-8 px-24">
          <img :src="logo.imageUrl" :alt="logo.name" class="w-32" />
        </div>
        <div class="flex flex-row gap-2 py-8 px-24">
          <button class="flex justify-center items-center h-12 w-24 text-white font-bold text-xl">Türkçe</button>
          <button class="flex justify-center items-center h-12 w-36 text-white rounded font-bold text-xl border">Giriş Yap</button>
        </div>
      </div>
  
      <!-- Ana içerik burada router-view ile görüntülenecek -->
      <router-view></router-view>
    </div>
  </template>
  
  <script>
  import { mapState } from 'vuex';
  
  export default {
    name: 'SiteLayout',
    computed: {
      ...mapState(['logos'])
    },
    async created() {
      // Logoları fetch et
      await this.$store.dispatch('fetchLogos');
    }
  };
  </script>
  
  <style scoped>
  /* Site layout'a özel stiller */
  </style>
  