<template>
    <div>
      <!-- Logolar ve üst menü -->
      <img class="w-full" style="filter: brightness(0.5);" src="https://cms-tabii-public-image.tabii.com/int/webp/w1600/q85/37964.jpeg">
      <div class="flex flex-row justify-between w-full fixed top-0">
        <div class="py-8 px-24">
          <a @click="$router.push('/')" class="cursor-pointer">
            <img src="https://cms-tabii-public-static.tabii.com/assets/tabii.svg" alt="Tabii Logo" class="w-32">
          </a>
        </div>
        <div class="flex flex-row gap-2 py-8 px-24">
          <button class="flex justify-center items-center h-12 w-24 text-white font-bold text-xl">
            Türkçe
          </button>
          <button
            class="flex justify-center items-center h-12 w-36 text-white rounded font-bold text-xl border"
            @click="$router.push('/login')"
          >
            Giriş Yap
          </button>
        </div>
      </div>

      <div class="flex items-center justify-center py-4" style="background-color: #000000;">
        <!-- İçerik alanı -->
      </div>
    </div>
</template>

<script>
export default {
  name: 'SiteLayout'
};
</script>

<style scoped>
/* Site layout'a özel stiller */
</style>
