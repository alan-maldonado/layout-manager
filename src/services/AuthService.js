import auth0 from 'auth0-js'
import decode from 'jwt-decode'
import Router from 'vue-router'

const ID_TOKEN_KEY = 'id_token'
const ACCESS_TOKEN_KEY = 'access_token'
const PROFILE_KEY = 'profile'

const router = new Router({
  mode: 'history'
})

const auth = new auth0.WebAuth({
  domain: process.env.AUTH_DOMAIN,
  clientID: process.env.AUTH_CLIENT_ID,
  redirectUri: `${window.location.origin}/callback`,
  audience: `https://${process.env.AUTH_DOMAIN}/userinfo`,
  responseType: 'token id_token',
  scope: 'openid profile'
})

export const login = () => {
  auth.authorize()
}

export const setProfile = cb => {
  const accessToken = getParameterByName('access_token')
  auth.client.userInfo(accessToken, (err, user) => {
    if (err) {
      cb(err)
      return
    }
    localStorage.setItem(PROFILE_KEY, JSON.stringify(user))
    cb(null, user)
  })
}

export const logout = () => {
  clearIdToken()
  clearAccessToken()
  clearProfile()
  router.go('/login')
}

export const requireAuth = (to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isLoggedIn()) {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      next()
    }
  } else {
    next()
  }
}

export const getIdToken = () => {
  return localStorage.getItem(ID_TOKEN_KEY)
}

export const getAccessToken = () => {
  return localStorage.getItem(ACCESS_TOKEN_KEY)
}

export const getProfile = () => {
  return JSON.parse(localStorage.getItem(PROFILE_KEY))
}

const clearIdToken = () => {
  localStorage.removeItem(ID_TOKEN_KEY)
}

const clearAccessToken = () => {
  localStorage.removeItem(ACCESS_TOKEN_KEY)
}

const clearProfile = () => {
  localStorage.removeItem(PROFILE_KEY)
}

// Helper function that will allow us to extract the access_token and id_token
export const getParameterByName = name => {
  const match = RegExp('[#&]' + name + '=([^&]*)').exec(window.location.hash)
  return match && decodeURIComponent(match[1].replace(/\+/g, ' '))
}

// Get and store access_token in local storage
export const setAccessToken = () => {
  const accessToken = getParameterByName('access_token')
  localStorage.setItem(ACCESS_TOKEN_KEY, accessToken)
}

// Get and store id_token in local storage
export const setIdToken = () => {
  const idToken = getParameterByName('id_token')
  localStorage.setItem(ID_TOKEN_KEY, idToken)
}

export const isLoggedIn = () => {
  const idToken = getIdToken()
  return idToken && !isTokenExpired(idToken)
}

const getTokenExpirationDate = encodedToken => {
  if (!encodedToken || encodedToken === 'null') {
    return null
  }
  const token = decode(encodedToken)
  if (!token.exp) {
    return null
  }

  const date = new Date(0)
  date.setUTCSeconds(token.exp)

  return date
}

const isTokenExpired = token => {
  const expirationDate = getTokenExpirationDate(token)
  if (!expirationDate) {
    return true
  }
  return expirationDate < new Date()
}
