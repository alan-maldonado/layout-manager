const jwt = require('express-jwt')
const jwksRsa = require('jwks-rsa')

if (!process.env.AUTH_DOMAIN) {
  throw Error('Make sure you have AUTH_DOMAIN in your config file')
}

const requireAuth = jwt({
    // Dynamically provide a signing key based on the kid in the header and the singing keys provided by the JWKS endpoint.
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${process.env.AUTH_DOMAIN}/.well-known/jwks.json`
  }),

    // Validate the audience and the issuer.
  issuer: `https://${process.env.AUTH_DOMAIN}/`,
  algorithms: ['RS256']
})

module.exports = requireAuth
