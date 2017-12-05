<template>
  <ComponentFrame class="component-frame" :stylesheet="stylesheet">
    <WrapperMainContent :component-name="componentName" :props-data="propsData" />
  </ComponentFrame>
</template>

<script>
import { wrapperMixin } from './mixins'
import data from '../data'
export default {
  mixins: [wrapperMixin],
  data () {
    return {
      stylesheet: '',
      componentName: 'generic-component'
    }
  },
  computed: {
    propsData () {
      return data.personCard(this.value)
    }
  }
}
</script>
