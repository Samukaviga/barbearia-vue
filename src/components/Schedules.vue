<template>
  <div class="w-full flex flex-col items-center justify-center text-white font-sans space-y-6 p-4">
    <!-- Container com scroll horizontal -->
    <div ref="scrollContainer"
      class="flex overflow-x-auto flex-nowrap space-x-3 w-full max-w-md scrollbar-hide cursor-grab select-none"
      @mousedown="startDrag" @mousemove="onDrag" @mouseup="stopDrag" @mouseleave="stopDrag">
      <div v-for="(day, i) in days" :key="i" :class="[
        'rounded-lg px-4 py-3 text-center w-16 flex-shrink-0 transition-all duration-150',
        day.active ? 'bg-yellow-500 text-black' : 'bg-gray-800 text-white',
      ]" @click="selectDay(day)">
        <p class="text-xs" :class="day.active ? 'font-semibold' : 'text-gray-400'">{{ day.label }}</p>
        <p class="text-lg font-semibold">{{ day.number }}</p>
      </div>
    </div>

    <!-- Cards -->
    <div class="flex space-x-6">
      <div class="bg-gray-900 rounded-lg px-6 py-4 text-center">
        <p class="text-yellow-400 text-2xl font-semibold">2</p>
        <p class="text-sm text-gray-400">Agendamentos</p>
      </div>
      <div class="bg-gray-900 rounded-lg px-6 py-4 text-center">
        <p class="text-yellow-400 text-2xl font-semibold">R$ 75,00</p>
        <p class="text-sm text-gray-400">Faturamento</p>
      </div>
    </div>
  </div>

  <div class="flex flex-col items-center gap-3 w-full p-2">

    <!-- Card -->
    <div class="bg-gray-900 text-white rounded-xl p-4 flex justify-between items-center w-full max-w-md  ">
      <!-- Esquerda -->
      <div class="flex flex-col space-y-2">
        <!-- Horário -->
        <div class="flex items-center space-x-2">
          <div class="bg-gray-700 text-gray-200 text-sm px-2 py-1 rounded-md flex items-center space-x-1">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-yellow-400" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>11:00 - 11:45</span>
          </div>
        </div>

        <!-- Nome e serviço -->
        <div>
          <p class="font-semibold text-yellow-400">William</p>
          <p class="text-sm text-gray-400">Cabelo e Barba</p>
        </div>
      </div>

      <!-- Direita -->
      <div class="flex flex-col items-end space-y-1">
        <!-- Ícone WhatsApp -->
        <a href="#" class="text-green-500">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M20.52 3.48A11.77 11.77 0 0012 0a11.78 11.78 0 00-8.36 3.48A11.78 11.78 0 000 12c0 2.1.55 4.14 1.6 5.94L0 24l6.2-1.6A11.8 11.8 0 0012 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22a9.8 9.8 0 01-4.98-1.35l-.35-.2-3.68.95.98-3.6-.23-.37A9.81 9.81 0 012.2 12C2.2 6.64 6.64 2.2 12 2.2c2.63 0 5.1 1.03 6.96 2.9A9.78 9.78 0 0121.8 12c0 5.36-4.44 9.8-9.8 9.8zm4.66-7.53c-.25-.13-1.48-.73-1.7-.81-.23-.08-.4-.13-.57.13s-.66.81-.81.98-.3.19-.55.06c-.25-.13-1.06-.39-2.02-1.23-.75-.67-1.26-1.49-1.4-1.74-.15-.25-.02-.38.11-.5.12-.12.25-.3.37-.45.12-.15.16-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.57-1.38-.78-1.89-.2-.48-.41-.42-.57-.43l-.49-.01c-.17 0-.44.06-.68.31-.23.25-.9.88-.9 2.13s.92 2.47 1.05 2.64c.13.17 1.82 2.78 4.4 3.9.62.27 1.1.43 1.48.55.62.2 1.18.17 1.62.1.49-.07 1.48-.6 1.69-1.17.21-.57.21-1.05.15-1.17-.06-.12-.23-.19-.48-.32z" />
          </svg>
        </a>

        <!-- Valor e tempo -->
        <div class="text-right">
          <p class="font-semibold text-gray-100">R$ 50,00</p>
          <p class="text-xs text-gray-400">45 min</p>
        </div>
      </div>
    </div>
    <!-- End Card -->

       <!-- Card -->
    <div class="bg-gray-900 text-white rounded-xl p-4 flex justify-between items-center w-full max-w-md  ">
      <!-- Esquerda -->
      <div class="flex flex-col space-y-2">
        <!-- Horário -->
        <div class="flex items-center space-x-2">
          <div class="bg-gray-700 text-gray-200 text-sm px-2 py-1 rounded-md flex items-center space-x-1">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-yellow-400" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>11:00 - 11:45</span>
          </div>
        </div>

        <!-- Nome e serviço -->
        <div>
          <p class="font-semibold text-yellow-400">Samuel</p>
          <p class="text-sm text-gray-400">Cabelo e Barba</p>
        </div>
      </div>

      <!-- Direita -->
      <div class="flex flex-col items-end space-y-1">
        <!-- Ícone WhatsApp -->
        <a href="#" class="text-green-500">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M20.52 3.48A11.77 11.77 0 0012 0a11.78 11.78 0 00-8.36 3.48A11.78 11.78 0 000 12c0 2.1.55 4.14 1.6 5.94L0 24l6.2-1.6A11.8 11.8 0 0012 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22a9.8 9.8 0 01-4.98-1.35l-.35-.2-3.68.95.98-3.6-.23-.37A9.81 9.81 0 012.2 12C2.2 6.64 6.64 2.2 12 2.2c2.63 0 5.1 1.03 6.96 2.9A9.78 9.78 0 0121.8 12c0 5.36-4.44 9.8-9.8 9.8zm4.66-7.53c-.25-.13-1.48-.73-1.7-.81-.23-.08-.4-.13-.57.13s-.66.81-.81.98-.3.19-.55.06c-.25-.13-1.06-.39-2.02-1.23-.75-.67-1.26-1.49-1.4-1.74-.15-.25-.02-.38.11-.5.12-.12.25-.3.37-.45.12-.15.16-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.57-1.38-.78-1.89-.2-.48-.41-.42-.57-.43l-.49-.01c-.17 0-.44.06-.68.31-.23.25-.9.88-.9 2.13s.92 2.47 1.05 2.64c.13.17 1.82 2.78 4.4 3.9.62.27 1.1.43 1.48.55.62.2 1.18.17 1.62.1.49-.07 1.48-.6 1.69-1.17.21-.57.21-1.05.15-1.17-.06-.12-.23-.19-.48-.32z" />
          </svg>
        </a>

        <!-- Valor e tempo -->
        <div class="text-right">
          <p class="font-semibold text-gray-100">R$ 50,00</p>
          <p class="text-xs text-gray-400">45 min</p>
        </div>
      </div>
    </div>
    <!-- End Card -->

  </div>




</template>

<script setup>

import { reactive, ref } from 'vue'

const days = reactive([
  { label: 'SEX', number: 22, active: false },
  { label: 'SÁB', number: 23, active: false },
  { label: 'DOM', number: 24, active: true },
  { label: 'SEG', number: 25, active: false },
  { label: 'TER', number: 26, active: false },
  { label: 'QUA', number: 27, active: false },
  { label: 'QUI', number: 28, active: false },
])

const scrollContainer = ref(null)
let isDown = false
let startX
let scrollLeft


function selectDay(item) {


  days.forEach(day => {

    if (day.number == item.number) { day.active = true } else { day.active = false }

  });

}

function startDrag(e) {
  isDown = true
  scrollContainer.value.classList.add('cursor-grabbing')
  startX = e.pageX - scrollContainer.value.offsetLeft
  scrollLeft = scrollContainer.value.scrollLeft
}

function stopDrag() {
  isDown = false
  scrollContainer.value.classList.remove('cursor-grabbing')
}

function onDrag(e) {
  if (!isDown) return
  e.preventDefault()
  const x = e.pageX - scrollContainer.value.offsetLeft
  const walk = (x - startX) * 2
  scrollContainer.value.scrollLeft = scrollLeft - walk
}
</script>

<style>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
