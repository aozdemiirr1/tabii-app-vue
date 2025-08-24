<template>
    <div class="flex min-h-screen bg-gray-100">
      <Sidebar />
      <!-- Main Content -->
      <div class="flex-1 p-6">
        <h1 class="text-2xl font-bold mb-6">Hoşgeldiniz!</h1>
        <router-view></router-view> <!-- Admin route içerikleri burada gösterilecek -->
      </div>
    </div>
  </template>
  
  <script>
  import Sidebar from '../admin/Sidebar.vue'; // Sidebar'ı buraya doğru konumda import et
  
  export default {
    name: 'AdminLayout',
    components: {
      Sidebar
    }
  };
  </script>
  
  <style scoped>
  /* Admin layout'a özel stiller */
  </style>
  