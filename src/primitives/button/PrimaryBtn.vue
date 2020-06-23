<template lang="pug">
  spt-button(:name="name" :type="type" @click="$emit('click')") {{ value }}
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: null
    },
    value: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: 'button'
    }
  }
}
</script>
