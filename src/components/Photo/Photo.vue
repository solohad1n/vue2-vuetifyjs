<template>
  <v-col cols="4">
    <v-card @click="openPhoto">
      <v-card-title>
        {{ photo.title.substring(0, 40) + "..." }}
      </v-card-title>
      <v-card-text>
        <v-img :src="photo.url" width="200" height="200" />
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
export default {
  props: ["photo"],
  methods: {
    openPhoto() {
      this.$emit("openPhoto", this.photo);
    },
  },
};
</script>

<style>
</style>