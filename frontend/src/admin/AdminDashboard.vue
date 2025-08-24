<template>
    <div class="flex min-h-screen bg-gray-100">  
      <Sidebar />
      <!-- Main Content -->
      <div class="flex-1 p-6">
        <h1 class="text-2xl font-bold mb-6">Hoşgeldiniz!</h1>
        <router-view></router-view> <!-- Displays the nested route content -->
      </div>
    </div>
  </template>
  
  <script>

   import Sidebar from './Sidebar.vue';

  export default {
    name: "AdminDashboard",
    components : {
        Sidebar
    },
    methods: {
      logout() {
        // Clear authentication details and redirect to login page
        this.$router.push('/login');
      }
    }
  }
  </script>
  