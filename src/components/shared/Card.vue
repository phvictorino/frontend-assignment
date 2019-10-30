<template>
  <div class="card">
    <div
      class="title"
      v-if="hasTitle"
    >
      {{title}}
    </div>
    <Divider v-if="hasTitle" />
    <div class="body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: null
    }
  },
  computed: {
    hasTitle() {
      return !!this.title;
    }
  }
};
</script>

<style scoped>
.card {
  border: 1px solid #d8d9dd;
  border-radius: 5px;
}

.title {
  padding: 20px 15px;
  font-size: 12px;
  color: grey;
  font-weight: bold;
}
</style>