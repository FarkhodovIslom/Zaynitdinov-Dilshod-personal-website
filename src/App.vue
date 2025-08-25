<template>
  <div class="App">
    <Navbar />

    <!-- Canvas для LiquidGL -->
    <canvas ref="liquidCanvas" class="liquid-bg"></canvas>

    <main>
      <section id="home" class="section">
        <div class="content">
          <h1>Welcome to my Portfolio</h1>
          <p>This is the home section</p>
        </div>
      </section>

      <section id="about" class="section">
        <div class="content">
          <h2>About</h2>
          <p>Learn more about me and my work</p>
        </div>
      </section>

      <section id="portfolio" class="section">
        <div class="content">
          <h2>Portfolio</h2>
          <p>Check out my latest projects</p>
        </div>
      </section>

      <section id="contact" class="section">
        <div class="content">
          <h2>Contact</h2>
          <p>Get in touch with me</p>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { onMounted, nextTick } from "vue";
import Navbar from "./components/AppNavbar.vue";

function waitForLiquid(timeoutMs = 4000) {
  const start = Date.now();
  return new Promise((resolve, reject) => {
    (function tick() {
      if (window.liquidGL && typeof window.liquidGL === "function") return resolve(window.liquidGL);
      if (Date.now() - start > timeoutMs) return reject(new Error("liquidGL not loaded"));
      setTimeout(tick, 50);
    })();
  });
}

onMounted(async () => {
  await nextTick();
  try {
    const liquidGL = await waitForLiquid();

    const instance = liquidGL({
      snapshot: "body",
      target: ".liquidGL",
      contentInside: true, // <-- ВАЖНО
      resolution: 1.0,
      refraction: 0.01,
      bevelDepth: 0.08,
      bevelWidth: 0.15,
      frost: 1,
      shadow: true,
      specular: true,
    });
    void instance;
  } catch (err) {
    console.error("LiquidGL не подгрузился:", err);
  }
});
</script>


<style scoped>
html {
  scroll-behavior: smooth;
}
</style>
