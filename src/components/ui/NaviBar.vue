<template>
  <header class="main-header">
    <!-- Logo -->
    <a href="/" class="logo">
      <!-- mini logo for sidebar mini 50x50 pixels -->
      <span class="logo-mini">
      <b>L</b>M</span>
      <!-- logo for regular state and mobile devices -->
      <span class="logo-lg">
      <b>Layout</b>Manager</span>
    </a>

    <!-- Header Navbar: style can be found in header.less -->
    <nav class="navbar navbar-static-top">
      <!-- Sidebar toggle button-->
      <a
        href="#" class="sidebar-toggle"
        data-toggle="offcanvas" role="button">
        <span class="sr-only">Toggle navigation</span>
      </a>
      <!-- Navbar Right Menu -->
      <div class="navbar-custom-menu">
        <ul class="nav navbar-nav">
          <!-- User Account: style can be found in dropdown.less -->
          <li class="dropdown user user-menu">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <img :src="profile.picture" class="user-image" alt="User Image">
              <span class="hidden-xs">{{ profile.name }}</span>
            </a>
            <ul class="dropdown-menu">
              <!-- User image -->
              <li class="user-header">
                <img :src="profile.picture" class="img-circle" alt="User Image">

                <p>
                  {{ profile.name }}
                </p>
              </li>
              <!-- Menu Body -->
              <li class="user-body">
                <div class="pull-right">
                  <a href="#" @click.prevent="logout" class="btn btn-default btn-flat">Sign out</a>
                </div>
              </li>
              <!-- Menu Footer-->
              <li class="user-footer" v-if="false"/>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import { logout } from '@/services/AuthService'
export default {
  props: {
    profile: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      logout
    }
  }
}
</script>
