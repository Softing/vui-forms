export default {
  props: {
    name: {
      type: String,
      default () {
        return 'field_' + new Date().getTime()
      }
    }
  }
}
