<template>
    <div class="admin-panel bg-gray-100 min-h-screen p-4">
      <h1 class="text-2xl font-bold mb-6">Admin Panel</h1>
      <div class="grid grid-cols-1 gap-4">
        <router-link to="/admin/logo" class="p-4 bg-white shadow rounded">
          Logo Ekleme
        </router-link>
        <router-link to="/admin/menu" class="p-4 bg-white shadow rounded">
          Menü Yönetimi
        </router-link>
        <router-link to="/admin/blog" class="p-4 bg-white shadow rounded">
          Blog Yazısı Ekle
        </router-link>
        <router-link to="/admin/services" class="p-4 bg-white shadow rounded">
          Hizmetler
        </router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "AdminDashboard",
  }
  </script>
  