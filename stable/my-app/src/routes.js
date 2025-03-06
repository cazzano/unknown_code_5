import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home.vue";
import About from "./components/About.vue"; // Import About page
import Books from "./components/Books.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About }, // Add About route
  { path: "/books", component: Books },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
