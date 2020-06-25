<template lang="pug">
  div
    div(v-for="(record, key) in values" :key="key")
      label
        input(
          type="radio" :name="name" :value="record.value"
          :checked="checked(record.value)"
          @input="$emit('input', $event.target.value)")
        | {{ record.title }}
</template>

<style lang="scss">
</style>

<script>
import FieldMixin from '@softing/vui-forms/src/mixins/Field'

export default {
  mixins: [FieldMixin],
  props: {
    value: {
      type: [String, Number],
      default: null
    },
    values: {
      type: [String, Number, Array],
      default: null
    }
  },
  data () {
    return {
      selected: []
    }
  },
  methods: {
    checked (value) {
      return this.value === value
    }
  }
}
</script>
