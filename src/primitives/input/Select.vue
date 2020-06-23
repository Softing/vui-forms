<template lang="pug">
  select(:name="name" :value="value" @input="$emit('input', $event.target.value)")
    option(v-for="(record, index) in values" :key="record.value" :value="record.value") {{ record.title }}
</template>

<style lang="scss">
</style>

<script>
import FieldMixin from '@/components/form/mixins/Field'

export default {
  mixins: [FieldMixin],
  props: {
    value: {
      type: [String, Number],
      default: null
    },
    values: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>
