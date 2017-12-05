<template>
  <div class="panel panel-default">
    <div class="panel-heading" role="tab" :id="'heading_'+id"
         data-toggle="collapse" ref="link"
         @click="checkCollapsed" :data-parent="`#${parentId}`"
         :href="'#collapse_'+id" :aria-expanded="expanded"
         :aria-controls="'collapse_'+id"
    >
      <h4 class="panel-title">
        {{ label }}
        <span class="caret"/>
      </h4>
    </div>
    <div :id="'collapse_'+id"
         :class="{'panel-collapse':true, 'collapse': true, 'in': expanded}"
         role="tabpanel" :aria-labelledby="'heading_'+id">
      <div class="panel-body">
        <slot/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    parentId: {
      type: String,
      required: true
    },
    expanded: {
      type: Boolean,
      default: false
    }
  },
  mounted () {
    if (this.expanded) {
      this.$emit('expanded')
    }
  },
  methods: {
    checkCollapsed () {
      if (this.willExpand()) {
        this.$emit('expanded')
      }
    },
    willExpand () {
      let expandedStatus = this.$refs.link.attributes['aria-expanded'] | { value: false }
      return !expandedStatus.value
    }
  }
}
</script>

<style scoped>
.caret {
  float: right;
  margin-top: 7px;
}
.panel{
  margin-top: 0 !important;
  border-radius: 0 !important;
}
.panel-heading{
  cursor: pointer;
  border-radius: 0;
}
</style>
