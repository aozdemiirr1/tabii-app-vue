<template>
    <div class="flex min-h-screen bg-gray-100">
      <!-- Sidebar -->
      <div class="w-64 bg-white shadow-md p-4">
        <h2 class="text-xl font-bold mb-6">Admin Panel</h2>
        <ul class="space-y-4">
          <li>
            <router-link to="/admin/logos/create" class="block py-2 px-4 rounded hover:bg-gray-200">Logo Ekleme</router-link>
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
  
      <!-- Main Content -->
      <div class="flex-1 p-6">
        <h1 class="text-2xl font-bold mb-6">Hoşgeldiniz!</h1>
        <router-view></router-view> <!-- Displays the nested route content -->
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "AdminDashboard",
    methods: {
      logout() {
        // Clear authentication details and redirect to login page
        this.$router.push('/login');
      }
    }
  }
  </script>
  