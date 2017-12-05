<template>
  <transition name="fade">
    <div :class="classNamesWrapper">
      <div class="box-header with-border draggable-handler cursor-grab">
        <h3 class="box-title">{{ name }}</h3>
        <div class="box-tools pull-right">
          <button
            v-if="modelData.editable" type="button"
            class="btn btn-box-tool" @click.prevent="showModal = true">
            <i ref="icon" class="fa fa-pencil"/>
          </button>
          <button @click.prevent="remove" type="button" class="btn btn-box-tool">
            <i class="fa fa-times"/>
          </button>
        </div>
      </div>
      <modal
        v-if="modelData.editable && showModal"
        v-model="showModal"
        :title="name"
        :large="getSize('large')"
        :small="getSize('small')"
        :full="getSize('full')"
        @ok="ok"
        @cancel="cancel"
      >
        <component
          :is="`f-${componentName}`" v-model="modelData"
          :submitted="submitted" ref="componentFormBody"/>
      </modal>
      <component :is="`w-${componentName}`" v-model="value" ref="componentWrapper" />
    </div>
  </transition>
</template>

<script>
import swal from 'sweetalert2'
import _ from 'lodash'

export default {
  props: {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    componentName: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    },
    collapsed: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: 'full'
    },
    value: { // model
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      submitted: false,
      showModal: false,
      modelData: _.cloneDeep(this.value)
    }
  },
  computed: {
    classNamesWrapper () {
      let colorClass = 'box-' + this.colorMappings(this.color)

      let res = {
        'box': true,
        'collapsed-box': this.collapsed
      }

      res[colorClass] = true

      return res
    }
  },
  watch: {
    showModal (newValue) {
      if (!newValue) {
        this.submitted = false
      }
    }
  },
  methods: {
    ok () {
      this.submitted = true
      this.$nextTick(function () {
        if (this.$refs.componentFormBody.isValid()) {
          this.showModal = false
          this.$emit('input', _.cloneDeep(this.modelData))
        }
      })
    },
    cancel () {
      this.showModal = false
      this.modelData = _.cloneDeep(this.value)
    },
    remove () {
      swal({
        title: 'Warning',
        text: 'Please, confirm to remove this item from the layout!',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, remove it!'
      }).then(() => this.$emit('removeComponent', this.name, this.id))
        .catch()
    },
    colorMappings (color) {
      const mappings = {
        aqua: 'info',
        navy: 'primary',
        yellow: 'warning',
        green: 'success',
        red: 'danger'
      }

      return mappings[color] || 'default'
    },
    getSize (sizeKey) {
      const currentSize = this.size || 'full'
      return sizeKey === currentSize
    }
  }
}
</script>

<style>
  .component-frame {
    border: 1px solid #CCC;
    box-shadow: 0 0 3px 2x rgba(0,0,0,.3);
    margin: 20px auto;
    height: 200px;
    width: 95%;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0
  }
  div.errors span {
    color: #e78175;
  }

  div.field-inline label {
    display: inline;
  }

  div.field-inline .field-wrap {
    display: inline;
    margin-right: 5px;
    float: left;
  }

  div.radio-list label {
    margin-right:15px;
  }
</style>
