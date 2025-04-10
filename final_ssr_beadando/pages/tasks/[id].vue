<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="8" offset-md="2">
                <v-card v-if="task">
                    <v-card-title>{{ task.title }}</v-card-title>
                    <v-card-subtitle>{{ task.completed ? 'Completed' : 'Pending' }}</v-card-subtitle>
                    <v-card-text>{{ task.description }}</v-card-text>
                    <v-card-actions>
                        <v-btn @click="$router.back()">Back</v-btn>
                    </v-card-actions>
                </v-card>

                <v-alert v-else type="warning">Task not found</v-alert>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useTaskStore } from '@/stores/taskStore'
import type { Task } from '@/stores/taskStore'

const route = useRoute()

const id = route.params.id

const taskStore = useTaskStore()


const task = computed<Task | undefined>(() =>
    taskStore.tasks.find(t => t.id === id)
)

</script>