<template>
  <aside id="slider" :class="classNames">
    <section class="sidebar">
      <ul class="sidebar-menu">
        <slide-item
          v-for="(item, index) in slideMenuItems"
          :type="item.type"
          :is-header="item.isHeader"
          :icon="item.icon"
          :name="item.name"
          :badge="item.badge"
          :items="item.items"
          :router="item.router"
          :link="item.link"
          :key="index" />
      </ul>
    </section>
  </aside>
</template>

<script>
import SlideItem from './SlideItem'
import { mapState } from 'vuex'
export default {
  name: 'Slider',
  components: {
    SlideItem
  },
  props: {
    slideMenuItems: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    ...mapState({
      uiLock: 'uiLock'
    }),
    classNames () {
      return {
        'main-sidebar': true,
        'ui-locked': this.uiLock
      }
    }
  }
}
</script>

<style scoped>
  .ui-locked {
    pointer-events: none;
    cursor: default;
  }
</style>
