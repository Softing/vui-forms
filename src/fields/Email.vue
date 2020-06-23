<template lang="pug">
  div.form-field
    input-text(:value="field" @input="input")
      template(#label)
        | text
      template(#errors)
        div.error(v-if="$v.field.$dirty && !$v.field.required") Field is required
        div.error(v-if="$v.field.$dirty && !$v.field.minLength") Name must have at least {{$v.field.$params.minLength.min}} letters.
</template>

<style lang="scss">
</style>

<script>
import { required, minLength } from 'vuelidate/lib/validators'
import InputText from '@/components/form/primitives/input/Text'

export default {
  components: {
    InputText
  },
  props: {
    value: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      field: null
    }
  },
  validations: {
    field: {
      required,
      minLength: minLength(7)
    }
  },
  created () {
    this.field = this.value
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
