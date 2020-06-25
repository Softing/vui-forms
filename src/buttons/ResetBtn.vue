<template lang="pug">
  secondary-btn(value="Reset" @click="$bus.$emit('form.reset')")
</template>

<script>
import SecondaryBtn from '@softing/vui-forms/src/primitives/button/SecondaryBtn'

export default {
  inject: ['$bus'],
  components: {
    SecondaryBtn
  }
}
</script>
