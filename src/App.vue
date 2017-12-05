<template>
  <div id="app">
    <layout v-if="authenticated">
      <router-view />
    </layout>
    <router-view v-else />
  </div>
</template>

<script>
import { isLoggedIn, getProfile } from './services/AuthService'
import Layout from './components/ui/Index'
import ContentHeader from './components/workspace/ContentHeader'

export default {
  name: 'App',
  components: {
    Layout,
    ContentHeader
  },
  data () {
    return {
      profile: getProfile(),
      authenticated: isLoggedIn()
    }
  }
}
</script>

<style scoped>
.overflow-hidden {
  width: 100%;
  position: fixed;
  overflow-y: hidden;
}
</style>
