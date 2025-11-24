<template>
  <div>
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 z-0">
        <img src="/images/brise_ecume_hero.png" alt="Brise-Écume" class="w-full h-full object-cover filter sepia-[0.15] contrast-110 saturate-75" />
        <!-- Vignette & Gradient Overlay -->
        <div class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-aria-parchment"></div>
        <div class="absolute inset-0 bg-black/20 mix-blend-multiply"></div>
      </div>
      <div class="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        <h1 class="text-7xl md:text-9xl font-cinzel font-bold mb-4 text-aria-gold drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] tracking-wider">
          BRISE-ÉCUME
        </h1>
        <p class="text-2xl md:text-3xl font-body mb-12 text-aria-parchment drop-shadow-md italic">
          "Là où les vagues murmurent des secrets..."
        </p>
        
        <!-- Central Navigation -->
        <nav class="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
          <NuxtLink to="/characters" class="group relative overflow-hidden bg-black/50 hover:bg-aria-gold/20 border-2 border-aria-gold px-8 py-4 rounded transition-all duration-300 w-64">
            <span class="block text-2xl font-cinzel font-bold text-aria-gold group-hover:text-white transition-colors">Les Héros</span>
            <span class="text-sm text-aria-parchment opacity-80 group-hover:opacity-100">Découvrir les protagonistes</span>
          </NuxtLink>
          
          <NuxtLink to="/lore" class="group relative overflow-hidden bg-black/50 hover:bg-aria-gold/20 border-2 border-aria-gold px-8 py-4 rounded transition-all duration-300 w-64">
            <span class="block text-2xl font-cinzel font-bold text-aria-gold group-hover:text-white transition-colors">Le Lore</span>
            <span class="text-sm text-aria-parchment opacity-80 group-hover:opacity-100">Carte et Histoire</span>
          </NuxtLink>
          
          <NuxtLink to="/admin" class="group relative overflow-hidden bg-black/50 hover:bg-aria-gold/20 border-2 border-aria-gold px-8 py-4 rounded transition-all duration-300 w-64">
            <span class="block text-2xl font-cinzel font-bold text-aria-gold group-hover:text-white transition-colors">Maître du Jeu</span>
            <span class="text-sm text-aria-parchment opacity-80 group-hover:opacity-100">Accès Restreint</span>
          </NuxtLink>
        </nav>
      </div>
    </section>

    <!-- Intro Section -->
    <section class="py-20 container mx-auto px-4">
      <div class="max-w-3xl mx-auto text-center">
        <h2 class="text-4xl font-cinzel text-aria-blue mb-8 border-b-2 border-aria-gold inline-block pb-2">
          Bienvenue Voyageurs
        </h2>
        <p class="text-lg leading-relaxed mb-6">
          Vous êtes arrivés à Brise-Écume, un joyau côtier battu par les vents et les légendes. 
          Ici, cinq destins vont s'entremêler dans une quête qui pourrait changer le visage d'Aria à jamais.
        </p>
        <p class="text-lg leading-relaxed">
          Explorez la ville, découvrez ses habitants, et préparez-vous à affronter ce qui rôde dans les profondeurs.
        </p>
      </div>
    </section>
    
    <!-- Map Preview Section -->
    <section class="py-16 bg-aria-dark-parchment/30">
        <div class="container mx-auto px-4 text-center">
             <h2 class="text-3xl font-cinzel text-aria-sea mb-12">La Région</h2>
             <div class="max-w-4xl mx-auto p-2 bg-aria-brown rounded-lg shadow-xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
                 <img src="/images/fantasy_map_region.png" alt="Carte de la région" class="w-full h-auto rounded border border-aria-parchment opacity-90 hover:opacity-100 transition-opacity" />
             </div>
        </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Aria: Brise-Écume - Accueil',
  meta: [
    { name: 'description', content: 'Site de jeu de rôle Aria à Brise-Écume' }
  ]
})
</script>
