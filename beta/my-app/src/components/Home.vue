<template>
  <div class="bg-gradient-to-b from-red-100 via-green-100 to-blue-200 min-h-screen flex flex-col items-center justify-between p-4 relative overflow-hidden"
       :class="{ 'blur-effect': showBlurEffect && !aboutButtonClicked }">
    <!-- Background maple leaf pattern with transparency -->
    <div class="background-maple-pattern absolute inset-0 z-0 opacity-20">
      <div v-for="n in 20" :key="`bg-maple-${n}`" class="absolute" :style="getRandomBackgroundLeafStyle()">
        <svg viewBox="0 0 100 100" :width="getRandomSize()" :height="getRandomSize()" fill="currentColor" :class="getRandomBgLeafColor()">
          <path d="M33.6,4.9c0,0,13.4,13.4,10.4,29.7c8.9-12.5,25.4-22.1,25.4-22.1s1.8,15.4-6.7,28.6c15.2-6.4,31.2-3.5,31.2-3.5
          s-9.4,14.9-24.5,18.8c15.8,2.7,26.5,13.8,26.5,13.8s-16.4,5.3-31.2-0.5c13,9.8,17.4,24.8,17.4,24.8s-17.7-3.2-28.3-14.6
          c5.4,14.7,2.4,30,2.4,30s-14-9.3-18.3-24.5c-2.9,15.7-13.9,26.3-13.9,26.3s-5.4-16.3,0.4-31c-9.9,12.9-24.9,17.2-24.9,17.2
          s3.1-17.6,14.6-28.1c-14.7,5.3-30,2.3-30,2.3s9.4-13.9,24.5-18.2c-15.8-3-26.4-14-26.4-14s16.3-5.2,31.1,0.4
          c-13-9.8-17.3-24.7-17.3-24.7s17.7,3.1,28.2,14.4c-5.3-14.7-2.3-29.9-2.3-29.9S29.3-10.4,33.6,4.9z"/>
        </svg>
      </div>
    </div>
    
    <!-- Content container with z-index to appear above the background pattern -->
    <div class="relative z-10 w-full flex flex-col items-center">
      <!-- Redesigned Header with Maple Leaf Decorations -->
      <div class="flex items-center justify-center mb-8 relative">
        <div class="maple-leaf-decoration left-leaf">
          <svg viewBox="0 0 100 100" width="40" height="40" fill="currentColor" class="text-green-600">
            <path d="M33.6,4.9c0,0,13.4,13.4,10.4,29.7c8.9-12.5,25.4-22.1,25.4-22.1s1.8,15.4-6.7,28.6c15.2-6.4,31.2-3.5,31.2-3.5
            s-9.4,14.9-24.5,18.8c15.8,2.7,26.5,13.8,26.5,13.8s-16.4,5.3-31.2-0.5c13,9.8,17.4,24.8,17.4,24.8s-17.7-3.2-28.3-14.6
            c5.4,14.7,2.4,30,2.4,30s-14-9.3-18.3-24.5c-2.9,15.7-13.9,26.3-13.9,26.3s-5.4-16.3,0.4-31c-9.9,12.9-24.9,17.2-24.9,17.2
            s3.1-17.6,14.6-28.1c-14.7,5.3-30,2.3-30,2.3s9.4-13.9,24.5-18.2c-15.8-3-26.4-14-26.4-14s16.3-5.2,31.1,0.4
            c-13-9.8-17.3-24.7-17.3-24.7s17.7,3.1,28.2,14.4c-5.3-14.7-2.3-29.9-2.3-29.9S29.3-10.4,33.6,4.9z"/>
          </svg>
        </div>
        
        <!-- Increased horizontal padding and added background for better visibility -->
        <h1 class="text-4xl font-arabic text-center text-green-600 px-10 py-2 relative z-10 bg-white bg-opacity-70 rounded-lg shadow-sm">دین اسلام</h1>
        
        <div class="maple-leaf-decoration right-leaf">
          <svg viewBox="0 0 100 100" width="40" height="40" fill="currentColor" class="text-green-600">
            <path d="M33.6,4.9c0,0,13.4,13.4,10.4,29.7c8.9-12.5,25.4-22.1,25.4-22.1s1.8,15.4-6.7,28.6c15.2-6.4,31.2-3.5,31.2-3.5
            s-9.4,14.9-24.5,18.8c15.8,2.7,26.5,13.8,26.5,13.8s-16.4,5.3-31.2-0.5c13,9.8,17.4,24.8,17.4,24.8s-17.7-3.2-28.3-14.6
            c5.4,14.7,2.4,30,2.4,30s-14-9.3-18.3-24.5c-2.9,15.7-13.9,26.3-13.9,26.3s-5.4-16.3,0.4-31c-9.9,12.9-24.9,17.2-24.9,17.2
            s3.1-17.6,14.6-28.1c-14.7,5.3-30,2.3-30,2.3s9.4-13.9,24.5-18.2c-15.8-3-26.4-14-26.4-14s16.3-5.2,31.1,0.4
            c-13-9.8-17.3-24.7-17.3-24.7s17.7,3.1,28.2,14.4c-5.3-14.7-2.3-29.9-2.3-29.9S29.3-10.4,33.6,4.9z"/>
          </svg>
        </div>
      </div>
      
      <!-- Book and maple leaves container -->
      <div class="relative w-full max-w-2xl h-[500px]">
        <!-- Falling maple leaves with proper shape -->
        <div v-for="n in 15" :key="n" class="absolute maple-leaf" :style="getRandomLeafStyle()">
          <svg width="30" height="30" viewBox="0 0 100 100" fill="currentColor" :class="getRandomLeafColor()">
            <path d="M33.6,4.9c0,0,13.4,13.4,10.4,29.7c8.9-12.5,25.4-22.1,25.4-22.1s1.8,15.4-6.7,28.6c15.2-6.4,31.2-3.5,31.2-3.5
            s-9.4,14.9-24.5,18.8c15.8,2.7,26.5,13.8,26.5,13.8s-16.4,5.3-31.2-0.5c13,9.8,17.4,24.8,17.4,24.8s-17.7-3.2-28.3-14.6
            c5.4,14.7,2.4,30,2.4,30s-14-9.3-18.3-24.5c-2.9,15.7-13.9,26.3-13.9,26.3s-5.4-16.3,0.4-31c-9.9,12.9-24.9,17.2-24.9,17.2
            s3.1-17.6,14.6-28.1c-14.7,5.3-30,2.3-30,2.3s9.4-13.9,24.5-18.2c-15.8-3-26.4-14-26.4-14s16.3-5.2,31.1,0.4
            c-13-9.8-17.3-24.7-17.3-24.7s17.7,3.1,28.2,14.4c-5.3-14.7-2.3-29.9-2.3-29.9S29.3-10.4,33.6,4.9z"/>
          </svg>
        </div>
        
        <!-- The book -->
        <div class="book absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <!-- Left page -->
          <div class="page left-page">
            <div class="page-content flex flex-col items-center justify-center p-6">
              <span class="text-xl font-serif mb-4 text-blue-600">Quran-Ul-kareem</span>
              <div class="sparkling-stars">
                <span class="star star-green" v-for="n in 5" :key="`left-${n}`"></span>
              </div>
              
              <!-- Leaves landing on left page with proper maple leaf shape -->
              <div v-for="n in 3" :key="`landed-left-${n}`" class="absolute landed-leaf" :style="getRandomLandedLeafStyle('left')">
                <svg width="20" height="20" viewBox="0 0 100 100" fill="currentColor" :class="getRandomLeafColor()">
                  <path d="M33.6,4.9c0,0,13.4,13.4,10.4,29.7c8.9-12.5,25.4-22.1,25.4-22.1s1.8,15.4-6.7,28.6c15.2-6.4,31.2-3.5,31.2-3.5
                  s-9.4,14.9-24.5,18.8c15.8,2.7,26.5,13.8,26.5,13.8s-16.4,5.3-31.2-0.5c13,9.8,17.4,24.8,17.4,24.8s-17.7-3.2-28.3-14.6
                  c5.4,14.7,2.4,30,2.4,30s-14-9.3-18.3-24.5c-2.9,15.7-13.9,26.3-13.9,26.3s-5.4-16.3,0.4-31c-9.9,12.9-24.9,17.2-24.9,17.2
                  s3.1-17.6,14.6-28.1c-14.7,5.3-30,2.3-30,2.3s9.4-13.9,24.5-18.2c-15.8-3-26.4-14-26.4-14s16.3-5.2,31.1,0.4
                  c-13-9.8-17.3-24.7-17.3-24.7s17.7,3.1,28.2,14.4c-5.3-14.7-2.3-29.9-2.3-29.9S29.3-10.4,33.6,4.9z"/>
                </svg>
              </div>
            </div>
          </div>
          
          <!-- Right page -->
          <div class="page right-page">
            <div class="page-content flex flex-col items-center justify-center p-6">
              <span class="text-xl font-arabic text-red-600">قرآن کریم</span>
              <div class="sparkling-stars">
                <span class="star star-blue" v-for="n in 5" :key="`right-${n}`"></span>
              </div>
              
              <!-- Leaves landing on right page with proper maple leaf shape -->
              <div v-for="n in 3" :key="`landed-right-${n}`" class="absolute landed-leaf" :style="getRandomLandedLeafStyle('right')">
                <svg width="20" height="20" viewBox="0 0 100 100" fill="currentColor" :class="getRandomLeafColor()">
                  <path d="M33.6,4.9c0,0,13.4,13.4,10.4,29.7c8.9-12.5,25.4-22.1,25.4-22.1s1.8,15.4-6.7,28.6c15.2-6.4,31.2-3.5,31.2-3.5
                  s-9.4,14.9-24.5,18.8c15.8,2.7,26.5,13.8,26.5,13.8s-16.4,5.3-31.2-0.5c13,9.8,17.4,24.8,17.4,24.8s-17.7-3.2-28.3-14.6
                  c5.4,14.7,2.4,30,2.4,30s-14-9.3-18.3-24.5c-2.9,15.7-13.9,26.3-13.9,26.3s-5.4-16.3,0.4-31c-9.9,12.9-24.9,17.2-24.9,17.2
                  s3.1-17.6,14.6-28.1c-14.7,5.3-30,2.3-30,2.3s9.4-13.9,24.5-18.2c-15.8-3-26.4-14-26.4-14s16.3-5.2,31.1,0.4
                  c-13-9.8-17.3-24.7-17.3-24.7s17.7,3.1,28.2,14.4c-5.3-14.7-2.3-29.9-2.3-29.9S29.3-10.4,33.6,4.9z"/>
                </svg>
              </div>
            </div>
          </div>
          
          <!-- Book spine -->
          <div class="book-spine"></div>
        </div>
        
        <!-- Added background for the bottom text as well -->
        <h2 class="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-xl text-green-600 font-arabic bg-white bg-opacity-70 px-4 py-1 rounded-lg">تحيا اسلام</h2>
      </div>
    </div>
    
    <!-- Navigation Buttons moved to bottom with Font Awesome icons -->
    <div class="flex flex-wrap justify-center gap-5 mb-8 mt-auto z-10 relative">
      <button class="curved-button books-button rapid-jiggle">
        <i class="fas fa-book mr-2"></i>
        <span class="button-text">Books</span>
      </button>
      
      <!-- About Us button with special handling - no longer gets blurred -->
      <div class="about-button-container relative" v-if="showBlurEffect && !aboutButtonClicked">
        <button class="curved-button about-button rapid-jiggle" ref="aboutButton" @click="handleAboutClick">
          <i class="fas fa-info-circle mr-2"></i>
          <span class="button-text">About Us</span>
        </button>
        <!-- Clear circular area around the button -->
        <div class="button-spotlight"></div>
      </div>
      
      <!-- Regular About button when not in blur mode -->
      <button v-else class="curved-button about-button rapid-jiggle" ref="aboutButton" @click="handleAboutClick">
        <i class="fas fa-info-circle mr-2"></i>
        <span class="button-text">About Us</span>
      </button>
      
      <button class="curved-button contact-button rapid-jiggle">
        <i class="fas fa-envelope mr-2"></i>
        <span class="button-text">Contact Us</span>
      </button>
      
      <!-- Animated Arrow pointing to About button -->
      <div v-if="showBlurEffect && !aboutButtonClicked" class="arrow-container z-20">
        <div class="animated-arrow">
          <i class="fas fa-arrow-right text-3xl text-red-600 arrow-icon"></i>
          <div class="text-white font-bold bg-red-600 px-3 py-1 rounded-lg arrow-text">
            Click Here!
          </div>
        </div>
      </div>
    </div>
    
    <!-- Overlay message when blurred -->
    <div v-if="showBlurEffect && !aboutButtonClicked" class="fixed inset-0 flex items-center justify-center z-30 pointer-events-none">
      <div class="bg-white bg-opacity-80 p-6 rounded-xl shadow-lg text-center max-w-md">
        <h3 class="text-2xl text-green-600 font-bold mb-3">Welcome to Our Site!</h3>
        <p class="text-lg mb-4">Please click the "About Us" button to continue exploring our website.</p>
        <p class="text-sm text-gray-600">The page will remain blurred until you click the button.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      showBlurEffect: false,
      aboutButtonClicked: false,
      blurTimer: null
    }
  },
  mounted() {
    // Set timer to activate blur effect after 30 seconds
    this.blurTimer = setTimeout(() => {
      this.showBlurEffect = true;
    }, 30000); // 30 seconds
  },
  beforeUnmount() {
    // Clear timer if component is unmounted
    if (this.blurTimer) {
      clearTimeout(this.blurTimer);
    }
  },
  methods: {
    handleAboutClick() {
      // Remove blur effect when About button is clicked
      this.aboutButtonClicked = true;
      this.showBlurEffect = false;
      
      // Add your about page navigation logic here
      // For example: this.$router.push('/about');
    },
    getRandomLeafStyle() {
      const startLeft = Math.random() * 100;
      const fallDuration = 7 + Math.random() * 15;
      const spinDuration = 3 + Math.random() * 5;
      const delay = Math.random() * 10;
      const size = 0.5 + Math.random() * 0.7;
      const zIndex = Math.floor(Math.random() * 5) + 10;
      
      return {
        left: `${startLeft}%`,
        top: `-50px`,
        animation: `fall ${fallDuration}s linear ${delay}s infinite, 
                   spin ${spinDuration}s linear ${delay}s infinite,
                   sway ${spinDuration}s ease-in-out ${delay}s infinite`,
        transform: `scale(${size})`,
        zIndex: zIndex
      };
    },
    getRandomLandedLeafStyle(page) {
      const top = 20 + Math.random() * 60;
      const left = page === 'left' ? 20 + Math.random() * 60 : 20 + Math.random() * 60;
      const rotation = Math.random() * 360;
      const delay = Math.random() * 5;
      const duration = 2 + Math.random() * 3;
      
      return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `rotate(${rotation}deg) scale(0.7)`,
        animation: `leafAppear ${duration}s ease-in-out ${delay}s infinite`
      };
    },
    getRandomLeafColor() {
      const colors = [
        'text-red-500',
        'text-yellow-500', 
        'text-orange-500', 
        'text-red-600',
        'text-yellow-600', 
        'text-orange-600'  
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    },
    // New methods for background maple leaves
    getRandomBackgroundLeafStyle() {
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const rotation = Math.random() * 360;
      
      return {
        left: `${left}%`,
        top: `${top}%`,
        transform: `rotate(${rotation}deg)`,
        transition: 'transform 10s ease-in-out',
        animation: `bgLeafFloat ${30 + Math.random() * 20}s ease-in-out ${Math.random() * 10}s infinite`
      };
    },
    getRandomBgLeafColor() {
      const colors = [
        'text-red-400',
        'text-green-400',
        'text-blue-400',
        'text-purple-400',
        'text-pink-400',
        'text-indigo-400'
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    },
    getRandomSize() {
      return 50 + Math.random() * 100;
    }
  }
}
</script>

<style>
/* Add these new styles for blur effect and arrow animation */
.blur-effect {
  filter: blur(5px);
}

/* Exception for the About button container */
.about-button-container {
  filter: none !important;
  z-index: 100;
}

/* Create a circular spotlight effect around the button */
.button-spotlight {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255,255,255,0.8) 30%, rgba(255,255,255,0) 70%);
  pointer-events: none;
  z-index: -1;
  box-shadow: 0 0 20px 10px rgba(255, 255, 255, 0.6);
  animation: pulse-spotlight 2s infinite alternate;
}

@keyframes pulse-spotlight {
  0% {
    box-shadow: 0 0 20px 10px rgba(255, 255, 255, 0.6);
  }
  100% {
    box-shadow: 0 0 30px 15px rgba(255, 255, 255, 0.8);
  }
}

.arrow-container {
  position: absolute;
  /* Position it initially pointing to the About button */
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 101; /* Make sure arrow is above blur */
  filter: none !important; /* Ensure arrow is not blurred */
}

.animated-arrow {
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: pointToButton 1.5s ease-in-out infinite;
}

.arrow-icon {
  filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.8));
  transform: rotate(90deg);
  margin-bottom: 5px;
}

.arrow-text {
  white-space: nowrap;
  animation: pulse 1.5s ease-in-out infinite;
}

@keyframes pointToButton {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes pulse {
  0% {
    opacity: 0.7;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.1);
  }
  100% {
    opacity: 0.7;
    transform: scale(1);
  }
}

/* Background maple leaf floating animation */
@keyframes bgLeafFloat {
  0% {
    transform: translateY(0) rotate(0deg);
  }
  25% {
    transform: translateY(-15px) rotate(15deg);
  }
  50% {
    transform: translateY(0) rotate(0deg);
  }
  75% {
    transform: translateY(15px) rotate(-15deg);
  }
  100% {
    transform: translateY(0) rotate(0deg);
  }
}
</style>

<style src="./button_mod.css"></style>
<style src="./home.css"></style>
<style src="./buttons.css"></style>
