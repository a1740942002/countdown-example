<script setup lang="ts">
import CountDownButton from './components/CountDownButton.vue'
import CountDownInput from './components/CountDownInput.vue'
</script>

<template>
  <div id="counter">
    <div id="app1" class="app">
      <h1>App 1</h1>
      <CountDownButton />
    </div>
    <div id="app2" class="app">
      <h1>App 2</h1>
      <CountDownButton :initial-count="30" :interval="500" />
    </div>
    <div id="app3" class="app">
      <h1>App 3</h1>
      <CountDownInput />
    </div>
  </div>
</template>

<style>
#counter {
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: space-around;
}

button,
input {
  font-size: 40px;
  min-width: 150px;
}

.app {
  border: 2px solid red;
  padding: 12px;
}
</style>
