<template>
  <div class="page">
    <h1>Форма отправки</h1>
    <div>
      <label for="first_name">Имя</label>
      <input 
        type="text" 
        id="first_name" 
        v-model="store.firstname"
        placeholder="Введите ваше имя" 
      />
    </div>
    <div>
      <label for="second_name">Фамилия</label>
      <input 
        type="text" 
        id="second_name" 
        v-model="store.secondname"
        placeholder="Введите вашу фамилию" 
      />
    </div>
    <button @click="store.sendmessage()">Отправить</button>
    <p v-if="store.sent">Данные отправлены!</p>
  </div>
</template>

<script setup>
import { useCounterStore } from '@/store/store'

const store = useCounterStore()
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
div {
  margin-bottom: 15px;
}
label {
  display: block;
  margin-bottom: 5px;
}
input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  max-width: 300px;
}
button {
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background-color: #359d6f;
}
</style>