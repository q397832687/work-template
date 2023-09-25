// HelloWorld.vue
<script setup lang="ts">
import { ref } from 'vue';

defineProps<{ msg: string }>();

const count = ref(0);
</script>

<template>
  <h1>{{ msg }}</h1>

  <p>
    Recommended IDE setup:
    <el-link type="danger" href="https://code.visualstudio.com/" target="_blank"
      >VSCode</el-link
    >
    +
    <el-link
      type="primary"
      href="https://github.com/johnsoncodehk/volar/"
      target="_blank"
      >Volar</el-link
    >
  </p>

  <p>See <code>README.md</code> for more information.</p>

  <p>
    <el-link
      type="success"
      href="https://vitejs.dev/guide/features.html"
      target="_blank"
    >
      Vite Docs
    </el-link>
    |
    <el-link type="success" href="https://v3.vuejs.org/" target="_blank"
      >Vue 3 Docs</el-link
    >
  </p>
  <el-button type="primary" @click="count++">count is: {{ count }}</el-button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
