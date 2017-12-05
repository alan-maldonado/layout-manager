<template>
  <div class="wrapper">
    <navi-bar :profile="profile"/>
    <slider :slide-menu-items="slideMenuItems"/>
    <slot/>
    <config-bar />
  </div>
</template>

<script>
import 'vue2-admin-lte/src/lib/css'
import 'vue2-admin-lte/src/lib/script'

import NaviBar from './NaviBar'
import Slider from './Slider'
import ConfigBar from './ConfigBar'
import slideMenuItems from '@/router/sidebarMenu'
import { getProfile } from '@/services/AuthService'

export default {
  components: {
    NaviBar,
    Slider,
    ConfigBar
  },
  data () {
    return {
      slideMenuItems,
      profile: getProfile()
    }
  }
}
</script>
