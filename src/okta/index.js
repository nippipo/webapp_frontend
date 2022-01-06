import OktaSignIn from '@okta/okta-signin-widget'
import { OktaAuth } from '@okta/okta-auth-js'

const oktaSignIn = new OktaSignIn({
  baseUrl: 'https://dev-41050731.okta.com',
  clientId: '0oa3ininzxgpKe68C5d7',
  redirectUri:  process.env.VUE_APP_FRONTEND_BASE_URL + '/login/callback',
  authParams: {
    pkce: true,
    issuer: 'https://dev-41050731.okta.com/oauth2/default',
    display: 'page',
    scopes: ['openid', 'profile', 'email']
  }
});

const oktaAuth = new OktaAuth({
  issuer: 'https://dev-41050731.okta.com/oauth2/default',
  clientId: '0oa3ininzxgpKe68C5d7',
  redirectUri: window.location.origin + '/login/callback',
  scopes: ['openid', 'profile', 'email']
})

export { oktaAuth, oktaSignIn };