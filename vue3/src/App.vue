<script setup lang="ts">
import CountDownButton from './components/CountDownButton.vue'
import CountDownInput from './components/CountDownInput.vue'
</script>

<template>
  <CountDownButton />
  <CountDownButton :initial-count="30" :interval="500" />
  <CountDownInput />
</template>
