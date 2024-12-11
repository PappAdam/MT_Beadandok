<script setup lang="ts">
import type { IBook } from "@/types";

defineProps<{
    content: IBook[];
}>();
</script>

<template>
    <div class="card-container">
        <div v-for="b in content" class="card">
            <div>
                <h1>{{ b.title }}</h1>
                <h2>{{ b.author }}</h2>
            </div>
            <div>
                <p>{{ b.description }}</p>
                <img :src="b.img_url" :alt="b.title" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.card-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    flex-direction: row;
    align-items: center;
}

.card {
    display: flex;
    background-color: var(--dark);
    width: 400px;
    height: 400px;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 0;
    border-radius: 8px;
    box-shadow: 0px 0px 5px rgb(22, 22, 22);
}

.card div {
    width: 100%;
    text-align: center;
}

p {
    margin: 0;
    color: var(--cyan);
    font-weight: lighter;
}

img {
    width: 80%;
    box-shadow: 0px 0px 5px rgb(22, 22, 22);
}
</style>
