import Multiselect from 'vue-multiselect'
import Draggable from 'vuedraggable'
import Modal from '../components/ui/Modal'
import shared from '../components/shared'
import forms from '../components/configuration/forms'
import wrappers from '../components/configuration/wrappers'

const components = {
  Multiselect,
  Draggable,
  Modal,
  ...shared,
  ...forms,
  ...wrappers
}

export default ({
  install (Vue) {
    Object.keys(components).forEach(name => {
      Vue.component(name, components[name])
    })
  }
})
