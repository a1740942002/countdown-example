<script setup lang="ts">
import { useCountDown } from '../composable'

const { counter } = useCountDown()
// const { counter } = useCountDown({ immediate: false })
</script>

<template>
  <input :placeholder="String(counter)" />
</template>
