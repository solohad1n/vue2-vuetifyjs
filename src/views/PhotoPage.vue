<template>
  <v-container fluid>
    <PhotoForm v-if="photos.length < 14" class="mt-6" @addPhoto="addPhoto" />
    <div v-else>Вы не можете добавить больше фото!</div>
    <v-row>
      <Photo
        v-for="photo in photos"
        :key="photo.id"
        :photo="photo"
        @openPhoto="openPhoto"
      />
    </v-row>
    <PhotoDialog :photo="currentPhoto" v-model="dialogVisible" />
  </v-container>
</template>

<script>
import Photo from "@/components/Photo/Photo.vue";
import PhotoForm from "@/components/Photo/PhotoForm.vue";
import PhotoDialog from "@/components/Photo/PhotoDialog.vue";
export default {
  components: { Photo, PhotoForm, PhotoDialog },
  data() {
    return {
      photos: [],
      currentPhoto: {},
      dialogVisible: false,
    };
  },
  mounted() {
    this.fetchTodo();
  },
  methods: {
    fetchTodo() {
      this.axios
        .get("https://jsonplaceholder.typicode.com/photos?_limit=12")
        .then((response) => (this.photos = response.data));
    },
    addPhoto(photo) {
      this.photos.push(photo);
    },
    openPhoto(photo) {
      this.currentPhoto = photo;
      this.dialogVisible = true;
    },
  },
};
</script>

<style>
</style>