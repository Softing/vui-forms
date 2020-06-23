<template lang="pug">
  div
    div.error(v-if="$v.field.$dirty && !$v.field.required") Field is required
    input-checkbox(:value="field" :values="fields" @input="input")
</template>

<style lang="scss">
</style>

<script>
import { required } from 'vuelidate/lib/validators'
import InputCheckbox from '@/components/form/primitives/input/Checkbox'

export default {
  components: {
    InputCheckbox
  },
  props: {
    value: {
      type: [String, Number, Array],
      default: null
    },
    values: {
      type: Array,
      default: null
    }
  },
  data () {
    return {
      field: null,
      fields: []
    }
  },
  validations: {
    field: {
      required
    }
  },
  created () {
    this.field = this.value
    this.fields = this.values
    this.$v.$reset()
  },
  methods: {
    input ($event) {
      this.field = $event
      if (this.$v.$invalid === false) {
        this.$emit('input', this.field)
      }
    }
  }
}
</script>
