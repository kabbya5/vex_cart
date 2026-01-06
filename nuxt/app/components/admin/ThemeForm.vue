<template>
  <div class="space-y-8 p-6">

    <!-- Base Colors -->
    <section class="rounded bg-white p-5 shadow">
      <h2 class="mb-4 text-lg font-semibold">Base Colors</h2>
      <div v-for="field in baseFields" :key="field.label" class="flex items-center gap-4 mb-3">
        <label class="w-44 text-sm font-medium text-gray-700">{{ field.label }}</label>
        <input type="color" v-model="theme[field.key]" class="h-10 w-14 rounded border cursor-pointer" />
        <input type="text" v-model="theme[field.key]" class="w-32 rounded border px-2 py-1 text-sm" />
      </div>
    </section>

    <!-- Navbar -->
    <section class="rounded bg-white p-5 shadow">
      <h2 class="mb-4 text-lg font-semibold">Navbar</h2>
      <div v-for="field in navbarFields" :key="field.label" class="flex items-center gap-4 mb-3">
        <label class="w-44 text-sm font-medium text-gray-700">{{ field.label }}</label>
        <input type="color" v-model="theme[field.key]" class="h-10 w-14 rounded border cursor-pointer" />
        <input type="text" v-model="theme[field.key]" class="w-32 rounded border px-2 py-1 text-sm" />
      </div>
    </section>

    <!-- Sidebar -->
    <section class="rounded bg-white p-5 shadow">
      <h2 class="mb-4 text-lg font-semibold">Sidebar</h2>
      <div v-for="field in sidebarFields" :key="field.label" class="flex items-center gap-4 mb-3">
        <label class="w-44 text-sm font-medium text-gray-700">{{ field.label }}</label>
        <input type="color" v-model="theme[field.key]" class="h-10 w-14 rounded border cursor-pointer" />
        <input type="text" v-model="theme[field.key]" class="w-32 rounded border px-2 py-1 text-sm" />
      </div>
    </section>

    <!-- Primary Button Colors -->
    <section class="rounded bg-white p-5 shadow">
      <h2 class="mb-4 text-lg font-semibold">Primary Button</h2>
      <div v-for="field in buttonPrimaryFields" :key="field.label" class="flex items-center gap-4 mb-3">
        <label class="w-44 text-sm font-medium text-gray-700">{{ field.label }}</label>
        <input type="color" v-model="theme[field.key]" class="h-10 w-14 rounded border cursor-pointer" />
        <input type="text" v-model="theme[field.key]" class="w-32 rounded border px-2 py-1 text-sm" />
      </div>
    </section>

    <!-- Secondary Button Colors -->
    <section class="rounded bg-white p-5 shadow">
      <h2 class="mb-4 text-lg font-semibold">Secondary Button</h2>
      <div v-for="field in buttonSecondaryFields" :key="field.label" class="flex items-center gap-4 mb-3">
        <label class="w-44 text-sm font-medium text-gray-700">{{ field.label }}</label>
        <input type="color" v-model="theme[field.key]" class="h-10 w-14 rounded border cursor-pointer" />
        <input type="text" v-model="theme[field.key]" class="w-32 rounded border px-2 py-1 text-sm" />
      </div>
    </section>

    <!-- Footer -->
    <section class="rounded bg-white p-5 shadow">
      <h2 class="mb-4 text-lg font-semibold">Footer</h2>
      <div v-for="field in footerFields" :key="field.label" class="flex items-center gap-4 mb-3">
        <label class="w-44 text-sm font-medium text-gray-700">{{ field.label }}</label>
        <input type="color" v-model="theme[field.key]" class="h-10 w-14 rounded border cursor-pointer" />
        <input type="text" v-model="theme[field.key]" class="w-32 rounded border px-2 py-1 text-sm" />
      </div>
    </section>

    <!-- Save Button -->
    <button
      class="rounded bg-indigo-600 px-6 py-2 text-white hover:bg-indigo-700"
      @click="saveTheme"
    >
      Save Theme
    </button>

  </div>
</template>

<script setup lang="ts">
import { reactive, watch } from 'vue'

// Theme reactive state
const theme = reactive({
  primary_color: '#f7f7f7',
  secondary_color: '#ffffff',
  accent_color: '#22c55e',
  border_color:'#e5e7eb',

  navbar_bg_color: '#ffffff',
  navbar_text_color: '#0f172a',
  navbar_hover_color: '#4f46e5',
  navbar_active_color: '#4338ca',

  sidebar_bg_color: '#020617',
  sidebar_text_color: '#cbd5f5',
  sidebar_hover_color: '#1e293b',
  sidebar_active_color: '#4f46e5',

  footer_bg_color: '#020617',
  footer_text_color: '#cbd5f5',

  button_primary_bg: '#4f46e5',
  button_primary_text: '#ffffff',
  button_primary_hover: '#4338ca',

  button_secondary_bg: '#e5e7eb', 
  button_secondary_text: '#0f172a',  
  button_secondary_hover: '#d1d5db', 
})

// Fields for v-for loops
const baseFields = [
  { label: 'Primary Color', key: 'primary_color' },
  { label: 'Secondary Color', key: 'secondary_color' },
  { label: 'Accent Color', key: 'accent_color' },
]

const navbarFields = [
  { label: 'Navbar BG', key: 'navbar_bg_color' },
  { label: 'Navbar Text', key: 'navbar_text_color' },
  { label: 'Navbar Hover', key: 'navbar_hover_color' },
  { label: 'Navbar Active', key: 'navbar_active_color' },
]

const sidebarFields = [
  { label: 'Sidebar BG', key: 'sidebar_bg_color' },
  { label: 'Sidebar Text', key: 'sidebar_text_color' },
  { label: 'Sidebar Hover', key: 'sidebar_hover_color' },
  { label: 'Sidebar Active', key: 'sidebar_active_color' },
]

const buttonPrimaryFields = [
  { label: 'Primary Button BG', key: 'button_primary_bg' },
  { label: 'Primary Button Text', key: 'button_primary_text' },
  { label: 'Primary Button Hover', key: 'button_primary_hover' },
]

const buttonSecondaryFields = [
  { label: 'Secondary Button BG', key: 'button_secondary_bg' },
  { label: 'Secondary Button Text', key: 'button_secondary_text' },
  { label: 'Secondary Button Hover', key: 'button_secondary_hover' },
]

const footerFields = [
  { label: 'Footer BG', key: 'footer_bg_color' },
  { label: 'Footer Text', key: 'footer_text_color' },
]

// Watch theme and apply CSS variables for live preview
watch(
  theme,
  () => {
    const root = document.documentElement
    Object.entries(theme).forEach(([key, value]) => {
      const cssVar = '--' + key.replace('_color', '').replaceAll('_', '-')
      root.style.setProperty(cssVar, value)
    })
  },
  { deep: true, immediate: true }
)

// Save theme to backend API
const saveTheme = async () => {
  try {
    const res = await useApiFetch('/themes', {
        method: 'POST', 
        body:{
            name:'Default Theme',
            slgu:'default',
            colors:theme,
        }
    });
    
    if(res){
        console.log(res);
    }
    
  } catch (error) {
    console.error(error)
    alert('Failed to save theme ❌')
  }
}
</script>

