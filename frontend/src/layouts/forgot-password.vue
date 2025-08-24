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

    <!-- Şifremi unuttum formu -->
    <div class="flex flex-col items-center justify-center min-h-screen pt-32 pb-16">
      <div class="bg-black bg-opacity-80 rounded-lg px-10 py-10 w-full max-w-xl shadow-lg">
        <h2 class="text-white text-center text-4xl font-bold mb-2">Şifremi Unuttum</h2>
        <p class="text-white text-center text-lg mb-8">E-posta adresini gir ve şifre sıfırlama bağlantısı al!</p>
        
        <div v-if="!emailSent" class="mb-6">
          <form @submit.prevent="sendResetEmail">
            <div class="mb-6">
              <input
                v-model="email"
                type="email"
                placeholder="E-posta adresin"
                class="w-full px-4 py-3 rounded border border-gray-700 bg-black bg-opacity-60 text-white text-lg focus:outline-none focus:border-green-400"
                required
              />
            </div>
            <button
              type="submit"
              class="w-full py-3 rounded bg-green-400 hover:bg-green-500 text-black font-bold text-xl mb-4 transition"
            >
              Şifre Sıfırlama Bağlantısı Gönder
            </button>
          </form>
        </div>

        <div v-else class="text-center">
          <div class="mb-6">
            <svg class="mx-auto h-16 w-16 text-green-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <h3 class="text-white text-xl font-bold mb-2">E-posta Gönderildi!</h3>
            <p class="text-gray-300 text-sm">
              {{ email }} adresine şifre sıfırlama bağlantısı gönderdik. 
              Lütfen e-postanızı kontrol edin ve bağlantıya tıklayın.
            </p>
          </div>
          <button
            @click="resetForm"
            class="w-full py-3 rounded bg-gray-600 hover:bg-gray-700 text-white font-bold text-xl mb-4 transition"
          >
            Başka E-posta Gir
          </button>
        </div>

        <div class="text-center mt-4">
          <span class="text-white text-sm">Şifreni hatırladın mı? </span>
          <a @click="$router.push('/login')" class="text-green-400 font-bold cursor-pointer hover:underline">Giriş Yap</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ForgotPassword',
  data() {
    return {
      email: '',
      emailSent: false
    }
  },
  methods: {
    sendResetEmail() {
      // Şifre sıfırlama e-postası gönderme işlemleri
      console.log('Password reset email sent to:', this.email);
      
      // Başarılı gönderim sonrası durumu güncelle
      this.emailSent = true;
    },
    resetForm() {
      this.email = '';
      this.emailSent = false;
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
