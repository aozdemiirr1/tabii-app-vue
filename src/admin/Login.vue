<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
      <div class="login-form bg-white p-6 shadow-md rounded w-96">
        <h2 class="text-xl font-bold mb-4">Admin Giriş</h2>
        <form @submit.prevent="login">
          <div class="mb-4">
            <label class="block">Email:</label>
            <input v-model="email" type="email" class="w-full p-2 border">
          </div>
          <div class="mb-4">
            <label class="block">Şifre:</label>
            <input v-model="password" type="password" class="w-full p-2 border">
          </div>
          <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded">Giriş</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      login() {
        // Basit bir doğrulama kontrolü (şifrelenmemiş)
        if (this.email === 'admin@example.com' && this.password === 'password') {
          this.$router.push('/admin')
        } else {
          alert('Giriş bilgileri hatalı!')
        }
      }
    }
  }
  </script>
  