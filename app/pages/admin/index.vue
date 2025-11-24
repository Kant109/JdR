<template>
  <div class="container mx-auto px-4 py-20 flex justify-center">
    <div class="bg-aria-parchment p-8 rounded-lg shadow-xl border-2 border-aria-gold max-w-md w-full">
      <h1 class="text-3xl font-cinzel text-center text-aria-blue mb-8">Accès Maître du Jeu</h1>
      
      <form @submit.prevent="handleLogin" class="space-y-6">
        <div>
          <label class="block text-aria-brown font-bold mb-2">Mot de passe</label>
          <input 
            v-model="password" 
            type="password" 
            class="w-full p-3 rounded border border-aria-dark-gold bg-white/50 focus:outline-none focus:border-aria-blue"
            placeholder="Entrez le mot de passe..."
          />
        </div>

        <div v-if="error" class="text-red-600 text-center font-bold">
          {{ error }}
        </div>

        <button 
          type="submit" 
          class="w-full bg-aria-blue text-aria-parchment font-cinzel font-bold py-3 rounded hover:bg-aria-sea transition-colors"
        >
          Se Connecter
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
const password = ref('')
const error = ref('')
const router = useRouter()

const handleLogin = async () => {
  try {
    const { token } = await $fetch('/api/login', {
      method: 'POST',
      body: { password: password.value }
    })
    
    // Store token (in a real app, use a cookie or state management)
    if (process.client) {
      localStorage.setItem('admin_token', token)
    }
    
    router.push('/admin/dashboard')
  } catch (e) {
    error.value = 'Mot de passe incorrect'
  }
}

useHead({
  title: 'Aria: Brise-Écume - Admin'
})
</script>
