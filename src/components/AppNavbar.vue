<template>
  <nav :class="['navbar', 'liquidGL', { scrolled: isScrolled }]">
    <div class="navbar-container">
      <!-- Logo -->
      <div class="navbar-logo">
        <span class="logo-text">D.Z</span>
      </div>

      <!-- Navigation Menu -->
      <ul class="navbar-menu">
        <li
          v-for="item in navItems"
          :key="item"
          class="navbar-item"
        >
          <a
            :href="`#${item.toLowerCase()}`"
            :class="['navbar-link', { active: activeItem === item }]"
            @click="setActiveItem(item)"
          >
            {{ item }}
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const navItems = ["Home", "About", "Services", "Contact"];
const activeItem = ref("Home");
const isScrolled = ref(false);

const setActiveItem = (item) => {
  activeItem.value = item;
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1rem 0;
  margin-left: auto;
  margin-right: auto;
  transition: all 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  background: #ffffff1a;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid #ffffff1a;
}

.navbar.scrolled {
  top: 1rem;
  left: 1rem;
  right: 1rem;
  width: calc(100% - 2rem);
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  border: 1px solid #ffffff10;
  border-radius: 1rem;
  box-shadow: 0 2px 12px #2b2b2b25;
}

.navbar-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
}

/* Logo Styles */
.navbar-logo {
  opacity: 0;
  animation: fadeInLeft 0.8s ease-out 0.2s forwards;
}

.logo-text {
  font-size: 1.8rem;
  font-weight: 700;
  color: #2e2e2e;
  letter-spacing: -0.02em;
  transition: all 0.3s ease;
  cursor: pointer;
  z-index: 3;
}

.logo-text:hover {
  color: #0066cc;
  transform: translateY(-1px);
}

/* Menu Styles */
.navbar-menu {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2rem;
}

.navbar-item {
  opacity: 0;
  animation: fadeInUp 0.6s ease-out forwards;
}

.navbar-item:nth-child(1) { animation-delay: 0.3s; }
.navbar-item:nth-child(2) { animation-delay: 0.4s; }
.navbar-item:nth-child(3) { animation-delay: 0.5s; }
.navbar-item:nth-child(4) { animation-delay: 0.6s; }

.navbar-link {
  position: relative;
  color: #333;
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  overflow: hidden;
  z-index: 2;
  transition: color 0.3s cubic-bezier(0.4, 0, 0.2, 1),
              background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1),
              transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
              box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.navbar-link:hover {
  color: #0066cc;
  background-color: rgba(0, 102, 204, 0.1);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 102, 204, 0.2);
}

.navbar-link.active {
  color: #0066cc;
  background-color: rgba(0, 102, 204, 0.15);
  box-shadow: 0 2px 8px rgba(0, 102, 204, 0.1);
}

@media (max-width: 768px) {
  .navbar-container {
    padding: 0 1rem;
  }

  .navbar-menu {
    gap: 1rem;
  }

  .navbar-link {
    font-size: 0.9rem;
    padding: 0.4rem 0.8rem;
  }

  .logo-text {
    font-size: 1.5rem;
  }
}

@media (max-width: 480px) {
  .navbar-menu {
    gap: 0.5rem;
  }
  .navbar-link {
    font-size: 0.8rem;
    padding: 0.3rem 0.6rem;
  }
}
</style>
