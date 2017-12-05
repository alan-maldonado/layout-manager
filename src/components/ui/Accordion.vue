<template>
  <div
    class="panel-group no-margin-bottom" :id="id"
    role="tablist" aria-multiselectable="true">
    <slot/>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    }
  }
}
</script>

<style>
.no-margin-bottom{
  margin-bottom: 0 !important;
}
</style>
