<template>
  <div v-if="node" class="h-full flex flex-col bg-aria-midnight/90 backdrop-blur-md">
    <!-- Editor Header -->
    <div class="p-6 border-b border-aria-obsidian bg-black/20">
      <input 
        v-model="node.title" 
        class="w-full bg-transparent font-cinzel font-bold text-2xl text-aria-gold border-b border-transparent hover:border-aria-gold/30 focus:border-aria-gold focus:outline-none placeholder-aria-gold/20 transition-colors"
        placeholder="Titre du Chapitre..."
      />
    </div>

    <!-- Editor Content -->
    <div class="flex-grow p-6 relative">
      <textarea 
        v-model="node.content" 
        class="w-full h-full bg-transparent text-gray-300 font-body text-lg leading-relaxed resize-none focus:outline-none custom-scrollbar placeholder-gray-700"
        placeholder="Écrivez votre légende ici..."
      ></textarea>
      
      <!-- Decorative Corner -->
      <div class="absolute bottom-4 right-4 text-aria-obsidian opacity-20 pointer-events-none">
        <span class="text-6xl font-cinzel">❧</span>
      </div>
    </div>
  </div>

  <!-- Empty State -->
  <div v-else class="h-full flex flex-col items-center justify-center text-gray-500 bg-aria-midnight/50 backdrop-blur-sm border border-aria-obsidian/30 rounded-xl m-4">
    <div class="text-6xl mb-4 opacity-50">📜</div>
    <p class="font-cinzel text-xl">Sélectionnez un parchemin</p>
    <p class="text-sm mt-2 opacity-70">ou créez un nouveau chapitre</p>
  </div>
</template>

<script setup>
defineProps({
  node: {
    type: Object,
    default: null
  }
})
</script>
