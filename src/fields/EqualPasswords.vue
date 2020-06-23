<template lang="pug">
  div
    input-password(:value="value" @input="input('password', $event)")
    div.error(v-if="$v.fields.repeatPassword.$dirty && !$v.fields.repeatPassword.sameAsPassword") Passwords must be identical.
    input-password(@input="input('repeatPassword', $event)")
</template>

<style lang="scss">
</style>

<script>
import { sameAs } from 'vuelidate/lib/validators'
import InputPassword from '@/components/form/fields/Password'

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
      fields: {
        password: null,
        repeatPassword: null
      }
    }
  },
  validations: {
    fields: {
      repeatPassword: {
        sameAsPassword: sameAs('password')
      }
    }
  },
  created () {
    this.fields.password = this.value
  },
  methods: {
    input ($field, $event) {
      this.fields[$field] = $event
      this.$v.fields.repeatPassword.$touch()
      this.$emit('input', this.fields.password)
    }
  }
}
</script>
