<template>
  <div class="login"/>
</template>

<script>
  import { login } from '../../services/AuthService'
  export default {
    name: 'Login',
    mounted () {
      login()
    }
  }
</script>
