<template>
  <div>
    <v-app-bar color="red" dark>
      <v-btn outlined class="ml-3" color="white">
        <router-link to="/" style="color: white">Главная</router-link>
      </v-btn>
      <v-spacer />
      <v-btn outlined class="ml-3">
        <router-link to="/photo" style="color: white"> Фото </router-link>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {};
</script>

<style>
.v-application a {
  text-decoration: none;
}
</style>