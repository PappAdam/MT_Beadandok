<template>
  <v-app>
    <v-app-bar color="primary">
      <v-toolbar-title>Task Manager</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn to="/">Home</v-btn>
    </v-app-bar>

    <v-main>
      <Nuxt-page />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { useTaskStore } from '@/stores/taskStore'

const taskStore = useTaskStore()
useAsyncData('tasks', () => taskStore.fetchTasks())
</script>