<template>
  <select
    class="form-control" :disabled="isDisabled"
    :multiple="isMultiple" v-model="selectedItem">
    <option v-for="item in list" :key="item">
      {{ item }}
    </option>
  </select>
</template>
<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => []
    },
    isDisabled: {
      type: Boolean,
      default: false
    },
    isMultiple: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      selectedItem: null
    }
  },
  watch: {
    selectedItem () {
      this.$emit('selected', this.selectedItem)
      this.$emit('selectedIndex', this.list.indexOf(this.selectedItem))
    }
  }
}
</script>
