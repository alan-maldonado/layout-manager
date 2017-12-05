<template>
  <div id="content-wrap" class="content-wrapper clearfix">
    <section class="content-header">
      <span class="page-header">{{ routeTitle }}</span>
    </section>
    <custom-content :layout-name="layoutName" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import CustomContent from './CustomContent'

export default {
  components: {
    CustomContent
  },
  computed: {
    ...mapState('route', {
      meta: 'meta',
      params: 'params',
      routeName: 'name'
    }),
    layoutName () {
      if (this.params.elementId) {
        return `${this.meta.layoutName}+${this.params.elementId}`
      }
      return this.meta.layoutName
    },
    routeTitle () {
      return this.meta.title
    }
  }
}
</script>

<style>
.content-wrapper {
  min-height: 100vh;
}

.content-header {
  margin-bottom: 10px;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
