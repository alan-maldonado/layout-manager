<template>
  <div :class="className">
    <div :class="classNameBox">
      <div v-show="isLoading" class="overlay">
        <i class="fa fa-refresh fa-spin"/>
      </div>
      <div class="box-header">{{ title }} <region-add-component :components="componentsLibraryRegion" @add="addToRegion" /></div>
      <div class="box-body">
        <draggable
          v-model="components"
          class="dragArea target"
          @start="grabbing = regionKey"
          @end="onDrop"
          :options="draggableOptions()"
        >
          <region-component
            class="cursor-grab"
            v-for="element in components"
            v-model="element.model"
            :key="element.id"
            :name="element.name"
            :size="element.size"
            :component-name="element.component"
            :color="color"
            :id="element.id"
            @removeComponent="removeFromRegion"
            @input="syncStore()"
          />
        </draggable>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import { mapGetters, mapActions } from 'vuex'
import Draggable from 'vuedraggable'
import RegionAddComponent from './RegionAddComponent'
import RegionComponent from './RegionComponent'

export default {
  components: {
    Draggable,
    RegionComponent,
    RegionAddComponent
  },
  props: {
    layoutName: {
      type: String,
      required: true
    },
    regionKey: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    },
    className: {
      type: String,
      default: ''
    },
    initialComponents: {
      type: Array,
      default () { return [] }
    }
  },
  data () {
    return {
      isLoading: false,
      grabbing: '',
      components: []
    }
  },
  computed: {
    ...mapGetters('ComponentFactory', ['componentsLibrary', 'getSchema']),
    ...mapGetters('Layouts', ['currentLayout']),
    componentsLibraryRegion () {
      return this.componentsLibrary[this.regionKey] || []
    },
    classNameBox () {
      return {
        'box box-solid': true,
        'box-primary': this.grabbing === this.regionKey,
        'box-default': this.grabbing !== this.regionKey
      }
    },
    componentsNames () {
      return (this.componentsLibraryRegion || []).map(({ name }) => name)
    }
  },
  watch: {
    initialComponents () {
      this.components = _.cloneDeep(this.initialComponents)
    }
  },
  methods: {
    ...mapActions('Layouts', {
      setValidation: 'setValidation',
      addComponent: 'addComponent',
      saveComponents: 'saveComponents',
      removeComponent: 'removeComponent'
    }),
    getNewComponentSchema (componentName) {
      const original = _.find(this.componentsLibraryRegion, c => c.component === componentName)
      return { ..._.cloneDeep(original), id: _.uniqueId() }
    },
    addToRegion (componentName, index) {
      const newComponent = this.getNewComponentSchema(componentName)
      this.components = [ ...this.components, newComponent ]
      this.syncStore()
    },
    removeFromRegion (name, id) {
      const components = _.cloneDeep(this.components)
      const component = components.find(c => c.id === id && c.name === name)
      _.remove(components, component)
      this.components = components
      this.syncStore()
    },
    onDrop () {
      this.grabbing = null
      this.syncStore()
    },
    validateComponent (component, valid) {
      const validation = {
        layoutName: this.layoutName,
        componentId: `${this.regionKey}-${component}`,
        valid
      }
      this.setValidation(validation)
    },
    syncStore () {
      const components = _.cloneDeep(this.components)
      this.saveComponents({
        layoutName: this.layoutName,
        regionName: this.regionKey,
        components: components
      })
      this.updateComponents()
    },
    draggableOptions (source) {
      let group = { name: this.regionKey }
      let handle = '.draggable-handler'
      return {
        handle,
        group,
        animation: 150,
        forceFallback: true
      }
    },
    updateComponents () {
      this.components = this.currentLayout[this.regionKey] || []
    }
  }
}
</script>
