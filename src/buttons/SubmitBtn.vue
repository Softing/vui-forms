<template lang="pug">
  primary-btn(value="Submit" @click="$bus.$emit('form.submit')")
</template>

<script>
import PrimaryBtn from '@/components/form/primitives/button/PrimaryBtn'

export default {
  inject: ['$bus'],
  components: {
    PrimaryBtn
  }
}
</script>
