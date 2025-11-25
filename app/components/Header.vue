<template>
  <header class="relative bg-aria-void border-b-2 border-aria-gold z-50 shadow-lg">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center h-20">
        <!-- Logo / Brand -->
        <NuxtLink to="/" class="flex items-center gap-3 group">
          <div class="w-10 h-10 rounded-full bg-aria-gold/10 border border-aria-gold flex items-center justify-center group-hover:bg-aria-gold/20 transition-colors">
            <span class="text-2xl">⚓</span>
          </div>
          <h1 class="text-2xl font-cinzel font-bold text-aria-gold group-hover:text-white transition-colors tracking-wider">
            Brise-Écume
          </h1>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center gap-8">
          <NuxtLink 
            v-for="link in links" 
            :key="link.path" 
            :to="link.path"
            class="relative font-cinzel text-lg text-aria-parchment hover:text-aria-gold transition-colors py-2 group"
            active-class="text-aria-gold"
          >
            {{ link.name }}
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-aria-gold transition-all duration-300 group-hover:w-full"></span>
          </NuxtLink>
        </nav>

        <!-- Mobile Menu Button -->
        <button 
          @click="isOpen = !isOpen" 
          class="md:hidden text-aria-gold hover:text-white transition-colors p-2"
          aria-label="Menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path v-if="!isOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Navigation Menu -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform -translate-y-4 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-4 opacity-0"
    >
      <div v-if="isOpen" class="md:hidden absolute top-full left-0 w-full bg-aria-void border-b border-aria-gold/30 shadow-xl">
        <nav class="flex flex-col py-4">
          <NuxtLink 
            v-for="link in links" 
            :key="link.path" 
            :to="link.path"
            class="px-6 py-3 font-cinzel text-lg text-aria-parchment hover:bg-aria-gold/10 hover:text-aria-gold transition-colors border-l-4 border-transparent hover:border-aria-gold"
            active-class="text-aria-gold border-aria-gold bg-aria-gold/5"
            @click="isOpen = false"
          >
            {{ link.name }}
          </NuxtLink>
        </nav>
      </div>
    </transition>

    <!-- Decorative Torn Edge -->
    <TornHeaderEdge />
  </header>
</template>

<script setup lang="ts">
const isOpen = ref(false)

const links = [
  { name: 'Accueil', path: '/' },
  { name: 'Héros', path: '/characters' },
  { name: 'Lore', path: '/lore' },
  { name: 'MJ', path: '/admin' }
]
</script>
