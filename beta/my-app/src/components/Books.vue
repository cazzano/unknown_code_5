<template>
  <div class="books-container">
    <h1 class="text-3xl font-bold text-center mb-8 font-arabic text-emerald-800">Islamic Books Collection</h1>
    
    <!-- Search and filter options -->
    <div class="mb-6 bg-white p-4 rounded-lg shadow-md">
      <div class="flex flex-col md:flex-row gap-4">
        <div class="flex-1">
          <input 
            v-model="searchQuery" 
            type="text" 
            placeholder="Search books..." 
            class="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
        <div class="w-full md:w-48">
          <select 
            v-model="categoryFilter" 
            class="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            <option value="">All Categories</option>
            <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
          </select>
        </div>
      </div>
    </div>
    
    <!-- Loading state -->
    <div v-if="loading" class="flex justify-center items-center py-20">
      <div class="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-emerald-700"></div>
    </div>
    
    <!-- Error state -->
    <div v-else-if="error" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
      <p class="font-bold">Error!</p>
      <p>{{ error }}</p>
      <button 
        @click="fetchBooks" 
        class="mt-4 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300"
      >
        Try Again
      </button>
    </div>
    
    <!-- Books grid -->
    <div v-else-if="paginatedBooks.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div 
        v-for="book in paginatedBooks" 
        :key="book.books_id" 
        class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-emerald-100"
      >
        <div class="h-48 overflow-hidden">
          <img 
            :src="book.static_resources.picture_url" 
            :alt="book.name" 
            class="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            @error="handleImageError($event, book.books_id)"
          />
        </div>
        <div class="p-5">
          <h2 class="text-xl font-bold text-emerald-800 mb-2">{{ book.name }}</h2>
          <div class="flex items-center gap-2 mb-2">
            <i class="fas fa-user-edit text-blue-600"></i>
            <p class="text-slate-600">{{ book.author_name }}</p>
          </div>
          <div class="flex items-center gap-2 mb-2">
            <i class="fas fa-bookmark text-emerald-600"></i>
            <p class="text-slate-600">{{ book.category }}</p>
          </div>
          <p class="text-slate-700 mb-4 line-clamp-2">{{ book.description }}</p>
          <button 
            @click="openModal(book)" 
            class="w-full bg-gradient-to-r from-emerald-700 to-emerald-600 hover:from-emerald-800 hover:to-emerald-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
          >
            <i class="fas fa-info-circle"></i> Details
          </button>
        </div>
      </div>
    </div>
    
    <!-- No books found -->
    <div v-else class="bg-blue-50 border border-blue-300 text-blue-700 px-6 py-12 rounded-lg text-center">
      <i class="fas fa-book-open text-5xl mb-4 text-blue-500"></i>
      <h3 class="text-2xl font-bold mb-2">No Books Found</h3>
      <p>No books match your current search criteria. Try adjusting your filters.</p>
    </div>
    
    <!-- Pagination -->
    <div v-if="totalPages > 1 && !loading && !error" class="mt-10 flex justify-center">
      <div class="flex flex-wrap items-center gap-2">
        <!-- First page button -->
        <button 
          @click="goToPage(1)" 
          :disabled="currentPage === 1"
          :class="[
            'w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300',
            currentPage === 1 
              ? 'bg-slate-200 text-slate-400 cursor-not-allowed' 
              : 'bg-emerald-700 text-white hover:bg-emerald-800'
          ]"
        >
          <i class="fas fa-angle-double-left"></i>
        </button>
        
        <!-- Previous page button -->
        <button 
          @click="goToPage(currentPage - 1)" 
          :disabled="currentPage === 1"
          :class="[
            'w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300',
            currentPage === 1 
              ? 'bg-slate-200 text-slate-400 cursor-not-allowed' 
              : 'bg-emerald-700 text-white hover:bg-emerald-800'
          ]"
        >
          <i class="fas fa-angle-left"></i>
        </button>
        
        <!-- Page numbers -->
        <template v-for="page in displayedPages" :key="page">
          <button 
            v-if="page !== '...'"
            @click="goToPage(page)" 
            :class="[
              'w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300',
              currentPage === page 
                ? 'bg-emerald-600 text-white font-bold border-2 border-emerald-800' 
                : 'bg-white text-slate-700 border border-slate-300 hover:bg-emerald-100'
            ]"
          >
            {{ page }}
          </button>
          <span 
            v-else
            class="w-10 h-10 flex items-center justify-center text-slate-600"
          >
            ...
          </span>
        </template>
        
        <!-- Next page button -->
        <button 
          @click="goToPage(currentPage + 1)" 
          :disabled="currentPage === totalPages"
          :class="[
            'w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300',
            currentPage === totalPages 
              ? 'bg-slate-200 text-slate-400 cursor-not-allowed' 
              : 'bg-emerald-700 text-white hover:bg-emerald-800'
          ]"
        >
          <i class="fas fa-angle-right"></i>
        </button>
        
        <!-- Last page button -->
        <button 
          @click="goToPage(totalPages)" 
          :disabled="currentPage === totalPages"
          :class="[
            'w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300',
            currentPage === totalPages 
              ? 'bg-slate-200 text-slate-400 cursor-not-allowed' 
              : 'bg-emerald-700 text-white hover:bg-emerald-800'
          ]"
        >
          <i class="fas fa-angle-double-right"></i>
        </button>
      </div>
    </div>
    
    <!-- Page info -->
    <div v-if="filteredBooks.length > 0 && !loading && !error" class="mt-4 text-center text-slate-600">
      Showing {{ (currentPage - 1) * booksPerPage + 1 }} to {{ Math.min(currentPage * booksPerPage, filteredBooks.length) }} of {{ filteredBooks.length }} books
    </div>
    
    <!-- Book details modal -->
    <div v-if="selectedBook" class="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-60 p-4">
      <div class="bg-white rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl animate-fadeIn">
        <div class="relative">
          <img 
            :src="selectedBook.static_resources.picture_url" 
            :alt="selectedBook.name" 
            class="w-full h-64 object-cover" 
            @error="handleModalImageError"
          />
          <button 
            @click="closeModal" 
            class="absolute top-4 right-4 bg-red-600 hover:bg-red-700 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
          >
            <i class="fas fa-times"></i>
          </button>
        </div>
        <div class="p-6">
          <h2 class="text-2xl font-bold text-emerald-800 mb-3">{{ selectedBook.name }}</h2>
          <div class="grid md:grid-cols-2 gap-4 mb-6">
            <div class="flex items-center gap-2">
              <i class="fas fa-user-edit text-blue-600"></i>
              <p><span class="font-semibold">Author:</span> {{ selectedBook.author_name }}</p>
            </div>
            <div class="flex items-center gap-2">
              <i class="fas fa-bookmark text-emerald-600"></i>
              <p><span class="font-semibold">Category:</span> {{ selectedBook.category }}</p>
            </div>
          </div>
          <div class="mb-6">
            <h3 class="text-lg font-semibold mb-2 text-slate-800">Description</h3>
            <p class="text-slate-700">{{ selectedBook.description }}</p>
          </div>
          <div class="flex flex-col sm:flex-row gap-4">
            <a 
              :href="selectedBook.static_resources.download_url" 
              download
              class="flex-1 bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <i class="fas fa-download"></i> Download
            </a>
            <a 
              :href="selectedBook.static_resources.download_url" 
              target="_blank"
              class="flex-1 bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <i class="fas fa-eye"></i> Preview
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BooksPage',
  data() {
    return {
      books: [],
      loading: true,
      error: null,
      selectedBook: null,
      searchQuery: '',
      categoryFilter: '',
      categories: [],
      fallbackImage: 'https://via.placeholder.com/400x250?text=Book+Cover+Not+Available',
      currentPage: 1,
      booksPerPage: 10
    }
  },
  computed: {
    filteredBooks() {
      return this.books.filter(book => {
        const matchesSearch = book.name.toLowerCase().includes(this.searchQuery.toLowerCase()) || 
                             book.author_name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                             book.description.toLowerCase().includes(this.searchQuery.toLowerCase());
        
        const matchesCategory = this.categoryFilter === '' || book.category.toLowerCase() === this.categoryFilter.toLowerCase();
        
        return matchesSearch && matchesCategory;
      });
    },
    paginatedBooks() {
      const startIndex = (this.currentPage - 1) * this.booksPerPage;
      const endIndex = startIndex + this.booksPerPage;
      return this.filteredBooks.slice(startIndex, endIndex);
    },
    totalPages() {
      return Math.ceil(this.filteredBooks.length / this.booksPerPage);
    },
    displayedPages() {
      // Display strategy: Always show first, last, current, and pages around current
      const range = 1; // How many pages to show on each side of current page
      const pages = [];
      
      // Always add page 1
      pages.push(1);
      
      // Add ellipsis after page 1 if needed
      if (this.currentPage - range > 2) {
        pages.push('...');
      }
      
      // Add pages around current page
      for (let i = Math.max(2, this.currentPage - range); i <= Math.min(this.totalPages - 1, this.currentPage + range); i++) {
        pages.push(i);
      }
      
      // Add ellipsis before last page if needed
      if (this.currentPage + range < this.totalPages - 1) {
        pages.push('...');
      }
      
      // Always add last page if more than 1 page
      if (this.totalPages > 1) {
        pages.push(this.totalPages);
      }
      
      return pages;
    }
  },
  methods: {
    async fetchBooks() {
      this.loading = true;
      this.error = null;
      
      try {
        const response = await fetch('http://localhost:5000/books');
        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`);
        }
        
        this.books = await response.json();
        
        // Extract unique categories for the filter
        this.categories = [...new Set(this.books.map(book => book.category))];
      } catch (err) {
        console.error('Error fetching books:', err);
        this.error = 'Failed to load books. Please try again later.';
      } finally {
        this.loading = false;
      }
    },
    openModal(book) {
      this.selectedBook = book;
      document.body.classList.add('overflow-hidden'); // Prevent background scrolling
    },
    closeModal() {
      this.selectedBook = null;
      document.body.classList.remove('overflow-hidden');
    },
    handleImageError(event, bookId) {
      console.log(`Failed to load image for book ID: ${bookId}`);
      event.target.src = this.fallbackImage;
    },
    handleModalImageError(event) {
      event.target.src = this.fallbackImage;
    },
    goToPage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
        // Scroll to top of book list when changing pages
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    },
    resetPagination() {
      this.currentPage = 1;
    }
  },
  created() {
    this.fetchBooks();
  },
  watch: {
    // Reset to first page when search query or category filter changes
    searchQuery() {
      this.resetPagination();
    },
    categoryFilter() {
      this.resetPagination();
    }
  },
  beforeUnmount() {
    // Make sure to clean up in case component is unmounted with modal open
    if (this.selectedBook) {
      document.body.classList.remove('overflow-hidden');
    }
  }
}
</script>

<style scoped>
/* Fade in animation for modal */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fadeIn {
  animation: fadeIn 0.3s ease-out forwards;
}

/* Line clamp for description */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
