<template lang="pug">
  include ../../templates/TextField.pug
</template>

<style lang="scss">
</style>

<script>
import FieldMixin from '@softing/vui-forms/src/mixins/Field'

export default {
  mixins: [FieldMixin],
  props: {
    type: {
      type: String,
      default: 'text'
    },
    value: {
      type: [String, Number],
      default: null
    }
  }
}
</script>
