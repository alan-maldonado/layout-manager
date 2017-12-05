<template>
  <div>
    <div v-if="!error" class="spinner">
      <img :src="loadingImage" alt="loading">
    </div>
    <div v-else class="login-container">
      <div class="col-xs-12 col-sm-4 col-sm-offset-4 login-box">
        <div class="login-header">
          <img :src="logoImage">
          <h3/>
        </div>
        <div
          id="error-message"
          class="alert alert-warning">
          <strong>Warning!</strong> {{ error }}
        </div>
        <h5>Return to <router-link :to="{ name: 'Login', params: {} }">login page</router-link></h5>
      </div>
    </div>
  </div>
</template>

<script>
import {
  setIdToken,
  setAccessToken,
  getParameterByName,
  setProfile
} from '../../services/AuthService'
export default {
  name: 'Callback',
  data () {
    return {
      error: null,
      loadingImage: '../../assets/loading.svg',
      logoImage: 'https://wizeline-website-assets.s3.amazonaws.com/wp-content/themes/wizeline-website/assets/img/logo-wizeline.svg'
    }
  },
  mounted () {
    this.error = getParameterByName('error_description')
    this.$nextTick(() => {
      if (this.error) {
        return
      }
      setAccessToken()
      setIdToken()
      setProfile((err, data) => {
        if (err) {
          return
        }
        window.location.href = '/'
      })
    })
  }
}
</script>

<style>
  body, html {
    height: 100%;
    background-color: #f9f9f9;
  }
  .spinner {
    position: absolute;
    display: flex;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background-color: white;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .login-container {
    position: absolute;
    height: 50vh;
    width: 100vw;
    display: flex;
    align-items: center;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .login-box {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    padding: 15px;
    background-color: #fff;
    box-shadow: 0px 5px 5px #ccc;
    border-radius: 5px;
    border-top: 1px solid #e9e9e9;
  }
  .login-header {
    text-align: center;
  }
  .login-header img {
    width: 120px;
  }
  #error-message {
    margin-top: 50px
  }
</style>
