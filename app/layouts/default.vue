<template>
  <div class="min-h-screen flex flex-col font-body bg-aria-parchment text-aria-brown">

    <main class="flex-grow">
      <slot />
    </main>

    <footer class="bg-aria-brown text-aria-dark-parchment py-8 mt-12 border-t-4 border-aria-dark-gold">
      <div class="container mx-auto px-4 text-center">
        <p class="font-cinzel">&copy; 2025 Aventure à Brise-Écume</p>
        <p class="text-sm mt-2 opacity-75">Inspiré par l'univers d'Aria Game of Roles</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
</script>
