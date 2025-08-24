<template>
  <div>
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
      <!-- Background Image -->
      <img class="absolute inset-0 w-full h-full object-cover" style="filter: brightness(0.5);" src="https://cms-tabii-public-image.tabii.com/int/webp/w1600/q85/37964.jpeg">
      
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
    <div class="bg-black py-16">
      <div class="container mx-auto px-8">
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
    <div class="bg-black py-20">
      <div class="container mx-auto px-8">
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
              <h3 class="text-3xl font-bold text-green-400 mb-4">
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
            <div class="absolute inset-0">
              <!-- Large Green Star/Burst Shape -->
              <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-400 rounded-full opacity-20"></div>
              
              <!-- Diagonal White Stripe -->
              <div class="absolute bottom-0 right-0 w-32 h-96 bg-white opacity-10 transform rotate-45 origin-bottom-right"></div>
            </div>

            <!-- Characters Container -->
            <div class="relative z-10 flex items-end justify-center h-96">
              <!-- Left Child (Boy) -->
              <div class="flex flex-col items-center mr-8">
                <div class="w-16 h-16 bg-yellow-400 rounded-full mb-2"></div>
                <div class="w-12 h-8 bg-blue-500 rounded-lg"></div>
                <div class="w-8 h-6 bg-blue-600 rounded"></div>
              </div>

              <!-- Middle Child (Girl with Pigtails) -->
              <div class="flex flex-col items-center mx-4">
                <div class="w-16 h-16 bg-red-400 rounded-full mb-2"></div>
                <div class="w-14 h-10 bg-blue-300 rounded-lg"></div>
                <div class="w-10 h-6 bg-white rounded"></div>
              </div>

              <!-- Dog -->
              <div class="flex flex-col items-center mx-4">
                <div class="w-14 h-12 bg-brown-400 rounded-full mb-2"></div>
                <div class="w-12 h-8 bg-brown-500 rounded-lg"></div>
                <div class="w-8 h-4 bg-pink-400 rounded-full"></div>
                <!-- Orange Paint Tube -->
                <div class="w-6 h-8 bg-orange-500 rounded-full mt-2"></div>
              </div>

              <!-- Right Child (Girl with Glasses) -->
              <div class="flex flex-col items-center ml-8">
                <div class="w-16 h-16 bg-brown-300 rounded-full mb-2"></div>
                <div class="w-12 h-8 bg-yellow-400 rounded-lg"></div>
                <div class="w-10 h-6 bg-yellow-500 rounded"></div>
                <!-- Glasses -->
                <div class="w-8 h-4 bg-gray-300 rounded-full mt-1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Enjoy It Section -->
    <div class="bg-black py-20">
      <div class="container mx-auto px-8">
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
        <div class="relative max-w-7xl mx-auto">
          <!-- Large TV/Monitor Screen (Center-Top) -->
          <div class="relative z-20 mx-auto w-full max-w-4xl mb-8">
            <div class="relative overflow-hidden rounded-2xl border-4 border-green-400 shadow-2xl shadow-green-400/50">
              <!-- FREE SKY Content -->
              <div class="relative h-96 bg-gradient-to-r from-blue-900 to-gray-800">
                <!-- Background Image Placeholder -->
                <div class="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-800 to-gray-700"></div>
                
                <!-- Content Overlay -->
                <div class="absolute inset-0 p-8 flex flex-col justify-between">
                  <!-- Top Section -->
                  <div>
                    <h3 class="text-4xl font-bold text-white mb-2">FREE SKY</h3>
                    <p class="text-xl text-gray-300">Action - Adventure</p>
                  </div>
                  
                  <!-- Middle Section -->
                  <div class="flex-1 flex items-center">
                    <p class="text-lg text-white max-w-md">
                      Under the leadership of Lieutenant Colonel Alper, a team is formed for a n...
                    </p>
                  </div>
                  
                  <!-- Bottom Section -->
                  <div class="flex justify-between items-end">
                    <span class="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                      New Episodes
                    </span>
                    <div class="flex gap-4">
                      <button class="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-bold transition-colors">
                        Play
                      </button>
                      <button class="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-black transition-colors">
                        Detail
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Laptop Screen (Bottom-Left) -->
          <div class="absolute left-0 bottom-0 z-10 w-80">
            <div class="relative overflow-hidden rounded-lg border-4 border-green-400 shadow-2xl shadow-green-400/50">
              <div class="bg-gray-900 p-6">
                <!-- RŪMÍ Content -->
                <div class="mb-6">
                  <h4 class="text-2xl font-bold text-white mb-2">RŪMÍ</h4>
                  <p class="text-sm text-gray-300 mb-4">
                    The life and teachings of the 13th century sufi poet Rumi, whose wind...
                  </p>
                  <button class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded font-bold transition-colors">
                    Play
                  </button>
                </div>
                
                <!-- Continue Watching -->
                <div>
                  <h5 class="text-sm font-bold text-white mb-3">Continue Watching</h5>
                  <div class="flex gap-2">
                    <div class="w-16 h-20 bg-blue-600 rounded"></div>
                    <div class="w-16 h-20 bg-green-600 rounded"></div>
                    <div class="w-16 h-20 bg-purple-600 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Tablet Screen (Center-Right) -->
          <div class="absolute right-20 top-1/2 transform -translate-y-1/2 z-10 w-64">
            <div class="relative overflow-hidden rounded-lg border-4 border-green-400 shadow-2xl shadow-green-400/50">
              <div class="bg-gray-800 p-4">
                <div class="grid grid-cols-2 gap-2">
                  <div class="bg-blue-600 rounded h-20 flex items-center justify-center">
                    <span class="text-white text-sm font-bold">MARRIAGE</span>
                  </div>
                  <div class="bg-green-600 rounded h-20 flex items-center justify-center">
                    <span class="text-white text-sm font-bold">ISKENDER</span>
                  </div>
                  <div class="bg-purple-600 rounded h-20 flex items-center justify-center">
                    <span class="text-white text-sm font-bold">GASSAL</span>
                  </div>
                  <div class="bg-red-600 rounded h-20 flex items-center justify-center">
                    <span class="text-white text-sm font-bold">YANKI</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Phone Screen (Bottom-Right) -->
          <div class="absolute right-0 bottom-0 z-10 w-48">
            <div class="relative overflow-hidden rounded-lg border-4 border-green-400 shadow-2xl shadow-green-400/50">
              <div class="bg-gray-900 p-4">
                <!-- INNOCENTS Content -->
                <div class="mb-4">
                  <h4 class="text-lg font-bold text-white mb-2">INNOCENTS</h4>
                  <div class="w-full h-24 bg-blue-700 rounded mb-3"></div>
                </div>
                
                <!-- Navigation -->
                <div class="flex justify-between text-xs text-white">
                  <span class="bg-green-500 px-2 py-1 rounded">Play</span>
                  <span>Episodes</span>
                  <span>Cast</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Vertical Poster (Far Right) -->
          <div class="absolute right-0 top-0 z-10 w-32">
            <div class="relative overflow-hidden rounded-lg border-4 border-green-400 shadow-2xl shadow-green-400/50">
              <div class="bg-green-500 h-96 flex flex-col items-center justify-center p-4">
                <div class="space-y-2">
                  <div class="w-16 h-20 bg-white rounded"></div>
                  <div class="w-16 h-20 bg-white rounded"></div>
                  <div class="w-16 h-20 bg-white rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Supported Devices Section -->
    <div class="bg-black py-16">
      <div class="container mx-auto px-8">
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

    <!-- New Journey Section -->
    <div class="bg-black py-20">
      <div class="container mx-auto px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <!-- Left Side - Three Vertical Movie Posters -->
          <div class="space-y-8">
                         <!-- RÜMİ Poster -->
             <div class="relative w-80 h-96 mx-auto">
               <div class="absolute inset-0 bg-gradient-to-b from-brown-800 to-brown-900 rounded-lg overflow-hidden">
                 <!-- Background Pattern -->
                 <div class="absolute inset-0 opacity-30">
                   <div class="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-brown-600 to-brown-800"></div>
                 </div>
                 
                 <!-- Character Silhouette (Red Robe) -->
                 <div class="absolute bottom-0 left-0 w-full h-3/4">
                   <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-48 bg-red-800 rounded-t-full"></div>
                   <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white rounded-full"></div>
                   <div class="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-20 h-8 bg-brown-800 rounded-full"></div>
                 </div>
                 
                 <!-- Light Rays (Golden) -->
                 <div class="absolute top-0 right-0 w-full h-full">
                   <div class="absolute top-0 right-0 w-32 h-32 bg-amber-300 transform rotate-45 origin-top-right opacity-60"></div>
                   <div class="absolute top-8 right-8 w-24 h-24 bg-amber-200 transform rotate-45 origin-top-right opacity-40"></div>
                   <div class="absolute top-16 right-16 w-16 h-16 bg-amber-100 transform rotate-45 origin-top-right opacity-30"></div>
                 </div>
                 
                 <!-- Title -->
                 <div class="absolute top-8 left-8">
                   <h3 class="text-4xl font-bold text-amber-300">RÜMİ</h3>
                 </div>
               </div>
             </div>

                         <!-- LITTLE ARCHER İSKENDER Poster -->
             <div class="relative w-80 h-96 mx-auto">
               <div class="absolute inset-0 bg-gradient-to-b from-emerald-900 to-black rounded-lg overflow-hidden">
                 <!-- Background Pattern -->
                 <div class="absolute inset-0 opacity-30">
                   <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-700 to-emerald-900"></div>
                 </div>
                 
                 <!-- Dome Building -->
                 <div class="absolute top-0 left-1/2 transform -translate-x-1/2 w-48 h-32 bg-emerald-800 rounded-t-full"></div>
                 
                 <!-- Character (Young Man with Plaid Shirt) -->
                 <div class="absolute bottom-8 left-8">
                   <div class="w-16 h-16 bg-amber-300 rounded-full mb-2"></div>
                   <div class="w-12 h-8 bg-blue-600 rounded-lg"></div>
                   <div class="w-8 h-6 bg-blue-700 rounded"></div>
                 </div>
                 
                 <!-- Mystical Object (Triangle with Lightning) -->
                 <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                   <div class="w-20 h-20 bg-amber-400 transform rotate-45 opacity-80"></div>
                   <div class="absolute inset-0 bg-amber-300 transform rotate-45 scale-75 opacity-60"></div>
                   <div class="absolute inset-0 bg-amber-200 transform rotate-45 scale-50 opacity-40"></div>
                 </div>
                 
                 <!-- Masked Figure (Dark Cloak) -->
                 <div class="absolute top-16 right-8">
                   <div class="w-12 h-16 bg-gray-800 rounded-full"></div>
                   <div class="absolute top-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gray-600 rounded-full"></div>
                 </div>
                 
                 <!-- Titles -->
                 <div class="absolute bottom-8 left-8">
                   <h4 class="text-sm font-bold text-amber-300 mb-1">LITTLE ARCHER</h4>
                   <h3 class="text-3xl font-bold text-amber-300">İSKENDER</h3>
                 </div>
               </div>
             </div>

                         <!-- THE LAST DAY Poster -->
             <div class="relative w-80 h-96 mx-auto">
               <div class="absolute inset-0 bg-gradient-to-b from-emerald-900 to-black rounded-lg overflow-hidden">
                 <!-- Background Pattern -->
                 <div class="absolute inset-0 opacity-30">
                   <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-700 to-emerald-900"></div>
                 </div>
                 
                 <!-- Multiple Faces Collage (3x3 Grid) -->
                 <div class="absolute inset-0 p-4">
                   <div class="grid grid-cols-3 gap-2 h-full">
                     <div class="w-full h-20 bg-gray-600 rounded"></div>
                     <div class="w-full h-20 bg-gray-500 rounded"></div>
                     <div class="w-full h-20 bg-gray-700 rounded"></div>
                     <div class="w-full h-20 bg-gray-800 rounded"></div>
                     <div class="w-full h-20 bg-gray-600 rounded"></div>
                     <div class="w-full h-20 bg-gray-500 rounded"></div>
                     <div class="w-full h-20 bg-gray-700 rounded"></div>
                     <div class="w-full h-20 bg-gray-800 rounded"></div>
                     <div class="w-full h-20 bg-gray-600 rounded"></div>
                   </div>
                 </div>
                 
                 <!-- Foreground Characters (Old Man and Young Man) -->
                 <div class="absolute bottom-8 left-8">
                   <div class="flex items-end gap-4">
                     <div class="w-16 h-20 bg-white rounded"></div>
                     <div class="w-12 h-16 bg-gray-300 rounded"></div>
                   </div>
                 </div>
                 
                 <!-- Title -->
                 <div class="absolute bottom-8 left-8">
                   <h3 class="text-2xl font-bold text-white">THE LAST DAY</h3>
                 </div>
               </div>
             </div>
          </div>

          <!-- Right Side - Promotional Content -->
          <div class="text-center lg:text-left">
            <h2 class="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Yeni bir yolculuğa çıkmak için hazır mısın?
            </h2>
            <p class="text-xl md:text-2xl text-white mb-8">
              İzlemek için şimdi kaydol
            </p>
            <button class="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors duration-200 transform hover:scale-105">
              Şimdi izle
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Divider -->
    <div class="w-full h-px bg-white opacity-20"></div>

    <!-- Pricing Plans Section -->
    <div class="bg-black py-20">
      <div class="container mx-auto px-8">
        <!-- Header Section -->
        <div class="flex flex-col lg:flex-row justify-between items-center mb-16">
          <!-- Left Side - Logo -->
          <div class="flex items-center mb-8 lg:mb-0">
            <div class="w-8 h-8 bg-green-500 rounded-full mr-3"></div>
            <span class="text-white text-2xl font-bold">tabii</span>
          </div>
          
          <!-- Center - Main Title -->
          <div class="text-center mb-8 lg:mb-0">
            <h1 class="text-3xl md:text-4xl font-bold text-gray-300">
              tabii'yi Keşfetmeye Şimdi Başla!
            </h1>
          </div>
          
          <!-- Right Side - Language and Button -->
          <div class="flex items-center gap-4">
            <!-- Language Dropdown -->
            <div class="relative inline-block text-left">
              <button class="flex justify-center items-center gap-2 h-12 w-32 bg-transparent text-white font-bold text-lg rounded px-4 border border-gray-600">
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
                </svg>
                Türkçe
                <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/>
                </svg>
              </button>
            </div>
            
            <!-- Start Discovering Button -->
            <button class="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg text-lg transition-colors duration-200">
              Keşfetmeye Başla
            </button>
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

    <div class="flex items-center justify-center py-4" style="background-color: #000000;">
      <!-- İçerik alanı -->
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
      movies: [
        {
          title: 'GASSAL',
          subtitle: '2. SEZON',
          image: 'https://images.unsplash.com/photo-1518621736915-f3b1677b723b?q=80&w=400&h=600&fit=crop&auto=format&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
          title: 'SİYAH BERE',
          subtitle: '',
          image: 'https://images.unsplash.com/photo-1534190760961-b5540790b12d?q=80&w=400&h=600&fit=crop&auto=format&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
          title: '%iki',
          subtitle: '',
          image: 'https://images.unsplash.com/photo-1507679799977-c9eb8fecf653?q=80&w=400&h=600&fit=crop&auto=format&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
          title: 'YANKI',
          subtitle: 'GÖRÜNMEZ EL',
          image: 'https://images.unsplash.com/photo-1591696205602-2f950c417dd9?q=80&w=400&h=600&fit=crop&auto=format&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
          title: 'ÇIRAK',
          subtitle: '',
          image: 'https://images.unsplash.com/photo-1517486804500-be261229047c?q=80&w=400&h=600&fit=crop&auto=format&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
          title: 'KIZILCIK ŞERBETİ',
          subtitle: '',
          image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=600&fit=crop'
        },
        {
          title: 'KAPLAN',
          subtitle: '',
          image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=600&fit=crop'
        },
        {
          title: 'KÖK',
          subtitle: '',
          image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=600&fit=crop'
        },
        {
          title: 'MAHREM',
          subtitle: '',
          image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=600&fit=crop'
        },
        {
          title: 'AKİF',
          subtitle: '',
          image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=600&fit=crop'
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
