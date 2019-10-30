<template>
  <div>
    <img :src="getImage">
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  },
  computed: {
    getImage() {
      return require('Images/icons/' + this.name + '.png')
    }
  }
};
</script>

<style>
</style>