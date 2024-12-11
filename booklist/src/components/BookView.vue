<script setup lang="ts">
import { IBook, ViewType } from "../types";
import CardView from "./Views/CardView.vue";
import TableView from "./Views/TableView.vue";

defineProps<{
    books: IBook[];
    view_type: ViewType;
}>();
</script>

<template>
    <main>
        <TableView v-if="view_type" :content="books"></TableView>
        <CardView v-else :content="books"></CardView>
    </main>
</template>

<style scoped>
main {
    width: 80%;
}
</style>
