<template>
  <div class="group">
    <CustomLabel :label="label" />
    <textarea
      v-bind="$props"
      class="textarea"
    />
    </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    rows: {
      type: String,
      default: "4"
    }
  }
};
</script>

<style scoped>
.group {
  margin-top: 25px;
}

.textarea {
  width: 100%;
  border: 1px solid #d8d9dd;
  box-shadow: 0px 0px 5px 1px #d8d9dd;
  padding: 15px;
  border-radius: 5px;
  margin-top: 10px;
}
</style>