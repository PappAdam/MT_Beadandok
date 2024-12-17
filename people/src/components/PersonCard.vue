<template>
  <div class="card" @click="navigateToDetails">
    <img :src="person.avatar" />
    <h1>{{ person.first_name + " " + person.last_name }}</h1>
    <p>{{ person.email }}</p>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
  person: {
    type: Object,
    required: true
  },
})

const router = useRouter()
function navigateToDetails() {
  router.push({ name: 'ContactView', params: { id: props.person.id } })
}
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 15px;
  border: 1px solid #DDD;
  border-radius: 4px;

  cursor: pointer;
  transition: all 0.15s ease;
}

.card:hover {
  background-color: #DDD;
}

.card img {
  width: 100%;
  border-radius: 3px;
}

h1 {
  margin: 0;
}

p {
  margin: 0.25rem 0 0;
  color: #555;
}
</style>
