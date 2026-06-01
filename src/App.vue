<template>
  <div>
    <nav>
      <router-link to="/">Главная</router-link>
      <router-link to="/api">API</router-link>
      <router-link to="/form">Форма</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script setup>
</script>

<style scoped>
nav {
  padding: 20px;
  background-color: #f5f5f5;
}
nav a {
  margin-right: 20px;
  color: #42b983;
  text-decoration: none;
}
nav a.router-link-active {
  font-weight: bold;
}
</style>