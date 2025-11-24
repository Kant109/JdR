<template>
  <div class="bg-aria-midnight/80 backdrop-blur-sm p-0 rounded-xl shadow-2xl border border-aria-obsidian hover:border-aria-gold/50 transition-all duration-300 group relative overflow-hidden flex flex-col h-full">
    <!-- Card Glow Effect -->
    <div class="absolute inset-0 bg-gradient-to-br from-aria-mystic/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

    <!-- Delete Button -->
    <div class="absolute top-2 right-2 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
      <button @click.stop="$emit('delete')" class="text-red-400 hover:text-red-200 bg-black/50 hover:bg-red-900/50 rounded-full w-8 h-8 flex items-center justify-center backdrop-blur-md border border-red-500/30 transition-colors" title="Bannir">
        ×
      </button>
    </div>

    <!-- Image Header -->
    <div class="relative h-48 w-full flex-shrink-0 overflow-hidden bg-black">
      <img :src="character.image" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100" />
      <div class="absolute inset-0 bg-gradient-to-t from-aria-midnight via-transparent to-transparent"></div>
      
      <!-- Level Badge -->
      <div class="absolute bottom-2 right-2 bg-aria-gold text-aria-brown text-xs font-bold px-3 py-1 rounded-full border border-aria-brown shadow-lg font-cinzel">
        Niveau {{ character.level || 1 }}
      </div>

      <!-- Image Upload Overlay -->
      <div class="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div class="relative">
          <input 
            type="file" 
            accept="image/*"
            @change="handleImageUpload"
            class="hidden"
            ref="fileInput"
          />
          <button 
            @click="$refs.fileInput.click()"
            class="text-xs text-white border border-white/30 bg-white/10 px-3 py-2 rounded hover:bg-white/20 backdrop-blur-sm transition-colors"
            :disabled="uploading"
          >
            {{ uploading ? 'Invocation...' : 'Changer l\'Apparence' }}
          </button>
        </div>
      </div>
    </div>

    <!-- Content -->
    <div class="p-5 flex-grow flex flex-col gap-4 relative z-10">
      <div>
        <input 
          v-model="character.name" 
          class="w-full bg-transparent font-cinzel font-bold text-xl text-aria-gold border-b border-transparent hover:border-aria-gold/30 focus:border-aria-gold focus:outline-none mb-1 placeholder-aria-gold/30"
          placeholder="Nom du Héros"
        />
        <input 
          v-model="character.archetype" 
          class="w-full bg-transparent text-sm text-aria-glow italic border-b border-transparent hover:border-aria-mystic/30 focus:border-aria-mystic focus:outline-none placeholder-aria-glow/30"
          placeholder="Classe / Archétype"
        />
      </div>

      <div class="flex-grow">
        <label class="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1 block">Légende</label>
        <textarea 
          v-model="character.description" 
          rows="3" 
          class="w-full text-sm bg-black/20 text-gray-300 p-2 rounded border border-aria-obsidian focus:border-aria-mystic focus:outline-none resize-none transition-colors"
          placeholder="Histoire du personnage..."
        ></textarea>
      </div>

      <!-- Stats Grid -->
      <div class="grid grid-cols-3 gap-2">
        <div v-for="(val, stat) in character.stats" :key="stat" class="bg-black/30 p-2 rounded border border-aria-obsidian flex flex-col items-center group/stat hover:border-aria-gold/30 transition-colors">
          <label class="text-[10px] font-bold text-gray-500 uppercase group-hover/stat:text-aria-gold transition-colors">{{ stat }}</label>
          <input 
            v-model.number="character.stats[stat]" 
            type="number" 
            class="w-full text-center bg-transparent font-bold text-lg text-gray-200 focus:text-aria-gold focus:outline-none"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  character: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['delete', 'save'])

const uploading = ref(false)
const fileInput = ref(null)

const handleImageUpload = async (event) => {
  const file = event.target.files[0]
  if (!file) return

  uploading.value = true
  const formData = new FormData()
  formData.append('file', file)

  try {
    const response = await $fetch('/api/upload', {
      method: 'POST',
      body: formData
    })
    props.character.image = response.url
    emit('save')
  } catch (e) {
    alert(`Erreur lors du téléchargement: ${e.message || e.statusMessage || 'Erreur inconnue'}`)
    console.error(e)
  } finally {
    uploading.value = false
    // Reset input
    if (fileInput.value) fileInput.value.value = ''
  }
}
</script>
