<template>
  <form>
    <div class="checkbox-inline">
      <input type="checkbox" class=" field-inline" v-model="value.showDays" > Show days list?
    </div>
  </form>
</template>

<script>
import { formMixin } from './mixins'
export default {
  mixins: [formMixin]
}
</script>
