<template>
  <div class="group">
    <CustomLabel :label="label" />
    <input
      class="input"
      v-bind="$props"
      :value="value"
      @input="emit"
    />
    <span class="error-message">{{errorMessage}}</span>
  </div>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: ""
    },
    value: {
      type: [String, Number],
      default: ""
    },
    errorMessage: {
      type: String,
      default: ""
    }
  },
  methods: {
    emit(event) {
      this.$emit("input", event.target.value);
    }
  }
};
</script>

<style scoped>
.group {
  margin-top: 25px;
  width: 100%;
}

.group > * {
  display: block;
}

.input {
  appearance: none;
  margin-top: 10px;
  border: 1px solid #d8d9dd;
  box-shadow: 0px 0px 5px 1px #d8d9dd;
  padding: 15px;
  border-radius: 5px;
  width: 100%;
}

.input::placeholder {
  color: #b1b1b1;
}

.error-message {
  margin-top: 5px;
  font-size: 12px;
  color: red;
}
</style>