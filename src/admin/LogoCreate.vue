<template>
    <div class="min-h-screen p-4 bg-gray-100">
      <h1 class="text-2xl font-bold mb-6">Logo Ekle</h1>
      <form @submit.prevent="addLogo">
        <div class="mb-4">
          <label class="block">Logo Adı:</label>
          <input v-model="logoName" type="text" class="w-full p-2 border" required />
        </div>
        <div class="mb-4">
          <label class="block">Logo URL:</label>
          <input v-model="logoUrl" type="text" class="w-full p-2 border" required />
        </div>
        <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded">Ekle</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        logoName: '',
        logoUrl: ''
      };
    },
    methods: {
      async addLogo() {
        try {
          await axios.post('https://66e7327417055714e58bb31d.mockapi.io/logos', {
            name: this.logoName,
            imageUrl: this.logoUrl
          });
          this.$router.push('/admin/logos');
        } catch (error) {
          console.error('Logo ekleme hatası:', error);
          alert('Bir hata oluştu!');
        }
      }
    }
  };
  </script>
  