<template lang="pug">
  div
    div.error(v-if="$v.field.code.$dirty && !$v.field.code.required") Field is required
    div.error(v-if="$v.field.code.$dirty && !$v.field.code.minLength") Name must have at least {{$v.field.code.$params.minLength.min}} letters.
    input-text(:value="field.code" @input="input('code', $event)")

    div.error(v-if="$v.field.number.$dirty && !$v.field.number.required") Field is required
    div.error(v-if="$v.field.number.$dirty && !$v.field.number.minLength") Name must have at least {{$v.field.number.$params.minLength.min}} letters.
    input-text(:value="field.number" @input="input('number', $event)")
</template>

<style lang="scss">
</style>

<script>
import { minLength, required } from 'vuelidate/lib/validators'
import InputText from '@/components/form/primitives/input/Text'

export default {
  components: {
    InputText
  },
  props: {
    value: {
      type: Object,
      default () {
        return {
          code: null,
          number: null
        }
      }
    }
  },
  data () {
    return {
      field: {
        code: null,
        number: null
      }
    }
  },
  validations: {
    field: {
      code: {
        required,
        minLength: minLength(1)
      },
      number: {
        required,
        minLength: minLength(7)
      }
    }
  },
  created () {
    this.field = this.value
  },
  methods: {
    input ($field, $event) {
      this.field[$field] = $event
      this.$v.field[$field].$touch()
      if (this.$v.$invalid === false) {
        this.$emit('input', this.field)
      }
    }
  }
}
</script>
