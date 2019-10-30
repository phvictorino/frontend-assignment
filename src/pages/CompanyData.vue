<template>
  <div>
    <Card class="card">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lorem tortor, ullamcorper nec mi in, molestie dignissim mi. Nunc nec dictum lectus, sed pulvinar lacus.
      </p>
      <CustomInput
        :rule="required"
        v-model="name"
        label="Company Name"
        placeholder="e.g. Your Company Name"
      />
      <CustomInput
        :rule="greatherThanZero"
        v-model.number="spend"
        label="Company Spend"
        placeholder="e.g. $1500,000"
        type="float"
      />
      <CustomInput
        :error-message="validateSpendAbility"
        v-model="spendAbilityMin"
        label="Company Spend Ability Min"
        placeholder="e.g. $1500,000"
        type="float"
      />
      <CustomInput
        :error-message="validateSpendAbility"
        v-model="spendAbilityMax"
        label="Company Spend Ability Max"
        placeholder="e.g. $330,000"
        type="float"
      />
      <TextareaModal
        label="Notes"
        placeholder="e.g. $1500,000 - $330,000"
        v-model="notes"
      />
    </Card>
  </div>
</template>

<script>
export default {
  data: () => ({
      name: "",
      spend: "",
      spendAbilityMin: "",
      spendAbilityMax: "",
      notes: '',
      required: value => !!value || "This field is required.",
      greatherThanZero: value =>
        (!!value && value > 0) || "This field needs to be greater than zero."
  }),
  computed: {
    validateSpendAbility() {
      if (this.spendAbilityMin && this.spendAbilityMax) {
        return this.spendAbilityMin < this.spendAbilityMax
          ? null
          : "Spend Ability Min needs to be greater than Spend Ability Max";
      }
      return null;
    }
  },
  watch: {
    notes(value) {
      console.log(value)
    }
  }
};
</script>

<style scoped>
.card {
  padding: 20px;  
}
.actions {
  display: flex;
  flex: 1;
  justify-content: flex-end;
}
</style>