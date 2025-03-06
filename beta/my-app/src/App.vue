<template>
  <div
    class="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-slate-100 text-slate-800 font-arabic"
  >
    <!-- Navbar with modernized Islamic-inspired styling -->
    <div
      class="navbar bg-gradient-to-r from-emerald-800 to-emerald-700 text-white shadow-lg sticky top-0 z-10"
    >
      <div class="container mx-auto">
        <div class="flex-1">
          <a class="btn btn-ghost text-xl">
            <span class="text-2xl mr-2">☪️</span>
            <span class="font-arabic">Al-Baraka</span>
          </a>
        </div>
        <div class="flex-none">
          <ul class="menu menu-horizontal px-1 gap-2">
            <li>
              <router-link
                to="/"
                class="btn btn-home btn-sm bg-emerald-700 hover:bg-emerald-600 border-none text-white flex items-center gap-2 rounded-lg transition-all duration-300"
              >
                <i class="fas fa-home"></i> Home
              </router-link>
            </li>
            <li>
              <router-link
                to="/books"
                class="btn btn-home btn-sm bg-emerald-700 hover:bg-emerald-600 border-none text-white flex items-center gap-2 rounded-lg transition-all duration-300"
              >
                <i class="fas fa-book"></i> Books
              </router-link>
            </li>
            <li>
              <router-link
                to="/"
                class="btn btn-home btn-sm bg-emerald-700 hover:bg-emerald-600 border-none text-white flex items-center gap-2 rounded-lg transition-all duration-300"
              >
                <i class="fas fa-home"></i> Home
              </router-link>
            </li>

            <li>
              <router-link
                to="/about"
                class="btn btn-about btn-sm bg-blue-700 hover:bg-blue-600 border-none text-white flex items-center gap-2 rounded-lg transition-all duration-300"
              >
                <i class="fas fa-info-circle"></i> About
              </router-link>
            </li>
            <li>
              <a
                class="btn btn-contact btn-sm bg-red-700 hover:bg-red-600 border-none text-white flex items-center gap-2 rounded-lg transition-all duration-300"
              >
                <i class="fas fa-envelope"></i> Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Modernized decorative divider with subtle pattern -->
    <div class="w-full h-2 bg-emerald-800 relative overflow-hidden">
      <div class="absolute inset-0 bg-pattern opacity-30"></div>
    </div>

    <!-- Main content area with modern shadow and subtle animation -->
    <div class="flex-grow container mx-auto px-4 py-8">
      <div
        class="bg-white rounded-xl p-6 border border-blue-200 shadow-xl transition-all duration-500 hover:shadow-2xl"
      >
        <div class="border-2 border-emerald-500 border-dashed p-8 rounded-lg">
          <router-view></router-view>
        </div>
      </div>
    </div>

    <!-- Modernized decorative divider -->
    <div class="w-full h-2 bg-blue-800 relative overflow-hidden">
      <div class="absolute inset-0 bg-pattern opacity-30"></div>
    </div>

    <!-- Footer with modern Islamic styling -->
    <footer
      class="footer footer-center p-10 bg-gradient-to-r from-blue-900 to-blue-800 text-white"
    >
      <div class="grid grid-flow-col gap-8">
        <a
          class="link link-hover flex flex-col items-center transition-transform duration-300 hover:scale-110"
        >
          <i class="fas fa-mosque text-2xl mb-2 text-emerald-400"></i>
          <span>About us</span>
        </a>
        <a
          class="link link-hover flex flex-col items-center transition-transform duration-300 hover:scale-110"
        >
          <i class="fas fa-scroll text-2xl mb-2 text-emerald-400"></i>
          <span>Services</span>
        </a>
        <a
          class="link link-hover flex flex-col items-center transition-transform duration-300 hover:scale-110"
        >
          <i class="fas fa-handshake text-2xl mb-2 text-emerald-400"></i>
          <span>Contact</span>
        </a>
        <a
          class="link link-hover flex flex-col items-center transition-transform duration-300 hover:scale-110"
        >
          <i class="fas fa-balance-scale text-2xl mb-2 text-emerald-400"></i>
          <span>Privacy</span>
        </a>
      </div>
      <div>
        <div class="grid grid-flow-col gap-6">
          <a
            class="btn social-btn btn-circle bg-red-700 hover:bg-red-600 border-none transition-all duration-300 hover:scale-110"
          >
            <i class="fab fa-twitter text-xl"></i>
          </a>
          <a
            class="btn social-btn btn-circle bg-emerald-700 hover:bg-emerald-600 border-none transition-all duration-300 hover:scale-110"
          >
            <i class="fab fa-youtube text-xl"></i>
          </a>
          <a
            class="btn social-btn btn-circle bg-blue-700 hover:bg-blue-600 border-none transition-all duration-300 hover:scale-110"
          >
            <i class="fab fa-facebook text-xl"></i>
          </a>
        </div>
      </div>
      <div class="mt-4">
        <div class="text-center">
          <p class="text-2xl mb-2 font-arabic">بسم الله الرحمن الرحيم</p>
          <p class="opacity-75">Made with dedication and respect</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
    // Load Font Awesome from CDN if not already loaded
    if (!document.getElementById("font-awesome-css")) {
      const link = document.createElement("link");
      link.id = "font-awesome-css";
      link.rel = "stylesheet";
      link.href =
        "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css";
      document.head.appendChild(link);
    }

    // Load Arabic-inspired font if not already loaded
    if (!document.getElementById("arabic-font")) {
      const link = document.createElement("link");
      link.id = "arabic-font";
      link.rel = "stylesheet";
      link.href =
        "https://fonts.googleapis.com/css2?family=Scheherazade+New&display=swap";
      document.head.appendChild(link);
    }
  },
};
</script>

<style>
/* Button click animation with more visible circles */
.btn {
  position: relative;
  overflow: hidden;
}

.btn::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: rgba(255, 255, 255, 0.4); /* More visible background */
  border-radius: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 10;
}

.btn:active::before {
  animation: pulse 0.8s ease-out; /* Slightly longer animation */
}

@keyframes pulse {
  0% {
    width: 0;
    height: 0;
    opacity: 0.8; /* Higher initial opacity */
  }
  100% {
    width: 300px;
    height: 300px;
    opacity: 0;
  }
}

/* Enhanced colorful radiating lines on click */
.btn:active::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.9; /* Higher opacity */
  animation: fadeLines 1s ease-out forwards;
  z-index: 11;
}

/* Improved colorful lines for each button with larger size and higher contrast */
.btn-home:active::after {
  background-image:
    radial-gradient(
      circle,
      transparent 10%,
      rgba(76, 175, 80, 0.9) 15%,
      transparent 20%
    ),
    radial-gradient(
      circle,
      transparent 20%,
      rgba(33, 150, 243, 0.9) 25%,
      transparent 30%
    ),
    radial-gradient(
      circle,
      transparent 30%,
      rgba(255, 193, 7, 0.9) 35%,
      transparent 40%
    ),
    radial-gradient(
      circle,
      transparent 40%,
      rgba(233, 30, 99, 0.9) 45%,
      transparent 50%
    );
  background-size: 200% 200%; /* Smaller initial size to make expansion more visible */
}

.btn-about:active::after {
  background-image:
    radial-gradient(
      circle,
      transparent 10%,
      rgba(33, 150, 243, 0.9) 15%,
      transparent 20%
    ),
    radial-gradient(
      circle,
      transparent 20%,
      rgba(76, 175, 80, 0.9) 25%,
      transparent 30%
    ),
    radial-gradient(
      circle,
      transparent 30%,
      rgba(255, 87, 34, 0.9) 35%,
      transparent 40%
    ),
    radial-gradient(
      circle,
      transparent 40%,
      rgba(255, 193, 7, 0.9) 45%,
      transparent 50%
    );
  background-size: 200% 200%;
}

.btn-contact:active::after {
  background-image:
    radial-gradient(
      circle,
      transparent 10%,
      rgba(233, 30, 99, 0.9) 15%,
      transparent 20%
    ),
    radial-gradient(
      circle,
      transparent 20%,
      rgba(255, 193, 7, 0.9) 25%,
      transparent 30%
    ),
    radial-gradient(
      circle,
      transparent 30%,
      rgba(33, 150, 243, 0.9) 35%,
      transparent 40%
    ),
    radial-gradient(
      circle,
      transparent 40%,
      rgba(76, 175, 80, 0.9) 45%,
      transparent 50%
    );
  background-size: 200% 200%;
}

.social-btn:active::after {
  background-image:
    radial-gradient(
      circle,
      transparent 10%,
      rgba(255, 255, 255, 0.9) 15%,
      transparent 20%
    ),
    radial-gradient(
      circle,
      transparent 20%,
      rgba(255, 215, 0, 0.9) 25%,
      transparent 30%
    ),
    radial-gradient(
      circle,
      transparent 30%,
      rgba(0, 255, 255, 0.9) 35%,
      transparent 40%
    ),
    radial-gradient(
      circle,
      transparent 40%,
      rgba(255, 105, 180, 0.9) 45%,
      transparent 50%
    );
  background-size: 200% 200%;
}

@keyframes fadeLines {
  0% {
    background-size: 100% 100%;
    opacity: 0.9;
  }
  50% {
    background-size: 250% 250%;
    opacity: 0.8;
  }
  100% {
    background-size: 400% 400%;
    opacity: 0;
  }
}

/* Add a subtle border highlight on active state for extra visibility */
.btn:active {
  box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.5);
}
</style>
