<template>
  <div class="ad-wrapper">
    <div v-if="!value.type">
      <h4>
        {{ value.advertisementText }}
      </h4>
      <div>
        <b>Device:</b> {{ value.device }}
      </div>
      <b>Sizes:</b> <span v-for="size in value.sizes" :key="size">{{ size }}</span>
    </div>
    <div v-if="value.type">
      <h4>
        {{ value.advertisementText }}
      </h4>
      Sponsor ID: <b>{{ value.adId }}</b>
    </div>
  </div>
</template>

<script>
import { wrapperMixin } from './mixins'
export default {
  mixins: [wrapperMixin],
  computed: {
    propsData () {
      return null
    }
  }
}
</script>

<style>
  .ad-wrapper {
    padding: 0px 15px 5px;
  }
</style>
