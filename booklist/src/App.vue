<script setup lang="ts">
import Header from "./components/Header.vue";
import BookView from "./components/BookView.vue";
import books from "./assets/book_data.json";
import { ref } from "vue";
import { ViewType } from "./types";

const view_type = ref(ViewType.Card);
</script>

<template>
    <Header @toggle-view="() => (view_type = Math.abs(view_type - 1))"></Header>
    <BookView :books="books" :view_type="view_type"></BookView>
</template>

<style scoped></style>
