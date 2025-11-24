<template>
  <div class="container mx-auto px-4 py-12">
    <h1 class="text-5xl font-cinzel text-center text-aria-blue mb-12">Les Héros de Brise-Écume</h1>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <CharacterCard 
        v-for="char in characters" 
        :key="char.name"
        v-bind="char"
      />
    </div>
  </div>
</template>

<script setup>
const { data: characters } = await useFetch('/api/characters')

useHead({
  title: 'Aria: Brise-Écume - Personnages'
})

</script>
