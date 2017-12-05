<template>
  <section class="content">
    <transition name="page" mode="out-in">
      <div v-if="!isEmpty(componentsLibrary) && layoutName" :class="{'cursor-grabbing': grabbing}">
        <region
          v-if="isRegionVisible('preContent')"
          region-key="preContent"
          title="Pre content region"
          color="navy"
          :initial-components="currentLayout.preContent || []"
          :class-name="getClassNameRegion('preContent')"
          :layout-name="layoutName"
        />

        <region
          v-if="isRegionVisible('leftRail')"
          region-key="leftRail"
          title="Left rail region"
          color="green"
          :initial-components="currentLayout.leftRail || []"
          :class-name="getClassNameRegion('leftRail')"
          :layout-name="layoutName"
        />

        <region
          v-if="isRegionVisible('main')"
          region-key="main"
          title="Main region"
          color="gray"
          :initial-components="currentLayout.main || []"
          :class-name="getClassNameRegion('main')"
          :layout-name="layoutName"
        />

        <region
          v-if="isRegionVisible('rightRail')"
          region-key="rightRail"
          title="Right rail region"
          color="red"
          :initial-components="currentLayout.rightRail || []"
          :class-name="getClassNameRegion('rightRail')"
          :layout-name="layoutName"
        />
      </div>
    </transition>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import _ from 'lodash'
import { getSizeLayout } from '@/utils/sizeLayout'

import Region from './Region'

export default {
  components: {
    Region
  },
  props: {
    layoutName: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      highlightedRegion: '',
      grabbing: false,
      isEmpty: _.isEmpty
    }
  },
  computed: {
    ...mapGetters('ComponentFactory', ['componentsLibrary']),
    ...mapGetters('Layouts', ['currentLayout'])
  },
  watch: {
    layoutName (value) {
      this.fetch(value)
    }
  },
  beforeMount () {
    this.fetch(this.layoutName)
  },
  methods: {
    ...mapActions('Layouts', {
      fetch: 'fetchLayout'
    }),
    getClassNameRegion (regionName) {
      const configuration = getSizeLayout(this.componentsLibrary)
      const size = configuration[regionName] || 0
      return `col-md-${size} col-sm-${size} target ${_.kebabCase(regionName)} region`
    },
    isRegionVisible (regionName) {
      const configuration = getSizeLayout(this.componentsLibrary)
      return !!configuration[regionName]
    }
  }
}
</script>

<style>
.target {
  min-height: 200px;
}
.no-padding {
  padding: 0 !important;
}
.cursor-grab {
  cursor: grab;
}
.sortable-chosen,
.cursor-grabbing {
  cursor: grabbing;
}
</style>
