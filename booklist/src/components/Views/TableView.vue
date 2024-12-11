<script setup lang="ts">
import type { IBook } from "@/types";

defineProps<{
    content: IBook[];
}>();
</script>

<template>
    <table>
        <thead>
            <tr>
                <th>author</th>
                <th>title</th>
                <th>description</th>
                <th>image</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="b in content">
                <td>{{ b.author }}</td>
                <td>{{ b.title }}</td>
                <td>{{ b.description }}</td>
                <td>
                    <img :src="b.img_url" :title="b.title" :alt="b.title" />
                </td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped>
table {
    border-collapse: collapse;
}

td,
th {
    padding: 10px;
}

th {
    background-color: var(--cyan);
}
</style>
