<template>
  <div>
    <!-- Arka plan görseli -->
    <img class="w-full fixed top-0 left-0 h-full object-cover" style="filter: brightness(0.5); z-index:-1;" src="https://cms-tabii-public-image.tabii.com/int/webp/w1600/q85/37964.jpeg">

    <!-- Üst menü -->
    <div class="flex flex-row justify-between w-full fixed top-0">
      <div class="py-8 px-24">
        <a @click="$router.push('/')" class="cursor-pointer">
          <img src="https://cms-tabii-public-static.tabii.com/assets/tabii.svg" alt="Tabii Logo" class="w-32">
        </a>
      </div>
      <div class="flex flex-row gap-2 py-8 px-24 items-center">
        <button class="flex justify-center items-center h-12 w-24 text-white font-bold text-xl">
          Türkçe
        </button>
      </div>
    </div>

    <!-- Kayıt formu -->
    <div class="flex flex-col items-center justify-center min-h-screen pt-32 pb-16">
      <div class="bg-black bg-opacity-80 rounded-lg px-10 py-10 w-full max-w-xl shadow-lg">
        <h2 class="text-white text-center text-4xl font-bold mb-2">Hesap Oluştur</h2>
        <p class="text-white text-center text-lg mb-8">Ücretsiz hesap oluştur ve izlemeye başla!</p>
        <form @submit.prevent="register">
          <div class="mb-4">
            <input
              v-model="firstName"
              type="text"
              placeholder="Ad"
              class="w-full px-4 py-3 rounded border border-gray-700 bg-black bg-opacity-60 text-white text-lg focus:outline-none focus:border-green-400"
              required
            />
          </div>
          <div class="mb-4">
            <input
              v-model="lastName"
              type="text"
              placeholder="Soyad"
              class="w-full px-4 py-3 rounded border border-gray-700 bg-black bg-opacity-60 text-white text-lg focus:outline-none focus:border-green-400"
              required
            />
          </div>
          <div class="mb-4">
            <input
              v-model="email"
              type="email"
              placeholder="E-posta"
              class="w-full px-4 py-3 rounded border border-gray-700 bg-black bg-opacity-60 text-white text-lg focus:outline-none focus:border-green-400"
              required
            />
          </div>
          <div class="mb-4 relative">
            <input
              v-model="password"
              :type="showPassword ? 'text' : 'password'"
              placeholder="Şifre"
              class="w-full px-4 py-3 rounded border border-gray-700 bg-black bg-opacity-60 text-white text-lg focus:outline-none focus:border-green-400"
              required
            />
            <span
              class="absolute right-4 top-3 cursor-pointer text-gray-400"
              @click="showPassword = !showPassword"
            >
              <svg v-if="showPassword" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke="white" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke="white" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-.274.835-.634 1.627-1.07 2.357M15.5 15.5l-1.5-1.5"/></svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke="white" stroke-width="2" d="M3 3l18 18M9.88 9.88A3 3 0 0012 15a3 3 0 002.12-5.12M6.1 6.1C4.07 7.94 2.46 10.36 2.46 12c0 1.64 1.61 4.06 3.64 5.9M17.9 17.9C19.93 16.06 21.54 13.64 21.54 12c0-1.64-1.61-4.06-3.64-5.9"/></svg>
            </span>
          </div>
          <div class="mb-4 relative">
            <input
              v-model="confirmPassword"
              :type="showConfirmPassword ? 'text' : 'password'"
              placeholder="Şifre Tekrar"
              class="w-full px-4 py-3 rounded border border-gray-700 bg-black bg-opacity-60 text-white text-lg focus:outline-none focus:border-green-400"
              required
            />
            <span
              class="absolute right-4 top-3 cursor-pointer text-gray-400"
              @click="showConfirmPassword = !showConfirmPassword"
            >
              <svg v-if="showConfirmPassword" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke="white" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke="white" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-.274.835-.634 1.627-1.07 2.357M15.5 15.5l-1.5-1.5"/></svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke="white" stroke-width="2" d="M3 3l18 18M9.88 9.88A3 3 0 0012 15a3 3 0 002.12-5.12M6.1 6.1C4.07 7.94 2.46 10.36 2.46 12c0 1.64 1.61 4.06 3.64 5.9M17.9 17.9C19.93 16.06 21.54 13.64 21.54 12c0-1.64-1.61-4.06-3.64-5.9"/></svg>
            </span>
          </div>
          <div class="mb-6">
            <label class="flex items-center text-white text-sm">
              <input
                v-model="acceptTerms"
                type="checkbox"
                class="mr-2 w-4 h-4 text-green-400 bg-black border-gray-700 rounded focus:ring-green-400 focus:ring-2"
                required
              />
              <span>Kullanım şartlarını ve gizlilik politikasını kabul ediyorum</span>
            </label>
          </div>
          <button
            type="submit"
            class="w-full py-3 rounded bg-green-400 hover:bg-green-500 text-black font-bold text-xl mb-2 transition"
          >
            Hesap Oluştur
          </button>
        </form>
        <div class="text-center mt-4">
          <span class="text-white text-sm">Zaten bir hesabın var mı? </span>
          <a @click="$router.push('/login')" class="text-green-400 font-bold cursor-pointer hover:underline">Giriş Yap</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      showPassword: false,
      showConfirmPassword: false,
      acceptTerms: false
    }
  },
  methods: {
    register() {
      // Şifre kontrolü
      if (this.password !== this.confirmPassword) {
        alert('Şifreler eşleşmiyor!');
        return;
      }
      
      // Kayıt işlemleri
      console.log('Register attempt:', {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password
      });
      
      // Başarılı kayıt sonrası login sayfasına yönlendir
      this.$router.push('/login');
    }
  }
}
</script>

<style scoped>
/* Ekran ortalama ve responsive için ek stiller */
@media (max-width: 768px) {
  .px-24 { padding-left: 1rem !important; padding-right: 1rem !important; }
  .py-8 { padding-top: 1rem !important; padding-bottom: 1rem !important; }
  .max-w-xl { max-width: 95vw !important; }
}
</style>
