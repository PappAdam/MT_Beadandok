<script setup lang="ts">
import { IBook } from "../../types";

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
    background-color: var(--bg);
    border: 2px solid var(--light-green);
    display: block;
    border-radius: 10px;
}
th,
td {
    padding: 10px;
    text-align: left;
}
th {
    background-color: var(--dark);
    color: #fff;
}

tbody tr:nth-child(odd) {
    background-color: var(--bg);
}
tbody tr:nth-child(even) {
    background-color: var(--dark);
}

th:first-of-type {
    border-top-left-radius: 10px;
}
th:last-of-type {
    border-top-right-radius: 10px;
}
tr:last-of-type td:first-of-type {
    border-bottom-left-radius: 10px;
}
tr:last-of-type td:last-of-type {
    border-bottom-right-radius: 10px;
}
</style>
