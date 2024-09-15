<template>
    <div class="admin-panel bg-gray-100 min-h-screen p-4">
      <h1 class="text-2xl font-bold mb-6">Logolar</h1>
      <table class="w-full bg-white shadow rounded">
        <thead>
          <tr>
            <th class="p-4 border-b">Logo Adı</th>
            <th class="p-4 border-b">Logo</th>
            <th class="p-4 border-b">İşlemler</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="logo in logos" :key="logo.id">
            <td class="p-4 border-b">{{ logo.name }}</td>
            <td class="p-4 border-b"><img :src="logo.imageUrl" alt="Logo" class="h-16" /></td>
            <td class="p-4 border-b">
              <button @click="editLogo(logo)" class="bg-yellow-500 text-white py-1 px-3 rounded">Düzenle</button>
              <button @click="deleteLogo(logo.id)" class="bg-red-500 text-white py-1 px-3 rounded ml-2">Sil</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        logos: []
      };
    },
    async created() {
      try {
        const response = await axios.get('https://66e7327417055714e58bb31d.mockapi.io/logos');
        this.logos = response.data;
      } catch (error) {
        console.error('Logo listeleme hatası:', error);
      }
    },
    methods: {
      async deleteLogo(id) {
        try {
          await axios.delete(`https://66e7327417055714e58bb31d.mockapi.io/logos/${id}`);
          this.logos = this.logos.filter(logo => logo.id !== id);
        } catch (error) {
          console.error('Logo silme hatası:', error);
          alert('Bir hata oluştu!');
        }
      },
      editLogo(logo) {
        // Logo düzenleme işlemleri burada yapılacak
        this.$router.push(`/admin/logos/edit/${logo.id}`);
      }
    }
  };
  </script>
  