<template>
  <div class="main-content">
    <component :is="componentName" v-bind="propsData" />
  </div>
</template>

<script>
  import { wrapperMixin } from './mixins'

  export default {
    mixins: [wrapperMixin]
  }
</script>
