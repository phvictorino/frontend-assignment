<template>
  <div class="group">
    <CustomLabel :label="label" />
    <input
      class="input"
      v-bind="$props"
      :value="value"
      @input="emit"
      @blur="validate"
    />
    <span class="error-message">{{error}}</span>
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
    type: {
      type: String,
      default: ""
    },
    value: {
      type: [String, Number],
      default: ""
    },
    rule: {
      type: Function,
      default: () => {}
    },
    errorMessage: {
      type: String,
      default: ""
    }
  },
  data: () => ({
    error: ""
  }),
  watch: {
    errorMessage(value) {
      if (value) {
        this.error = value;
      }
    }
  },
  methods: {
    emit(event) {
      let value = event.target.value;
      if (!!value && this.type === "float") {
        value = parseFloat(value);
      }
      this.$emit("input", value);
    },
    validate(event) {
      if (this.rule && !this.errorMessage) {
        const result = this.rule(event.target.value);
        this.error = typeof result === "string" ? result : null;
      } else {
        this.error = this.errorMessage;
      }
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