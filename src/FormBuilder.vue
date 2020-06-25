<template lang="pug">
  form(:action="action" :method="method")
    div.form-message
    slot(name="header")
    slot
    slot(name="footer")
</template>

<style lang="scss">
  .form-message {
    display: none;
  }
</style>

<script>
import Vue from 'vue'

export default {
  props: {
    action: {
      type: String,
      default: null
    },
    method: {
      type: String,
      default: null
    }
  },
  provide () {
    return {
      $bus: this.$bus,
      $v: this.$v
    }
  },
  beforeCreate () {
    this.$bus = new Vue()
  },
  mounted () {
    this.$bus.$on('form.submit', () => {
      if (this.validate()) {
        this.$emit('submit')
      } else {
          this.$emit('error')
      }
    })
    this.$bus.$on('form.reset', () => {
      this.$emit('reset')
    })
  },
  methods: {
    findFields ($children = [], fields = []) {
      for (const $i in $children) {
        const $child = $children[$i]
        if (Object.prototype.hasOwnProperty
          .call($child, '$v')) {
          fields.push($child)
        }
        this.findFields($child.$children, fields)
      }
      return fields
    },
    validate () {
      let $invalid = true
      const fields = this.findFields(this.$children)
      for (const $i in fields) {
        fields[$i].$v.$touch()
        if (fields[$i].$v.$invalid) {
          $invalid = false
        }
      }
      return $invalid
    }
  }
}
</script>
