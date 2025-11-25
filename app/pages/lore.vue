<template>
  <div class="container mx-auto px-4 py-12">
    <h1 class="text-5xl font-cinzel text-center text-aria-blue mb-12">L'Histoire de Brise-Écume</h1>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      <!-- Map Section -->
      <div class="bg-aria-brown p-2 rounded-lg shadow-xl">
        <img src="/images/fantasy_map_region.png" alt="Carte de la région" class="w-full h-auto rounded border border-aria-parchment" />
        <p class="text-center text-aria-parchment mt-2 font-cinzel text-sm">Carte de la Côte des Murmures</p>
      </div>

      <!-- Lore Text -->
      <div class="space-y-6 text-lg leading-relaxed">
        <div v-if="pending" class="text-center text-aria-gold animate-pulse">
          Chargement des archives...
        </div>
        
        <div v-else v-for="section in lore" :key="section.id" class="bg-white/50 p-6 rounded-lg border border-aria-gold shadow-sm">
          <h2 class="text-3xl font-cinzel text-aria-dark-gold mb-4">{{ section.title }}</h2>
          <div v-html="section.content" class="prose prose-p:text-aria-brown prose-strong:text-aria-brown"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { data: lore, pending } = await useFetch('/api/lore')

useHead({
  title: 'Aria: Brise-Écume - Lore'
})
</script>
