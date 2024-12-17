<template>
    <div class="card" @click="navigateToDetails">
        <img :src="person.avatar" />
        <h1>{{ person.first_name + " " + person.last_name }}</h1>
        <p>{{ person.email }}</p>
        <button @click="prev">Previous Page</button>
    </div>
</template>

<script setup>
const props = defineProps({
    id: {
        type: Number,
        required: true
    }
});
import { computed } from 'vue';
import peopleData from '../peopledata';

const person = computed(() => peopleData.find(p => p.id == props.id))

const prev = () => {
    window.history.back();
}
</script>

<style scoped>
.card {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 300px;
    margin: auto;

    padding: 15px;
    border: 1px solid #DDD;
    border-radius: 4px;
}

.card img {
    width: 100%;
    border-radius: 3px;
}

h1 {
    margin: 0;
}

p {
    margin: 0.25rem 0 12px;
    color: gray;
}
</style>
