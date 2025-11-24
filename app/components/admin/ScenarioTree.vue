<template>
  <ul class="pl-4 border-l border-aria-obsidian/50 space-y-1">
    <li v-for="node in nodes" :key="node.id" class="relative">
      <div 
        class="flex items-center gap-2 p-2 rounded cursor-pointer transition-all duration-200 group"
        :class="[
          selectedId === node.id 
            ? 'bg-aria-mystic/20 text-aria-gold border border-aria-mystic/30 shadow-lg shadow-aria-mystic/10' 
            : 'text-gray-400 hover:bg-white/5 hover:text-gray-200 border border-transparent'
        ]"
        @click.stop="$emit('select', node)"
      >
        <!-- Toggle Button -->
        <button 
          v-if="node.children && node.children.length" 
          @click.stop="toggleExpand(node)"
          class="w-5 h-5 flex items-center justify-center rounded hover:bg-white/10 text-gray-500 hover:text-aria-gold transition-colors"
        >
          <span class="text-[10px] transform transition-transform duration-200" :class="{ 'rotate-90': isExpanded(node) }">▶</span>
        </button>
        <span v-else class="w-5 h-5"></span>

        <!-- Icon -->
        <span class="text-sm opacity-70 group-hover:opacity-100 transition-opacity">
          {{ node.children && node.children.length ? '📁' : '📄' }}
        </span>

        <!-- Title -->
        <span class="text-sm font-cinzel truncate flex-grow">{{ node.title }}</span>

        <!-- Actions (Hover) -->
        <div class="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <button 
            @click.stop="$emit('add-child', node)"
            class="w-6 h-6 flex items-center justify-center rounded bg-green-900/30 text-green-400 hover:bg-green-900/50 border border-green-500/20"
            title="Ajouter une sous-scène"
          >
            +
          </button>
          <button 
            @click.stop="$emit('delete', node)"
            class="w-6 h-6 flex items-center justify-center rounded bg-red-900/30 text-red-400 hover:bg-red-900/50 border border-red-500/20"
            title="Supprimer"
          >
            ×
          </button>
        </div>
      </div>

      <!-- Children -->
      <div v-if="isExpanded(node) && node.children" class="overflow-hidden transition-all duration-300">
        <AdminScenarioTree 
          :nodes="node.children" 
          :selected-id="selectedId"
          @select="$emit('select', $event)"
          @add-child="$emit('add-child', $event)"
          @delete="$emit('delete', $event)"
        />
      </div>
    </li>
  </ul>
</template>

<script setup>
import { ref, watch } from 'vue'

defineOptions({
  name: 'AdminScenarioTree'
})

const props = defineProps({
  nodes: {
    type: Array,
    required: true
  },
  selectedId: {
    type: String,
    default: null
  }
})

const emit = defineEmits(['select', 'add-child', 'delete'])

// Use a reactive map to track expansion state
const expandedState = ref(new Map())

// Initialize expansion state from nodes
watch(() => props.nodes, (nodes) => {
  const initExpanded = (nodeList) => {
    nodeList.forEach(node => {
      if (!expandedState.value.has(node.id)) {
        expandedState.value.set(node.id, node.expanded || false)
      }
      if (node.children) {
        initExpanded(node.children)
      }
    })
  }
  initExpanded(nodes)
}, { immediate: true, deep: true })

const toggleExpand = (node) => {
  const currentState = expandedState.value.get(node.id) || false
  expandedState.value.set(node.id, !currentState)
  node.expanded = !currentState
}

const isExpanded = (node) => {
  return expandedState.value.get(node.id) || false
}
</script>
