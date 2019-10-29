<template>
  <div>
    <Card>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lorem tortor, ullamcorper nec mi in, molestie dignissim mi. Nunc nec dictum lectus, sed pulvinar lacus.
      </p>
      <CustomInput :error-message="validateName" v-model="name" label="Company Name" placeholder="e.g. Your Company Name"/>
      <CustomInput :error-message="validateSpend" v-model.number="spend" label="Company Spend" placeholder="e.g. $1500,000"/>
      <CustomInput :error-message="validateSpendAbility" v-model="spendAbility" label="Company Spend Ability" placeholder="e.g. $1500,000 - $330,000"/>
      <CustomTextarea label="Notes" placeholder="e.g. $1500,000 - $330,000"/>
      
    </Card>
  </div>
</template>

<script>
export default {
  data: () => ({
    name: '',
    spend: '',
    spendAbility: ''
  }),
  computed: {
    validateName() {
      return !!this.name ? null : "This field is required."
    },
    validateSpend() {
      return !!this.spend && this.spend > 0 ? null : "This field need be greater than 0 (positive)."
    },
    validateSpendAbility() {
      return !!this.spendAbility && parseInt(this.spendAbility.split('-')[0]) < parseInt(this.spendAbility.split('-')[1]) ? null : "The second value need be greater than first value."
    }
  },
  methods: {
    
  }
};
</script>

<style>
</style>