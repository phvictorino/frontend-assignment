<template>
  <div>
    <CustomTextarea :readonly="true" v-bind="$props" :value="value" @click="modal = true"/>
    <Modal v-model="modal">
      <template slot="body">
        <CustomTextarea v-bind="$props" :value="value" @input="inputModal"/>
      </template>
    </Modal>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
  },
  data: () => ({
    modal: false,
    valueData: '',
  }),
  methods: {
    inputModal(event) {
      this.$emit('input', event.target.value)
    }
  }
}
</script>

<style>

</style>