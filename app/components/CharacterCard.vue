<template>
  <div class="bg-aria-parchment border-2 border-aria-gold rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full">
    <div class="h-64 overflow-hidden relative group">
      <img :src="image" :alt="name" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
      <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
      <div class="absolute bottom-0 left-0 p-4">
        <h3 class="text-2xl font-cinzel font-bold text-aria-gold">{{ name }}</h3>
        <p class="text-white/90 font-body italic">{{ archetype }}</p>
      </div>
    </div>
    <div class="p-6 flex-grow flex flex-col">
      <p class="text-aria-brown mb-4 flex-grow">{{ description }}</p>
      <div class="mt-4 pt-4 border-t border-aria-dark-parchment">
        <div class="flex justify-between text-sm font-bold text-aria-sea">
          <span>Force: {{ stats.str }}</span>
          <span>Dextérité: {{ stats.dex }}</span>
          <span>Intelligence: {{ stats.int }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  name: String,
  archetype: String,
  description: String,
  image: String,
  stats: Object
})
</script>
