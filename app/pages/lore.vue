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
        <div class="bg-white/50 p-6 rounded-lg border border-aria-gold shadow-sm">
          <h2 class="text-3xl font-cinzel text-aria-dark-gold mb-4">Le Port des Oubliés</h2>
          <p>
            Brise-Écume n'est pas une ville comme les autres. Située à la lisière du Royaume d'Aria, elle sert de dernier refuge avant l'immensité de l'Océan des Tempêtes. 
            Ses murs de pierre blanche, blanchis par le sel, ont résisté à des siècles d'assauts, tant par les pirates que par les créatures des profondeurs.
          </p>
        </div>

        <div class="bg-white/50 p-6 rounded-lg border border-aria-gold shadow-sm">
          <h2 class="text-3xl font-cinzel text-aria-dark-gold mb-4">Légendes Locales</h2>
          <ul class="list-disc list-inside space-y-2 ml-4">
            <li><strong>Le Phare Éteint :</strong> On raconte que la flamme du vieux phare ne s'éteint jamais vraiment, mais qu'elle brille parfois d'une lueur verte annonciatrice de malheur.</li>
            <li><strong>La Grotte aux Murmures :</strong> À marée basse, les grottes sous les falaises chantent une mélodie qui peut rendre fou celui qui l'écoute trop longtemps.</li>
            <li><strong>Le Marché Flottant :</strong> Une fois par lune, des navires venus de contrées lointaines (et peut-être d'autres mondes) accostent pour vendre des objets introuvables ailleurs.</li>
          </ul>
        </div>

        <div class="bg-white/50 p-6 rounded-lg border border-aria-gold shadow-sm">
          <h2 class="text-3xl font-cinzel text-aria-dark-gold mb-4">Politique et Factions</h2>
          <p>
            La ville est dirigée par un conseil de marchands, mais le véritable pouvoir réside peut-être dans les mains de la Guilde des Dockers ou du Culte de la Marée. 
            Les tensions sont palpables, et chaque étranger est vu à la fois comme une opportunité et une menace.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Aria: Brise-Écume - Lore'
})
</script>
