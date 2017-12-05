<template>
  <textarea ref="mdeTextarea"/>
</template>
<script>
  const SimpleMDE = require('simplemde')
  export default {
    props: {
      value: {
        type: String,
        default: ''
      }
    },
    mounted () {
      this.mde = new SimpleMDE({
        element: this.$refs.mdeTextarea,
        status: false // hide status bar
      })
      this.mde.value(this.value)
      this.mde.codemirror.on('change', () => {
        this.$emit('input', this.mde.value())
      })
    }
  }
</script>
<style>
  @import '../../../node_modules/simplemde/dist/simplemde.min.css';
</style>
