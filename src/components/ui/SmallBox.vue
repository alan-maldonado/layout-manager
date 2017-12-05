<template>

  <div class="small-box" :class="bgColor">
    <div class="inner">
      <h3 class="wrap-words">{{ title }}</h3>
      <p>{{ description }}</p>
    </div>
    <div class="icon">
      <i class="ion" :class="icon"/>
    </div>
    <a href="#"
       class="small-box-footer"
       @click.prevent="$emit('onOptionClicked', id)"
    >
      {{ moreText }} <i class="fa fa-arrow-circle-right"/>
    </a>
  </div>
</template>

<script>
  export default {
    name: 'SmallBox',
    props: {
      id: {
        type: Number,
        required: true
      },
      color: {
        type: String,
        default: 'primary'
      },
      icon: {
        type: String,
        default: ''
      },
      title: {
        type: String,
        default: ''
      },
      description: {
        type: String,
        default: ''
      },
      moreText: {
        type: String,
        default: ''
      }
    },
    computed: {
      bgColor () {
        return `bg-${this.color}`
      }
    }
  }
</script>

<style scoped>
.small-box h3 {
  white-space: normal !important;
}
.inner {
  background-color: rgba(255,255,255,0.3)
}
.small-box-footer{
  background-color: rgba(255,255,255,0.15) !important;
}
</style>
