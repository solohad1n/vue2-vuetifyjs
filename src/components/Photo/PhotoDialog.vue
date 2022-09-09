<template>
  <div>
    <v-dialog v-model="dialogVisible" scrollable max-width="600">
      <v-card>
        <v-card-title>{{ full_title }}</v-card-title>
        <v-card-text>
          <v-img :src="photo.url" />
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: ["photo", "value"],
  data() {
    return {
      dialogVisible: false,
    };
  },
  created() {
    this.dialogVisible = this.value;
  },
  watch: {
    value(newValue) {
      this.dialogVisible = newValue;
    },
    dialogVisible(newValue) {
      this.$emit("input", newValue);
    },
  },
  computed: {
    full_title() {
      return `Название фотографии: ${this.photo.title}`;
    },
  },
};
</script>

<style>
</style>