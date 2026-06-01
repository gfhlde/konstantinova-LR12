<template>
  <div class="page">
    <h1>Данные с API</h1>
    <p v-if="store.loading">Загрузка...</p>
    <ul v-else>
      <li v-for="item in store.fetchdata" :key="item.id">
        {{ item.name }} - {{ item.email }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useCounterStore } from '@/store/store'
import { onMounted } from 'vue'

const store = useCounterStore()

// Загружаем данные при монтировании компонента
onMounted(() => {
  store.getApidata()
})
</script>

<style scoped>
.page {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}
h1 {
  color: #42b983;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  padding: 10px;
  border-bottom: 1px solid #eee;
}
</style>