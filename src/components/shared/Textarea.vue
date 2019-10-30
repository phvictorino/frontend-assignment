<template>
  <div class="group">
    <CustomLabel :label="label" />
    <textarea
      v-bind="$props"
      class="textarea"
      @click.stop="$emit('click')"
      :readonly="readonly"
      v-on="$listeners"
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
    readonly: {
      type: Boolean,
      default: false
    },
    rows: {
      type: String,
      default: "4"
    },
    value: {
      type: String,
      default: ''
    }
  },
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