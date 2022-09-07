<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  initialCount?: number
  interval?: number
}
const props = withDefaults(defineProps<Props>(), {
  initialCount: 60,
  interval: 1000,
})

const { initialCount, interval } = props
const counter = ref(initialCount)
let timer: number

timer = setInterval(() => {
  if (counter.value <= 0) {
    counter.value = initialCount
    return clearInterval(timer)
  }
  counter.value -= 1
}, interval)
</script>

<template>
  <button>{{ counter }}</button>
</template>
