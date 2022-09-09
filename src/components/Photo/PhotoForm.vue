<template>
  <v-container>
    <v-row class="d-flex">
      <v-text-field
        v-model="title"
        label="Напишите заголовок:"
        outlined
        dense
      />
      <v-file-input
        v-model="img"
        label="Загрузите картинку:"
        outlined
        dense
        prepend-icon="mdi-camera"
        class="ml-10"
      />
      <v-btn class="ml-5" @click="addPhoto">Добавить</v-btn>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      img: null,
    };
  },
  methods: {
    addPhoto() {
      const reader = new FileReader();
      reader.onload = () => {
        let photo = {
          id: Date.now(),
          title: this.title,
          url: reader.result,
        };
        this.$emit("addPhoto", photo);
        this.title = "";
        this.img = null;
      };
      reader.readAsDataURL(this.img);
    },
  },
};
</script>

<style>
</style>