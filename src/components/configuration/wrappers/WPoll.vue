<template>
  <h3>
    Poll {{ value }}
  </h3>
</template>

<script>
import { wrapperMixin } from './mixins'
export default {
  mixins: [wrapperMixin],
  computed: {
    propsData () {
      return null
    }
  }
}
</script>
