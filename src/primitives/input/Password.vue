<template lang="pug">
  include ../../templates/TextField.pug
</template>

<style lang="scss">
</style>

<script>
import FieldMixin from '@/components/form/mixins/Field'

export default {
  mixins: [FieldMixin],
  props: {
    type: {
      type: String,
      default: 'password'
    },
    value: {
      type: [String, Number],
      default: null
    }
  }
}
</script>
