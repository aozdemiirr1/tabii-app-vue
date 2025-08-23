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
        <div class="relative inline-block text-left">
          <button @click="toggleDropdown"
            class="flex justify-center items-center gap-2 h-12 w-32 bg-transparent text-white font-bold text-xl rounded px-4">
            <!-- Dünya ikonu (SVG) -->
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.25-11.41a6.96 6.96 0 00-1.52-.88 8.01 8.01 0 00-.73 2.54h2.25a7 7 0 00-.0-1.66zm-6.5 0c.3-.27.63-.51.98-.71a7.98 7.98 0 00-.73 2.54H4.5c.09-.57.27-1.1.5-1.61.2-.45.44-.88.75-1.29zm6.5 6.82a6.98 6.98 0 001.52-.88 7 7 0 00.0-1.66h-2.25a8.01 8.01 0 00.73 2.54zm-6.5 0a8.01 8.01 0 00.73-2.54H4.5a7 7 0 00.0 1.66 6.98 6.98 0 001.52.88zM10 3.5a6.96 6.96 0 00-1.66.2c.23.43.43.9.6 1.41h2.12c.17-.51.37-.98.6-1.41A6.96 6.96 0 0010 3.5zm-1.38 10.89A6.96 6.96 0 0010 16.5c.6 0 1.18-.08 1.72-.23a7.97 7.97 0 00-.6-1.41H8.62c-.17.51-.37.98-.6 1.41z"
                clip-rule="evenodd" />
            </svg>
            Türkçe
          </button>

          <ul v-show="dropdownOpen"
            class="absolute right-0 mt-2 w-36 bg-white border border-gray-200 rounded shadow-lg">
            <li><a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">English</a></li>
            <li><a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">Türkçe</a></li>
            <li><a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">Español</a></li>
            <li><a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">العربية</a></li>
          </ul>
        </div>
        <button class="flex justify-center items-center h-12 w-36 text-white rounded font-bold text-xl border"
          @click="$router.push('/login')">
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
  name: 'SiteLayout',
  data() {
    return {
      dropdownOpen: false
    }
  },
  methods: {
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
    },
    handleClickOutside(event) {
      const dropdown = this.$el.querySelector('.relative');
      if (!dropdown.contains(event.target)) {
        this.dropdownOpen = false;
      }
    }
  },
  mounted() {
    // Sayfa dışına tıklanınca dropdown kapansın
    document.addEventListener('click', this.handleClickOutside);
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
  }
}
</script>

<style scoped>
/* Site layout'a özel stiller */
</style>
