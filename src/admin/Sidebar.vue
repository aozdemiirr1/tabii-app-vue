<template>
    <div class="w-64 bg-white shadow-md p-4">
        <router-link to="/admin" class="text-xl font-bold mb-6 block">
             Admin Panel
        </router-link>
      <ul class="space-y-4">
        <li>
          <button @click="toggleDropdown" class="block py-2 px-4 w-full text-left rounded hover:bg-gray-200">
            Logo Yönetimi
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 inline ml-2" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M6.293 9.293a1 1 0 011.414 0L10 10.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </button>
          <ul v-if="dropdownOpen" class="mt-2 space-y-2">
            <li>
              <router-link to="/admin/logos" class="block py-2 px-4 rounded hover:bg-gray-200">Logo Listesi</router-link>
            </li>
            <li>
              <router-link to="/admin/logos/create" class="block py-2 px-4 rounded hover:bg-gray-200">Logo Ekle</router-link>
            </li>
          </ul>
        </li>
        <li>
          <router-link to="/admin/menu" class="block py-2 px-4 rounded hover:bg-gray-200">Menü Yönetimi</router-link>
        </li>
        <li>
          <router-link to="/admin/blog" class="block py-2 px-4 rounded hover:bg-gray-200">Blog Yazısı Ekle</router-link>
        </li>
        <li>
          <router-link to="/admin/services" class="block py-2 px-4 rounded hover:bg-gray-200">Hizmetler</router-link>
        </li>
      </ul>
      <button @click="logout" class="w-full bg-red-500 text-white py-2 px-4 rounded mt-6">Çıkış Yap</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Sidebar',
    data() {
      return {
        dropdownOpen: false
      }
    },
    methods: {
      toggleDropdown() {
        this.dropdownOpen = !this.dropdownOpen;
      },
      logout() {
        // Clear authentication details and redirect to login page
        this.$router.push('/login');
      }
    }
  }
  </script>
  
  <style scoped>
  /* Add any additional styles if needed */
  </style>
  