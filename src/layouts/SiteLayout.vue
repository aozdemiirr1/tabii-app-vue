<template>
  <div class="overflow-x-hidden">
    <!-- Arka plan görseli - Tüm sayfa boyunca -->
    <img class="w-full fixed top-0 left-0 h-full object-cover" style="filter: brightness(0.5); z-index:-1;" src="https://cms-tabii-public-image.tabii.com/int/webp/w1600/q85/37964.jpeg">
    
    <!-- Logolar ve üst menü -->
    <div class="flex flex-row justify-between w-full fixed top-0 z-50">
      <div class="py-8 px-24">
        <a @click="$router.push('/')" class="cursor-pointer">
          <img src="https://cms-tabii-public-static.tabii.com/assets/tabii.svg" alt="Tabii Logo" class="w-32">
        </a>
      </div>
      <div class="flex flex-row gap-2 py-8 px-24">
        <div class="relative inline-block text-left">
          <button @click="toggleDropdown"
            class="flex justify-center items-center gap-2 h-12 w-32 bg-transparent text-white font-bold text-xl rounded px-4">
            <!-- Dünya ikonu (SVG) -->
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.25-11.41a6.96 6.96 0 00-1.52-.88 8.01 8.01 0 00-.73 2.54h2.25a7 7 0 00-.0-1.66zm-6.5 0c.3-.27.63-.51.98-.71a7.98 7.98 0 00-.73 2.54H4.5c.09-.57.27-1.1.5-1.61.2-.45.44-.88.75-1.29zm6.5 6.82a6.98 6.98 0 001.52-.88 7 7 0 00.0-1.66h-2.25a8.01 8.01 0 00.73 2.54zm-6.5 0a8.01 8.01 0 00.73-2.54H4.5a7 7 0 00.0 1.66 6.98 6.98 0 001.52.88zM10 3.5a6.96 6.96 0 00-1.66.2c.23.43.43.9.6 1.41h2.12c.17-.51.37-.98.6-1.41A6.96 6.96 0 0010 3.5zm-1.38 10.89A6.96 6.96 0 0010 16.5c.6 0 1.18-.08 1.72-.23a7.97 7.97 0 00-.6-1.41H8.62c-.17.51-.37.98-.6 1.41z"
                clip-rule="evenodd" />
            </svg>
            Türkçe
          </button>

          <ul v-show="dropdownOpen"
            class="absolute right-0 mt-2 w-36 bg-white border border-gray-200 rounded shadow-lg">
            <li><a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">English</a></li>
            <li><a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">Türkçe</a></li>
            <li><a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">Español</a></li>
            <li><a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">العربية</a></li>
          </ul>
        </div>
        <button class="flex justify-center items-center h-12 w-36 text-white rounded font-bold text-xl border"
          @click="$router.push('/login')">
          Giriş Yap
        </button>
      </div>
    </div>

    <!-- Banner Section -->
    <div class="relative min-h-screen">
      <!-- Overlay -->
      <div class="absolute inset-0 bg-black bg-opacity-50"></div>
      
      <!-- Main Title and Email Form positioned above background -->
      <div class="relative z-10 flex items-center justify-center min-h-screen">
        <div class="text-center text-white px-8 w-full max-w-4xl">
          <h1 class="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Orijinal diziler, prestijli UEFA maçları ve binlerce saatlik içerik
          </h1>
          <p class="text-xl md:text-2xl text-green-400 font-semibold mb-8">
            İzlediğine Değsin!
          </p>
          
          <!-- Email Signup Form -->
          <div class="flex flex-col md:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="E-posta adresi" 
              class="w-full md:w-80 px-6 py-4 text-gray-800 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              v-model="email"
            >
            <button 
              class="w-full md:w-auto bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200"
              @click="handleSignup"
            >
              Başla
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Movie Slider Section -->
    <div class="relative py-16">
      <div class="absolute inset-0 bg-black bg-opacity-80"></div>
      <div class="container mx-auto px-8 relative z-10">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
          tabii'ye Özel İçerikler
        </h2>
        <p class="text-lg text-white mb-12 text-center max-w-3xl mx-auto">
          Başka hiçbir yerde bulunmayan özgün içeriklerin dünyasına adım at!
        </p>
        
        <!-- Movie Slider -->
        <div class="relative">
          <!-- Right Navigation Button Only -->
          <button 
            @click="slideRight" 
            class="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-transparent text-white p-3 hover:bg-white hover:bg-opacity-10 rounded-full transition-all duration-200"
          >
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
          
          <!-- Movie Container -->
          <div class="overflow-hidden">
            <div 
              class="flex gap-6 transition-transform duration-300 ease-in-out" 
              :style="{ transform: `translateX(${slideOffset}px)` }"
            >
              <div 
                v-for="(movie, index) in movies" 
                :key="index"
                class="flex-shrink-0 w-72 group cursor-pointer"
              >
                <div class="relative overflow-hidden rounded-lg">
                  <img 
                    :src="movie.image" 
                    :alt="movie.title"
                    class="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-105"
                  >
                  <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div class="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 class="font-bold text-lg mb-1">{{ movie.title }}</h3>
                    <p v-if="movie.subtitle" class="text-sm text-gray-300">{{ movie.subtitle }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Family Content Section -->
    <div class="relative py-20">
      <div class="absolute inset-0 bg-black bg-opacity-80"></div>
      <div class="container mx-auto px-8 relative z-10">
        <!-- Main Title with Shield Icon -->
        <div class="text-center mb-16">
          <div class="flex justify-center items-center mb-6">
            <!-- Shield Icon with Checkmark -->
            <div class="w-16 h-16 bg-white rounded-lg flex items-center justify-center mr-4">
              <svg class="w-10 h-10 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M2.166 4.8A2.166 2.166 0 014.333 2h3.334c.736 0 1.447.246 2.022.68l1.17.85a2.166 2.166 0 001.022.68l2.94.588a2.166 2.166 0 012.022 1.7l.588 2.94c.1.5.4.95.68 1.3.28.35.62.65 1.022.85l1.17.85c.575.434 1.286.68 2.022.68h3.334a2.166 2.166 0 012.166 2.166v6.668A2.166 2.166 0 0116.667 18h-3.334c-.736 0-1.447-.246-2.022-.68l-1.17-.85a2.166 2.166 0 00-1.022-.68l-2.94-.588a2.166 2.166 0 01-2.022-1.7l-.588-2.94a2.166 2.166 0 00-.68-1.3 2.165 2.165 0 00-1.022-.85l-1.17-.85A2.166 2.166 0 007.667 4H4.333a2.166 2.166 0 00-2.166 2.166v6.668z" clip-rule="evenodd"/>
                <path d="M8 12a2 2 0 100-4 2 2 0 000 4z"/>
              </svg>
            </div>
          </div>
          <h2 class="text-4xl md:text-5xl font-bold text-white">
            Tüm aileye uygun içerikler
          </h2>
        </div>

        <!-- Two Column Layout -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <!-- Left Side - Text Content -->
          <div class="space-y-12">
            <!-- Children Block -->
            <div>
              <h3 class="text-3xl font-bold text-green-400 mb-4 title">
                Çocuklar
              </h3>
              <p class="text-xl text-white leading-relaxed">
                Çocuklar, güvenebileceğin yapımlar sayesinde saatlerce sürecek eğlencenin tadını çıkaracak, yeni dünyalar keşfedecek ve yeni karakterler tanıyacak
              </p>
            </div>

            <!-- For You Block -->
            <div>
              <h3 class="text-3xl font-bold text-green-400 mb-4">
                Senin İçin
              </h3>
              <p class="text-xl text-white leading-relaxed">
                Tüm ailenle birlikte keyfini çıkarabileceğin yapımları izle
              </p>
            </div>
          </div>

          <!-- Right Side - Illustration -->
          <div class="relative">
            <!-- Abstract Background Shapes -->
            <div>
              <!-- Large Green Star/Burst Shape -->
              <img src="https://cms-tabii-public-image.tabii.com/int/webp/shield-bg.png" class="w-full h-full object-cover">
              
              <!-- Diagonal White Stripe -->
              <div class="absolute bottom-0 right-0 w-32 h-96 bg-white opacity-10 transform rotate-45 origin-bottom-right"></div>
            </div>

            <!-- Characters Container -->
            <div class="relative z-10 flex items-end justify-center h-6">
              
              

             

            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Enjoy It Section -->
    <div class="relative py-20">
      <div class="absolute inset-0 bg-black bg-opacity-80"></div>
      <div class="container mx-auto px-8 relative z-10">
        <!-- Main Title -->
        <div class="text-center mb-20">
          <h2 class="text-5xl md:text-6xl font-bold text-white mb-4">
            Keyfini Çıkar!
          </h2>
          <p class="text-2xl md:text-3xl text-white">
            İstediğin zaman, istediğin yerde...
          </p>
        </div>

        <!-- Device Screens Container -->
         <div class="flex justify-center items-center">
          <img src="https://cms-tabii-public-static.tabii.com/assets/devices2.png" alt="">
         </div>
      </div>
    </div>

    <!-- Supported Devices Section -->
    <div class="relative py-16">
      <div class="absolute inset-0 bg-black bg-opacity-80"></div>
      <div class="container mx-auto px-8 relative z-10">
        <div class="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                     <!-- Telefon -->
           <div class="flex items-center gap-3">
             <div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
               <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                 <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
               </svg>
             </div>
             <span class="text-white text-3xl font-semibold">Telefon</span>
           </div>

           <!-- Tablet -->
           <div class="flex items-center gap-3">
             <div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
               <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                 <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
               </svg>
             </div>
             <span class="text-white text-3xl font-semibold">Tablet</span>
           </div>

           <!-- Web -->
           <div class="flex items-center gap-3">
             <div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
               <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                 <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
               </svg>
             </div>
             <span class="text-white text-3xl font-semibold">Web</span>
           </div>

           <!-- Apple TV -->
           <div class="flex items-center gap-3">
             <div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
               <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                 <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
               </svg>
             </div>
             <span class="text-white text-3xl font-semibold">Apple TV</span>
           </div>

           <!-- Android TV -->
           <div class="flex items-center gap-3">
             <div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
               <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                 <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
               </svg>
             </div>
             <span class="text-white text-3xl font-semibold">Android TV</span>
           </div>

           <!-- Akıllı TV -->
           <div class="flex items-center gap-3">
             <div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
               <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                 <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
               </svg>
             </div>
             <span class="text-white text-3xl font-semibold">Akıllı TV</span>
           </div>
        </div>
      </div>
    </div>

    <div class="relative py-20">
      <div class="absolute inset-0 bg-black bg-opacity-80"></div>
      <div class="container mx-auto px-8 relative z-10">
        <div class="flex flex-row justify-center items-center absolute inset-0 bg-black bg-opacity-80 gap-4">
          <div>
            <img src="https://cms-tabii-public-static.tabii.com/assets/journeys_with_bg.jpg" alt="" class="w-full h-full object-cover">
          </div>
        </div>
      </div>
    </div>

    <!-- Pricing Plans Section -->
    <div class="relative py-20">
      <div class="absolute inset-0 bg-black bg-opacity-80"></div>
      <div class="container mx-auto px-8 relative z-10">
        <!-- Header Section -->
        <div class="flex flex-col lg:flex-row justify-center items-center mb-16">
          <!-- Center - Main Title -->
          <div class="text-center">
            <h1 class="text-3xl md:text-4xl font-bold text-gray-300">
              tabii'yi Keşfetmeye Şimdi Başla!
            </h1>
          </div>
        </div>

        <!-- Pricing Cards -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <!-- Free Plan Card -->
          <div class="bg-gray-900 border border-gray-700 rounded-lg p-8 hover:border-gray-600 transition-colors duration-200">
            <h3 class="text-3xl font-bold text-white mb-4">Ücretsiz</h3>
            <div class="text-2xl font-bold text-white mb-2">0.00 TRY /Ay</div>
            <p class="text-gray-300 mb-8">tabii'yi ücretsiz keşfet</p>
            
            <!-- Features List -->
            <ul class="space-y-4">
              <li class="flex items-start gap-3">
                <div class="w-4 h-4 bg-green-500 rounded mt-1 flex-shrink-0"></div>
                <span class="text-white">Reklamlı deneyim</span>
              </li>
              <li class="flex items-start gap-3">
                <div class="w-4 h-4 bg-green-500 rounded mt-1 flex-shrink-0"></div>
                <span class="text-white">Binlerce saat dizi, film, belgesel ve çocuk içeriği</span>
              </li>
              <li class="flex items-start gap-3">
                <div class="w-4 h-4 bg-green-500 rounded mt-1 flex-shrink-0"></div>
                <span class="text-white">Canlı TRT kanalları</span>
              </li>
              <li class="flex items-start gap-3">
                <div class="w-4 h-4 bg-green-500 rounded mt-1 flex-shrink-0"></div>
                <span class="text-white">Dizi tekrarları</span>
              </li>
              <li class="flex items-start gap-3">
                <div class="w-4 h-4 bg-green-500 rounded mt-1 flex-shrink-0"></div>
                <span class="text-white">Zengin TRT Arşivi</span>
              </li>
            </ul>
          </div>

          <!-- Premium Plan Card -->
          <div class="bg-gray-900 border border-gray-700 rounded-lg p-8 hover:border-gray-600 transition-colors duration-200">
            <h3 class="text-3xl font-bold text-green-500 mb-4">Premium</h3>
            <div class="text-2xl font-bold text-white mb-2">99.00 TRY /Ay</div>
            <p class="text-gray-300 mb-8">Sınırsız içeriği reklamsız ve istediğin yerde izle</p>
            
            <!-- Features List -->
            <ul class="space-y-4">
              <li class="flex items-start gap-3">
                <div class="w-4 h-4 bg-green-500 rounded mt-1 flex-shrink-0"></div>
                <span class="text-white">Reklamsız deneyim</span>
              </li>
              <li class="flex items-start gap-3">
                <div class="w-4 h-4 bg-green-500 rounded mt-1 flex-shrink-0"></div>
                <span class="text-white">Aynı anda 4 cihazdan izleme</span>
              </li>
              <li class="flex items-start gap-3">
                <div class="w-4 h-4 bg-green-500 rounded mt-1 flex-shrink-0"></div>
                <span class="text-white">tabii orijinal içerikleri</span>
              </li>
              <li class="flex items-start gap-3">
                <div class="w-4 h-4 bg-green-500 rounded mt-1 flex-shrink-0"></div>
                <span class="text-white">tabii Spor kanalları</span>
              </li>
              <li class="flex items-start gap-3">
                <div class="w-4 h-4 bg-green-500 rounded mt-1 flex-shrink-0"></div>
                <span class="text-white">Altyazı ve dublaj seçenekleri</span>
              </li>
              <li class="flex items-start gap-3">
                <div class="w-4 h-4 bg-green-500 rounded mt-1 flex-shrink-0"></div>
                <span class="text-white">Çevrimdışı izleme özelliği</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Call to Action Button -->
        <div class="text-center mt-16">
          <button class="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-12 rounded-lg text-xl transition-colors duration-200 transform hover:scale-105">
            Şimdi Abone Ol
          </button>
        </div>
      </div>
    </div>

    <!-- Live Broadcasts Section -->
    <div class="relative py-20">
      <div class="absolute inset-0 bg-black bg-opacity-80"></div>
      <div class="container mx-auto px-8 relative z-10">
        <!-- Header Section -->
        <div class="flex justify-between items-start mb-12">
          <div>
            <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
              Canlı Yayınlar
            </h2>
            <p class="text-lg text-white">
              TRT'nin tüm kanallarını izleyebilirsin.
            </p>
          </div>
          <!-- Navigation Arrow -->
          <button class="text-white hover:text-green-400 transition-colors duration-200">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>

        <!-- TRT Channels Slider -->
        <div class="relative">
          <!-- Left Navigation Button -->
          <button 
            @click="slideChannelsLeft" 
            class="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-3 hover:bg-opacity-75 rounded-full transition-all duration-200"
            :class="{ 'opacity-50 cursor-not-allowed': channelOffset >= 0 }"
            :disabled="channelOffset >= 0"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>

          <!-- Right Navigation Button -->
          <button 
            @click="slideChannelsRight" 
            class="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-3 hover:bg-opacity-75 rounded-full transition-all duration-200"
            :class="{ 'opacity-50 cursor-not-allowed': channelOffset <= -1200 }"
            :disabled="channelOffset <= -1200"
          >
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>

          <!-- Channels Container -->
          <div class="overflow-hidden">
            <div 
              class="flex gap-6 transition-transform duration-300 ease-in-out" 
              :style="{ transform: `translateX(${channelOffset}px)` }"
            >
              <!-- TRT 1 -->
              <div class="flex-shrink-0 bg-gray-800 rounded-lg p-6 min-w-[200px] hover:bg-gray-700 transition-colors duration-200 cursor-pointer">
                <div class="text-center">
                  <div class="text-white text-lg font-semibold mb-2">TRT</div>
                  <div class="bg-red-600 text-white text-sm font-bold px-3 py-1 rounded">1</div>
                </div>
              </div>

              <!-- TRT 2 -->
              <div class="flex-shrink-0 bg-gray-800 rounded-lg p-6 min-w-[200px] hover:bg-gray-700 transition-colors duration-200 cursor-pointer">
                <div class="text-center">
                  <div class="text-white text-lg font-semibold mb-2">TRT</div>
                  <div class="text-white text-sm font-bold px-3 py-1 rounded" style="font-family: cursive;">2</div>
                </div>
              </div>

              <!-- TRT BELGESEL -->
              <div class="flex-shrink-0 bg-gray-800 rounded-lg p-6 min-w-[200px] hover:bg-gray-700 transition-colors duration-200 cursor-pointer">
                <div class="text-center">
                  <div class="text-white text-lg font-semibold mb-2">TRT</div>
                  <div class="text-yellow-400 text-sm font-bold px-3 py-1 rounded">BELGESEL</div>
                </div>
              </div>

              <!-- TRT HABER -->
              <div class="flex-shrink-0 bg-gray-800 rounded-lg p-6 min-w-[200px] hover:bg-gray-700 transition-colors duration-200 cursor-pointer">
                <div class="text-center">
                  <div class="text-white text-lg font-semibold mb-2">TRT</div>
                  <div class="bg-red-600 text-white text-sm font-bold px-3 py-1 rounded">HABER</div>
                </div>
              </div>

              <!-- TRT SPOR -->
              <div class="flex-shrink-0 bg-gray-800 rounded-lg p-6 min-w-[200px] hover:bg-gray-700 transition-colors duration-200 cursor-pointer">
                <div class="text-center">
                  <div class="text-white text-lg font-semibold mb-2">TRT</div>
                  <div class="text-green-400 text-sm font-bold px-3 py-1 rounded">SPOR</div>
                </div>
              </div>

              <!-- TRT ÇOCUK -->
              <div class="flex-shrink-0 bg-gray-800 rounded-lg p-6 min-w-[200px] hover:bg-gray-700 transition-colors duration-200 cursor-pointer">
                <div class="text-center">
                  <div class="text-white text-lg font-semibold mb-2">TRT</div>
                  <div class="text-blue-400 text-sm font-bold px-3 py-1 rounded">ÇOCUK</div>
                </div>
              </div>

              <!-- TRT MÜZİK -->
              <div class="flex-shrink-0 bg-gray-800 rounded-lg p-6 min-w-[200px] hover:bg-gray-700 transition-colors duration-200 cursor-pointer">
                <div class="text-center">
                  <div class="text-white text-lg font-semibold mb-2">TRT</div>
                  <div class="text-purple-400 text-sm font-bold px-3 py-1 rounded">MÜZİK</div>
                </div>
              </div>

              <!-- TRT ARAPÇA -->
              <div class="flex-shrink-0 bg-gray-800 rounded-lg p-6 min-w-[200px] hover:bg-gray-700 transition-colors duration-200 cursor-pointer">
                <div class="text-center">
                  <div class="text-white text-lg font-semibold mb-2">TRT</div>
                  <div class="text-orange-400 text-sm font-bold px-3 py-1 rounded">ARAPÇA</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="relative flex items-center justify-center py-4">
      <div class="absolute inset-0 bg-black bg-opacity-80"></div>
      <div class="relative z-10">
        <!-- İçerik alanı -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SiteLayout',
  data() {
    return {
      dropdownOpen: false,
      email: '',
      slideOffset: 0,
      channelOffset: 0,
      movies: [
        {
          title: 'GASSAL',
          subtitle: '2. SEZON',
          image: 'https://cms-tabii-public-image.tabii.com/int/webp/w600/q84/52568_0-0-2557-3840.png'
        },
        {
          title: 'SİYAH BERE',
          subtitle: '',
          image: 'https://cms-tabii-public-image.tabii.com/int/webp/w600/q84/52266_0-0-2557-3840.png'
        },
        {
          title: 'YÜZDE İKİ',
          subtitle: '',
          image: 'https://cms-tabii-public-image.tabii.com/int/webp/w600/q84/51784_0-0-2557-3840.png'
        },
        {
          title: 'YANKI',
          subtitle: 'GÖRÜNMEZ EL',
          image: 'https://cms-tabii-public-image.tabii.com/int/webp/w600/q84/49441_0-0-2557-3840.png'
        },
        {
          title: 'ÇIRAK',
          subtitle: '',
          image: 'https://cms-tabii-public-image.tabii.com/int/webp/w600/q84/43958_0-0-2557-3840.jpeg'
        },
        {
          title: 'KIZ BABASI',
          subtitle: '',
          image: 'https://cms-tabii-public-image.tabii.com/int/webp/w600/q84/51984_0-0-2557-3840.png'
        },
        {
          title: 'RÜYA GİBİ İSTANBUL',
          subtitle: '',
          image: 'https://cms-tabii-public-image.tabii.com/int/webp/w600/q84/45878_0-0-2557-3840.png'
        },
        {
          title: 'MEVLÂNÂ CELÂLEDDÎN-İ RÛMÎ',
          subtitle: '',
          image: 'https://cms-tabii-public-image.tabii.com/int/webp/w600/q84/49576_0-0-2557-3840.png'
        },
        {
          title: 'MARNALI',
          subtitle: '',
          image: 'https://cms-tabii-public-image.tabii.com/int/webp/w600/q84/43459_0-0-2557-3840.jpeg'
        },
        {
          title: 'SÜRGÜNLER',
          subtitle: '',
          image: 'https://cms-tabii-public-image.tabii.com/int/webp/w600/q84/48189_0-0-2557-3840.png'
        },
        {
          title: 'DERİN MOR',
          subtitle: '',
          image: 'https://cms-tabii-public-image.tabii.com/int/webp/w600/q84/35156_0-0-2557-3840.png'
        },
        {
          title: 'ŞEYTAN ADASI\'NDA ESİR TÜRK: POLİS CEMİL',
          subtitle: '',
          image: 'https://cms-tabii-public-image.tabii.com/int/webp/w600/q84/51288_0-0-2557-3840.png'
        },
        {
          title: 'CİHANGİR CUMHURİYETİ',
          subtitle: '',
          image: 'https://cms-tabii-public-image.tabii.com/int/webp/w600/q84/48761_0-0-2557-3840.png'
        },
        {
          title: 'YEŞİL DENİZ MİLENYUM',
          subtitle: '',
          image: 'https://cms-tabii-public-image.tabii.com/int/webp/w600/q84/43850_0-0-2557-3840.png'
        },
        {
          title: 'TOZKOPARAN İSKENDER GÖLGE',
          subtitle: '',
          image: 'https://cms-tabii-public-image.tabii.com/int/webp/w600/q84/22711_0-0-2557-3840.jpeg'
        },
        {
          title: 'SON GÜN',
          subtitle: '',
          image: 'https://cms-tabii-public-image.tabii.com/int/webp/w600/q84/26447_0-0-2557-3840.png'
        },
        {
          title: 'AKİF',
          subtitle: '',
          image: 'https://cms-tabii-public-image.tabii.com/int/webp/w600/q84/22004_0-0-2557-3840.jpeg'
        },
        {
          title: 'AŞKIMIZ YETER',
          subtitle: '',
          image: 'https://cms-tabii-public-image.tabii.com/int/webp/w600/q84/37225_0-0-2557-3840.png'
        },
        {
          title: 'DAYTON',
          subtitle: '',
          image: 'https://cms-tabii-public-image.tabii.com/int/webp/w600/q84/21964_0-0-2557-3840.jpeg'
        },
        {
          title: 'İBN-İ SİNA',
          subtitle: '',
          image: 'https://cms-tabii-public-image.tabii.com/int/webp/w600/q84/46557_0-0-2557-3840.png'
        },
        {
          title: 'KIZIL ELMA: BİR FETİH ÖYKÜSÜ',
          subtitle: '',
          image: 'https://cms-tabii-public-image.tabii.com/int/webp/w600/q84/25554_0-0-2557-3840.jpeg'
        }
      ]
    }
  },
  methods: {
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
    },
    handleClickOutside(event) {
      const dropdown = this.$el.querySelector('.relative');
      if (!dropdown.contains(event.target)) {
        this.dropdownOpen = false;
      }
    },
    handleSignup() {
      if (this.email) {
        alert(`E-posta adresiniz kaydedildi: ${this.email}`);
        this.email = '';
      } else {
        alert('Lütfen geçerli bir e-posta adresi girin.');
      }
    },
    slideRight() {
      this.slideOffset -= 300;
      const maxOffset = -(this.movies.length - 4) * 300; // 4 movies visible at once with new spacing
      if (this.slideOffset < maxOffset) {
        this.slideOffset = maxOffset;
      }
    },
    slideChannelsLeft() {
      this.channelOffset += 300;
      if (this.channelOffset > 0) {
        this.channelOffset = 0;
      }
    },
    slideChannelsRight() {
      this.channelOffset -= 300;
      const maxOffset = -(8 - 4) * 300; // 8 channels total, 4 visible at once
      if (this.channelOffset < maxOffset) {
        this.channelOffset = maxOffset;
      }
    }
  },
  mounted() {
    // Sayfa dışına tıklanınca dropdown kapansın
    document.addEventListener('click', this.handleClickOutside);
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
  }
}
</script>

<style scoped>
/* Site layout'a özel stiller */
</style>

<style scoped>
  /* Site layout'a özel stiller */
  
  /* Poppins font for all headings */
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Poppins', 'Poppins Fallback', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  }
  
  /* Specific heading styles */
  .text-5xl, .text-6xl, .text-7xl {
    font-family: 'Poppins', 'Poppins Fallback', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    font-weight: 700;
  }
  
  .text-3xl, .text-4xl {
    font-family: 'Poppins', 'Poppins Fallback', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    font-weight: 600;
  }
  
  .text-xl, .text-2xl {
    font-family: 'Poppins', 'Poppins Fallback', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    font-weight: 500;
  }
.footer-section {
  background-color: #000;
  text-align: center;
  padding: 60px 20px 40px;
}

.see-more-btn {
  background-color: transparent;
  color: #00ff99;
  border: 2px solid #00ff99;
  border-radius: 8px;
  padding: 15px 30px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
}

.see-more-btn:hover {
  background-color: #00ff99;
  color: #000;
}

.footer-bottom {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  font-size: 16px;
  margin-top: 40px;
  color: #aaa;
}

.footer-bottom a {
  color: #aaa;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-bottom a:hover {
  color: #00ff99;
}

.copyright {
  margin-top: 40px;
  font-size: 16px;
  color: #999;
}

.footer-section {
  background-color: #000;
  text-align: center;
  padding: 60px 20px 40px;
}
.see-more-btn {
  background-color: transparent;
  color: #00ff99;
  border: 2px solid #00ff99;
  border-radius: 8px;
  padding: 15px 30px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
}
.see-more-btn:hover {
  background-color: #00ff99;
  color: #000;
}
.footer-bottom {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  font-size: 16px;
  margin-top: 40px;
  color: #aaa;
}
.footer-bottom a {
  color: #aaa;
  text-decoration: none;
  transition: color 0.3s;
}
.footer-bottom a:hover {
  color: #00ff99;
}
.copyright {
  margin-top: 40px;
  font-size: 16px;
  color: #999;
}
</style>
