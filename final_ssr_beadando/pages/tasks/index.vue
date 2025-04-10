<template>
    <v-progress-linear v-if="taskStore.loading" indeterminate></v-progress-linear>

    <v-alert v-if="taskStore.error" type="error">{{ taskStore.error }}</v-alert>

    <v-list>
        <v-list-item v-for="task in taskStore.tasks" :key="task.id">
            <template v-slot:prepend>
                <v-checkbox v-model="task.completed"
                    @update:model-value="() => taskStore.updateTask(task)"></v-checkbox>
            </template>

            <v-list-item-title>{{ task.title }}</v-list-item-title>

            <template v-slot:append>
                <v-btn icon="mdi-information" :to="`/tasks/${task.id}`"></v-btn>
                <div style="width: 16px;"></div>
                <v-btn icon="mdi-delete" @click="taskStore.deleteTask(task.id)">
                </v-btn>
            </template>
        </v-list-item>
    </v-list>

    <v-dialog v-model="dialog" width="500">
        <template v-slot:activator="{ props }">
            <v-btn color="primary" v-bind="props" fab fixed bottom right>
                <v-icon>mdi-plus</v-icon>
            </v-btn>
        </template>

        <v-card>
            <v-card-title>Add New Task</v-card-title>
            <v-card-text>
                <v-text-field v-model="newTask.title" label="Title"></v-text-field>
                <v-textarea v-model="newTask.description" label="Description"></v-textarea>
            </v-card-text>
            <v-card-actions>
                <v-btn @click="dialog = false">Cancel</v-btn>
                <v-btn color="primary" @click="addTask">Save</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useTaskStore } from '@/stores/taskStore'
import type { Task } from '@/stores/taskStore'

const taskStore = useTaskStore()
const dialog = ref(false)
const newTask = ref<Omit<Task, 'id'>>({
    title: '',
    description: '',
    completed: false
})

const addTask = () => {
    if (newTask.value.title.trim()) {
        taskStore.addTask(newTask.value)
        dialog.value = false
        newTask.value = { title: '', description: '', completed: false }
    }
}
</script>