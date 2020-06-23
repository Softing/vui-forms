<template lang="pug">
  div
    div.error(v-if="$v.field.$dirty && !$v.field.required") Field is required
    div.error(v-if="$v.field.$dirty && !$v.field.minLength") Name must have at least {{$v.field.$params.minLength.min}} letters.
    input-password(:value="field" @input="input")
</template>

<style lang="scss">
</style>

<script>
import { required, minLength } from 'vuelidate/lib/validators'
import InputPassword from '@/components/form/primitives/input/Password'

export default {
  components: {
    InputPassword
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
      minLength: minLength(6)
    }
  },
  created () {
    // this.field = this.value
  },
  mounted () {
    this.$v.$reset()
  },
  methods: {
    input ($event) {
      this.field = $event
      this.$v.$touch()
      if (this.$v.$invalid === false) {
        this.$emit('input', this.field)
      }
    }
  }
}
</script>
