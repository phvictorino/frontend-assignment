<template>
  <div>
    <label class="label">{{label}}</label>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    }
  }
};
</script>

<style>
.label {
  text-transform: uppercase;
  margin-bottom: 5px;
  font-weight: bold;
  color: #b1b1b1;
}
</style>