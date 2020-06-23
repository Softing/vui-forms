<template lang="pug">
  div.c-inpunt-phone-records
    div.c-inpunt-phone-number(v-for="(number, index) in records" :key="index")
      phone-number(:value="number" @input="input(index, $event)")
      spt-button(type="button" @click="addRecord") +
      spt-button(type="button" @click="removeRecord(index)"
        v-show="index >= 1") -
</template>

<style lang="scss">
  .c-inpunt-phone-number {
    display: flex;
  }
</style>

<script>
import PhoneNumber from '@/components/form/fields/PhoneNumber'
import Button from '@/components/ui-kit/atoms/Button'

export default {
  components: {
    Button,
    PhoneNumber
  },
  props: {
    value: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data: () => ({
    template: {
      code: null,
      number: null
    },
    records: []
  }),
  created () {
    if (this.value.length) {
      this.records = this.value
    } else {
      this.records.push(this.template)
    }
  },
  methods: {
    addRecord () {
      this.records.push(this.template)
    },
    removeRecord (index) {
      this.records.splice(index, 1)
    },
    input ($index, $event) {
      this.records[$index].code = $event.code
      this.records[$index].number = $event.number
      this.$emit('input', this.records)
    }
  }
}
</script>
