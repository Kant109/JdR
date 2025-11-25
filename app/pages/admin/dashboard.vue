<template>
  <div class="h-screen overflow-hidden bg-aria-void flex text-gray-200 font-body">
    <!-- Sidebar -->
    <aside class="w-64 flex-shrink-0 bg-aria-midnight border-r border-aria-obsidian flex flex-col shadow-2xl z-20">
      <div class="p-6 border-b border-aria-obsidian flex items-center gap-3">
        <div class="w-8 h-8 rounded-full bg-gradient-to-br from-aria-gold to-aria-dark-gold shadow-lg shadow-aria-gold/20"></div>
        <h1 class="text-xl font-cinzel font-bold text-aria-gold tracking-wider">Aria Admin</h1>
      </div>

      <nav class="flex-grow p-4 space-y-4">
        <button 
          @click="activeTab = 'characters'"
          class="w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 group relative overflow-hidden border"
          :class="activeTab === 'characters' 
            ? 'bg-gradient-to-r from-aria-mystic/20 to-transparent border-aria-mystic/50 text-aria-glow shadow-[0_0_15px_rgba(99,102,241,0.3)]' 
            : 'border-transparent text-gray-500 hover:text-gray-200 hover:bg-white/5 hover:border-white/10'"
        >
          <div class="absolute inset-0 bg-aria-mystic/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out pointer-events-none"></div>
          <span class="text-2xl relative z-10 group-hover:scale-110 transition-transform duration-300">👥</span>
          <span class="font-cinzel font-bold tracking-widest uppercase text-sm relative z-10">Héros</span>
          <div v-if="activeTab === 'characters'" class="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-aria-glow rounded-l-full shadow-[0_0_10px_#818CF8]"></div>
        </button>

        <button 
          @click="activeTab = 'scenario'"
          class="w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 group relative overflow-hidden border"
          :class="activeTab === 'scenario' 
            ? 'bg-gradient-to-r from-aria-mystic/20 to-transparent border-aria-mystic/50 text-aria-glow shadow-[0_0_15px_rgba(99,102,241,0.3)]' 
            : 'border-transparent text-gray-500 hover:text-gray-200 hover:bg-white/5 hover:border-white/10'"
        >
          <div class="absolute inset-0 bg-aria-mystic/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out pointer-events-none"></div>
          <span class="text-2xl relative z-10 group-hover:scale-110 transition-transform duration-300">📜</span>
          <span class="font-cinzel font-bold tracking-widest uppercase text-sm relative z-10">Grimoire</span>
          <div v-if="activeTab === 'scenario'" class="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-aria-glow rounded-l-full shadow-[0_0_10px_#818CF8]"></div>
        </button>

        <button 
          @click="activeTab = 'lore'"
          class="w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 group relative overflow-hidden border"
          :class="activeTab === 'lore' 
            ? 'bg-gradient-to-r from-aria-mystic/20 to-transparent border-aria-mystic/50 text-aria-glow shadow-[0_0_15px_rgba(99,102,241,0.3)]' 
            : 'border-transparent text-gray-500 hover:text-gray-200 hover:bg-white/5 hover:border-white/10'"
        >
          <div class="absolute inset-0 bg-aria-mystic/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out pointer-events-none"></div>
          <span class="text-2xl relative z-10 group-hover:scale-110 transition-transform duration-300">📚</span>
          <span class="font-cinzel font-bold tracking-widest uppercase text-sm relative z-10">Lore</span>
          <div v-if="activeTab === 'lore'" class="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-aria-glow rounded-l-full shadow-[0_0_10px_#818CF8]"></div>
        </button>
      </nav>

      <div class="p-4 border-t border-aria-obsidian bg-black/20 space-y-2">
        <button 
          @click="router.push('/')" 
          class="w-full flex items-center gap-3 px-4 py-2 rounded-lg text-gray-400 hover:text-aria-gold hover:bg-white/5 transition-all group"
        >
          <span>← Retour à Brise-Écume</span>
        </button>

        <button 
          @click="logout" 
          class="w-full flex items-center gap-3 px-4 py-2 rounded-lg text-red-400/70 hover:text-red-300 hover:bg-red-500/10 transition-all group"
        >
          <span class="text-lg group-hover:rotate-12 transition-transform">🚪</span>
          <span class="font-cinzel font-bold text-sm tracking-wide">Déconnexion</span>
        </button>
      </div>
    </aside>

    <!-- Main Content -->
    <main class="flex-grow flex flex-col overflow-hidden relative">
      <!-- Background Ambience -->
      <div class="absolute inset-0 pointer-events-none bg-[url('/assets/images/noise.png')] opacity-5 mix-blend-overlay"></div>
      <div class="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/50 to-transparent pointer-events-none"></div>

      <div v-if="pending" class="flex-grow flex items-center justify-center">
        <div class="text-3xl font-cinzel text-aria-gold animate-pulse drop-shadow-glow">Invocation des archives...</div>
      </div>

      <div v-else class="flex-grow flex flex-col overflow-hidden relative z-10">
        <!-- Characters Tab -->
        <div v-if="activeTab === 'characters'" class="h-full flex flex-col">
          <header class="px-8 py-6 flex justify-between items-center border-b border-aria-obsidian/50 bg-aria-midnight/30 backdrop-blur-sm">
            <div>
              <h2 class="text-3xl font-cinzel text-aria-gold drop-shadow-md">Panthéon des Héros</h2>
              <p class="text-gray-400 text-sm mt-1">Gérez les légendes de votre monde</p>
            </div>
            <button 
              @click="addCharacter" 
              class="bg-gradient-to-r from-green-700 to-green-600 text-white px-6 py-2 rounded-lg shadow-lg shadow-green-900/50 hover:shadow-green-500/30 hover:scale-105 transition-all font-bold border border-green-500/30 flex items-center gap-2"
            >
              <span>✨</span> Nouveau Héros
            </button>
          </header>
          
          <div class="flex-grow overflow-y-auto p-8">
            <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8 pb-20">
              <AdminCharacterCard 
                v-for="(char, index) in characters" 
                :key="char.id" 
                :character="char" 
                @delete="deleteCharacter(char.id)"
                @save="saveChanges"
              />
            </div>
          </div>
        </div>

        <!-- Scenario Tab -->
        <div v-if="activeTab === 'scenario'" class="h-full flex flex-col">
           <header class="px-8 py-6 border-b border-aria-obsidian/50 bg-aria-midnight/30 backdrop-blur-sm">
            <h2 class="text-3xl font-cinzel text-aria-gold drop-shadow-md">Grimoire du Destin</h2>
            <p class="text-gray-400 text-sm mt-1">Tissez la trame de l'histoire</p>
          </header>

          <div class="flex-grow flex gap-6 overflow-hidden p-6">
            <!-- Sidebar Tree -->
            <div class="w-80 bg-aria-midnight/80 rounded-xl shadow-xl border border-aria-obsidian flex flex-col overflow-hidden backdrop-blur-md">
              <div class="p-4 border-b border-aria-obsidian bg-black/20 flex flex-col gap-3">
                <div class="flex justify-between items-center">
                  <h3 class="font-cinzel font-bold text-gray-300">Structure</h3>
                  <button @click="addRootNode" class="text-xs bg-aria-mystic text-white px-3 py-1.5 rounded hover:bg-aria-glow transition-all shadow-lg shadow-aria-mystic/20">
                    + Chapitre
                  </button>
                </div>
              </div>
              <div class="flex-grow overflow-y-auto p-3 custom-scrollbar">
                <AdminScenarioTree 
                  :nodes="scenario" 
                  :selected-id="selectedNode?.id"
                  @select="selectNode"
                  @add-child="addChildNode"
                  @delete="deleteNode"
                />
              </div>
            </div>

            <!-- Editor -->
            <div class="flex-grow h-full shadow-2xl rounded-xl overflow-hidden border border-aria-obsidian/50">
              <AdminScenarioEditor :node="selectedNode" />
            </div>
          </div>
        </div>


        <!-- Lore Tab -->
        <div v-if="activeTab === 'lore'" class="h-full flex flex-col">
          <header class="px-8 py-6 flex justify-between items-center border-b border-aria-obsidian/50 bg-aria-midnight/30 backdrop-blur-sm">
            <div>
              <h2 class="text-3xl font-cinzel text-aria-gold drop-shadow-md">Archives de Brise-Écume</h2>
              <p class="text-gray-400 text-sm mt-1">Gérez l'histoire et les légendes</p>
            </div>
            <button 
              @click="addLoreSection" 
              class="bg-gradient-to-r from-green-700 to-green-600 text-white px-6 py-2 rounded-lg shadow-lg shadow-green-900/50 hover:shadow-green-500/30 hover:scale-105 transition-all font-bold border border-green-500/30 flex items-center gap-2"
            >
              <span>✨</span> Nouvelle Section
            </button>
          </header>

          <div class="flex-grow overflow-y-auto p-8 space-y-8">
            <div v-for="section in lore" :key="section.id" class="bg-aria-midnight/50 border border-aria-obsidian rounded-xl p-6 shadow-xl relative group">
              <button 
                @click="deleteLoreSection(section.id)" 
                class="absolute top-4 right-4 text-red-400/50 hover:text-red-400 hover:bg-red-900/20 p-2 rounded transition-all opacity-0 group-hover:opacity-100"
                title="Supprimer la section"
              >
                🗑️
              </button>
              
              <div class="space-y-4">
                <div>
                  <label class="block text-aria-gold text-sm font-bold mb-2">Titre</label>
                  <input 
                    v-model="section.title" 
                    type="text" 
                    class="w-full bg-black/30 border border-aria-obsidian rounded p-2 text-xl font-cinzel text-gray-200 focus:border-aria-gold focus:outline-none transition-colors"
                  />
                </div>
                
                <div>
                  <label class="block text-aria-gold text-sm font-bold mb-2">Contenu (HTML supporté)</label>
                  <textarea 
                    v-model="section.content" 
                    rows="6"
                    class="w-full bg-black/30 border border-aria-obsidian rounded p-2 font-mono text-sm text-gray-300 focus:border-aria-gold focus:outline-none transition-colors"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer Actions -->
      <div class="bg-aria-midnight/90 border-t border-aria-obsidian p-4 shadow-2xl z-20 backdrop-blur-md">
        <div class="container mx-auto flex justify-between items-center px-4">
          <div class="text-sm text-aria-glow italic flex items-center gap-2">
            <span v-if="saveMessage" class="animate-pulse">✨</span>
            {{ saveMessage }}
          </div>
          <button 
            @click="saveChanges" 
            class="bg-gradient-to-r from-aria-gold to-aria-dark-gold text-aria-brown font-cinzel font-bold py-3 px-8 rounded-lg border border-aria-gold/50 hover:shadow-lg hover:shadow-aria-gold/20 hover:scale-105 transition-all flex items-center gap-2"
            :disabled="saving"
          >
            <span v-if="saving" class="animate-spin">⚙️</span>
            {{ saving ? 'Incantation...' : 'Sceller le Destin' }}
          </button>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { v4 as uuidv4 } from 'uuid'

const router = useRouter()
const { data: characters, pending: charsPending } = await useFetch('/api/characters')
const { data: scenario, pending: scenPending } = await useFetch('/api/scenario')
const { data: lore, pending: lorePending } = await useFetch('/api/lore')

const pending = computed(() => charsPending.value || scenPending.value || lorePending.value)

// Ensure all characters have IDs for stable rendering
watch(characters, (newChars) => {
  if (newChars) {
    newChars.forEach(char => {
      if (!char.id) char.id = uuidv4()
    })
  }
}, { immediate: true })

// Ensure all scenario nodes have IDs and expanded state
watch(scenario, (newScenario) => {
  if (newScenario) {
    const initNodes = (nodes) => {
      nodes.forEach(node => {
        if (!node.id) node.id = uuidv4()
        if (node.expanded === undefined) node.expanded = false
        if (node.children) initNodes(node.children)
      })
    }
    initNodes(newScenario)
  }
}, { immediate: true })

// Ensure all lore sections have IDs
watch(lore, (newLore) => {
  if (newLore) {
    newLore.forEach(section => {
      if (!section.id) section.id = uuidv4()
    })
  }
}, { immediate: true })

const activeTab = ref('characters')
const selectedNode = ref(null)
const saving = ref(false)
const saveMessage = ref('')

// --- Character Logic ---
const addCharacter = () => {
  characters.value.push({
    id: uuidv4(),
    name: 'Nouveau Personnage',
    archetype: 'Inconnu',
    description: '',
    image: '/images/avatars/default.jpg',
    stats: { str: 10, dex: 10, int: 10 }
  })
}

const deleteCharacter = async (id) => {
  if (confirm('Êtes-vous sûr de vouloir supprimer ce personnage ?')) {
    characters.value = characters.value.filter(c => c.id !== id)
    await saveChanges()
  }
}

// --- Scenario Logic ---
const selectNode = (node) => {
  selectedNode.value = node
}

const addRootNode = () => {
  const newNode = {
    id: uuidv4(),
    title: 'Nouveau Chapitre',
    content: '',
    children: [],
    expanded: true
  }
  scenario.value.push(newNode)
  selectNode(newNode)
}

const addChildNode = (parentNode) => {
  const newNode = {
    id: uuidv4(),
    title: 'Nouvelle Scène',
    content: '',
    children: [],
    expanded: true
  }
  if (!parentNode.children) parentNode.children = []
  parentNode.children.push(newNode)
  parentNode.expanded = true
  selectNode(newNode)
}

const deleteNodeRecursive = (nodes, nodeToDelete) => {
  const index = nodes.indexOf(nodeToDelete)
  if (index > -1) {
    nodes.splice(index, 1)
    return true
  }
  for (const node of nodes) {
    if (node.children && deleteNodeRecursive(node.children, nodeToDelete)) {
      return true
    }
  }
  return false
}

const deleteNode = (node) => {
  if (confirm(`Supprimer "${node.title}" et tout son contenu ?`)) {
    if (selectedNode.value?.id === node.id) {
      selectedNode.value = null
    }
    deleteNodeRecursive(scenario.value, node)
  }
}

const setExpandRecursive = (nodes, expanded) => {
  nodes.forEach(node => {
    node.expanded = expanded
    if (node.children) {
      setExpandRecursive(node.children, expanded)
    }
  })
}

const expandAll = () => {
  setExpandRecursive(scenario.value, true)
}

const collapseAll = () => {
  setExpandRecursive(scenario.value, false)
}

// --- Lore Logic ---
const addLoreSection = () => {
  lore.value.push({
    id: uuidv4(),
    title: 'Nouvelle Section',
    content: '<p>Contenu ici...</p>'
  })
}

const deleteLoreSection = async (id) => {
  if (confirm('Supprimer cette section ?')) {
    lore.value = lore.value.filter(l => l.id !== id)
    await saveChanges()
  }
}

// --- Global Logic ---
const saveChanges = async () => {
  saving.value = true
  saveMessage.value = ''
  
  try {
    await Promise.all([
      $fetch('/api/characters', { method: 'PUT', body: characters.value }),
      $fetch('/api/scenario', { method: 'PUT', body: scenario.value }),
      $fetch('/api/lore', { method: 'PUT', body: lore.value })
    ])
    saveMessage.value = 'Sauvegardé avec succès !'
    setTimeout(() => { saveMessage.value = '' }, 3000)
  } catch (e) {
    saveMessage.value = 'Erreur lors de la sauvegarde.'
    console.error(e)
  } finally {
    saving.value = false
  }
}

const logout = () => {
  if (process.client) {
    localStorage.removeItem('admin_token')
  }
  router.push('/admin')
}

onMounted(() => {
  if (process.client) {
    const token = localStorage.getItem('admin_token')
    if (!token) router.push('/admin')
  }
})

useHead({
  title: 'Aria: Admin Dashboard'
})

definePageMeta({
  layout: false
})
</script>

