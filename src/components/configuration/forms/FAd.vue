<template>
  <form class="form-group clearfix">
    <ul class="nav nav-tabs">
      <li
        :class="{ active: activeIndex === 0 }"
      >
        <a @click.prevent="activeIndex = 0">New Configuration <span v-if="tabError[0]" class="glyphicon glyphicon-error glyphicon-exclamation-sign pull-right"/></a>
      </li>
      <li
        :class="{ active: activeIndex === 1 }"
      >
        <a @click.prevent="activeIndex = 1">Legacy Configuration<span v-if="tabError[1]" class="glyphicon glyphicon-error glyphicon-exclamation-sign pull-right"/></a>
      </li>
    </ul>
    <div class="tab-content">
      <div
        class="tab-pane fade"
        :class="{ active: activeIndex === configuration.new, in: activeIndex === configuration.new }">
        <div class="form-group col-md-12" :class="{'has-error': error.sizes }">
          <label class="col-md-2">Sizes</label>
          <div class="col-md-10">
            <div class="checkbox-inline" v-for="size in sizes" :key="size">
              <label>
                <input type="checkbox" class="field-inline"
                       v-model="value.sizes" :value="size" > {{ size }}
              </label>
            </div>
            <span v-if="error.sizes" class="help-block">{{ error.sizes }}</span>
          </div>
        </div>
        <div class="form-group col-md-6">
          <label>Advertisement Text</label>
          <input class="form-control" v-model="value.advertisementText">
        </div>
        <div class="form-group col-md-6" :class="{ 'has-error': error.device }">
          <label>Device</label>
          <select class="form-control" v-model="value.device">
            <option
              v-for="(option, index) in devices"
              :key="index"
              :value="option"
            >
              {{ option }}
            </option>
          </select>
          <span v-if="error.device" class="help-block">{{ error.device }}</span>
        </div>
      </div>
      <div
        class="tab-pane fade"
        :class="{ active: activeIndex === configuration.old, in: activeIndex === configuration.old }">
        <div class="form-group col-md-12" :class="{ 'has-error': error.adId }">
          <label>Sponsor Id</label>
          <input class="form-control" v-model="value.adId">
          <span v-if="error.adId" class="help-block">{{ error.adId }}</span>
        </div>
        <div class="form-group col-md-6">
          <label>Advertisement Text</label>
          <input class="form-control" v-model="value.advertisementText">
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import _ from 'lodash'
import { formMixin } from './mixins'
export default {
  mixins: [formMixin],
  data () {
    return {
      configuration: {
        new: 0,
        old: 1
      },
      devices: ['desktop', 'mobile', 'tablet'],
      sizes: ['320x50', '300x250', '500x200'],
      activeIndex: this.value.type || 0
    }
  },
  computed: {
    error () {
      const error = {}
      if (!this.submitted) { return error }
      if (this.activeIndex === 0) {
        if (_.isEmpty(this.value.sizes)) { error.sizes = 'You should select at least one size' }
        error.device = this.validateRequired(this.value.device, 'Device')
      } else if (this.activeIndex === 1) {
        error.adId = this.validateRequired(this.value.adId, 'Sponsor Id')
      }
      return _.pickBy(error)
    },
    tabError () {
      const error = this.error
      return [
        !!error.sizes || !!error.device,
        !!error.adId
      ]
    }
  },
  watch: {
    activeIndex (newValue) {
      this.value.type = newValue
    }
  }
}
</script>

<style scoped>
.tab-content {
  padding-top: 20px;
}

.glyphicon-error {
  color: #dd4b39;
}
</style>
