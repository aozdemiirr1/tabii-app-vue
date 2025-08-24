<template>
    <div class="min-h-screen bg-gray-100 flex gap-x-28">
      <Sidebar />  
      <div class="py-4 w-full" style="padding-right: 40px;">
        <h1 class="text-2xl font-bold mb-6">Logo Düzenle</h1>
        <form @submit.prevent="updateLogo">
            <div class="mb-4">
            <label class="block">Logo Adı:</label>
            <input v-model="logoName" type="text" class="w-full p-2 border" required />
            </div>
            <div class="mb-4">
            <label class="block">Logo URL:</label>
            <input v-model="logoUrl" type="text" class="w-full p-2 border" required />
            </div>
            <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded">Güncelle</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import Sidebar from './Sidebar.vue';
  
  export default {
    components : {
        Sidebar
    },
    data() {
      return {
        logoName: '',
        logoUrl: ''
      };
    },
    async created() {
      try {
        const response = await axios.get(`https://66e7327417055714e58bb31d.mockapi.io/logos/${this.$route.params.id}`);
        this.logoName = response.data.name;https://66e7327417055714e58bb31d.mockapi.io/logos
        this.logoUrl = response.data.imageUrl;
      } catch (error) {
        console.error('Logo düzenleme hatası:', error);
      }
    },
    methods: {
      async updateLogo() {
        try {
          await axios.put(`https://66e7327417055714e58bb31d.mockapi.io/logos/${this.$route.params.id}`, {
            name: this.logoName,
            imageUrl: this.logoUrl
          });
          this.$router.push('/admin/logos');
        } catch (error) {
          console.error('Logo güncelleme hatası:', error);
          alert('Bir hata oluştu!');
        }
      }
    }
  };
  </script>
  