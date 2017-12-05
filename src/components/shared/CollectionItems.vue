<template>
  <div class="form-group">
    <div class="col-md-12">
      <slot/>
    </div>
    <div class="col-md-3">
      <div class="btn-group btn-group-menu" role="group">
        <button
          type="button"
          class="btn btn-default btn-sm"
          @click="addItem"><span class="glyphicon glyphicon-plus"/>{{ !compacted ? 'Add': '' }}</button>
        <button
          type="button"
          class="btn btn-default btn-sm"
          :disabled="!selectedElement"
          @click="removeItem"><span class="glyphicon glyphicon-minus"/>{{ !compacted ? 'Delete': '' }}</button>
      </div>
      <draggable
        class="list-group"
        element="ul"
        v-model="elements"
        :options="dragOptions"
        @start="isDragging=true" @end="onDrop"
      >
        <transition-group type="transition" :name="'flip-list'">
          <a
            class="list-group-item list-group-item-action"
            v-for="element in elements"
            :class="{ 'active': selectedElement === element, 'list-group-item-danger': !element.isValid && submitted }"
            :key="element.id"
            @click.prevent="selectedElement = element"
          >
            {{ getName(element) || 'Untitled' }}
            <span v-if="!element.isValid && submitted" class="glyphicon glyphicon-exclamation-sign pull-right"/>
          </a>
        </transition-group>
      </draggable>
    </div>
    <div class="col-md-9">
      <component
        :is="componentFormName"
        v-if="selectedElement"
        v-model="selectedElement"
        :submitted="submitted"
      />
    </div>
  </div>

</template>

<script>
import _ from 'lodash'

export default {
  props: {
    value: {
      type: Array,
      default () { return [] }
    },
    labelProperty: {
      type: String,
      default: 'title'
    },
    submitted: {
      type: Boolean,
      default: false
    },
    componentFormName: {
      type: String,
      required: true
    },
    itemModel: {
      type: Object,
      required: true
    },
    labelProcessing: {
      type: Function,
      default: (title) => title
    },
    compacted: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      selectedElement: null
    }
  },
  computed: {
    dragOptions () {
      return {
        animation: 0,
        group: 'description',
        ghostClass: 'ghost'
      }
    },
    elements: {
      get () {
        return this.value
      },
      set (newValue) {
        this.$emit('input', newValue)
      }
    }
  },
  created () {
    this.selectedElement = this.elements.length ? this.elements[0] : null
  },
  methods: {
    isValid () {
      return !this.elements.some(item => !item.isValid)
    },
    addItem () {
      const newItem = _.chain(this.itemModel)
                       .extend({ id: _.uniqueId('item_') })
                       .cloneDeep()
                       .value()
      const newItems = _.cloneDeep(this.elements)
      newItems.push(newItem)
      this.$emit('input', newItems)
      this.selectedElement = newItem
    },
    removeItem () {
      _.remove(this.elements, this.selectedElement)
      const newItems = _.cloneDeep(this.elements)
      this.selectedElement = newItems.length ? newItems[0] : null
      this.$emit('input', newItems)
    },
    onDrop () {
      this.isDragging = null
      const newItems = _.cloneDeep(this.elements)
      this.$emit('input', newItems)
      this.selectedElement = this.selectedElement ? newItems.find(el => el.id === this.selectedElement.id) : null
    },
    getName (element) {
      const labelName = element[this.labelProperty]
      return this.labelProcessing(labelName)
    }
  }
}
</script>

<style>
  .btn-group-menu {
    margin-bottom: 5px;
  }
</style>
