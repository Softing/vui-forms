<template lang="pug">
  primary-btn(value="Submit" @click="$bus.$emit('form.submit')")
</template>

<script>
import PrimaryBtn from '@softing/vui-forms/src/primitives/button/PrimaryBtn'

export default {
  inject: ['$bus'],
  components: {
    PrimaryBtn
  }
}
</script>
