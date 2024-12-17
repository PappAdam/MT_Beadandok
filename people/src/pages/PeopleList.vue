<template>
  <button id="sort" @click="ascending = !ascending">
    <p>Sorting:
      {{ ascending ? 'a->z' : 'z->a' }}
    </p>
  </button>

  <div class="people-list">
    <PersonCard class="card" v-for="person in sortedPeople" :key="person.id" :person="person"></PersonCard>
  </div>
</template>


<script setup>
import PersonCard from '@/components/PersonCard.vue';
import { ref, computed } from 'vue';
import peopleData from '../peopledata';
const ascending = ref(true);

const sortedPeople = computed(() => {
  return peopleData.slice().sort((a, b) => {
    const aName = a['first_name'];
    const bName = b['first_name'];
    return ascending.value
      ? aName.localeCompare(bName)
      : bName.localeCompare(aName);
  });
});
</script>

<style scoped>
#sort {
  margin-left: 20px;
  margin-bottom: 20px;
  padding: 10px;
}

.people-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
}

.card {
  min-width: 300px;
  max-width: 500px;
  flex: 1;
}
</style>
