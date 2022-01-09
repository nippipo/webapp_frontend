import OktaSignIn from '@okta/okta-signin-widget'
import { OktaAuth } from '@okta/okta-auth-js'

const oktaSignIn = new OktaSignIn({
  baseUrl: 'https://dev-41050731.okta.com',
  clientId: '0oa3jllirhiYvPbui5d7',
  redirectUri:  process.env.VUE_APP_FRONTEND_BASE_URL + '/login/callback',
  registration: {
    parseSchema: function(schema, onSuccess, onFailure) {
      // handle parseSchema callback
      onSuccess(schema);
   },
   preSubmit: function (postData, onSuccess, onFailure) {
      // handle preSubmit callback
      onSuccess(postData);
   },
   postSubmit: function (response, onSuccess, onFailure) {
       // handle postsubmit callback
      onSuccess(response);
   }
  },
  features: {
    registration: true 
  },
  authParams: {
    pkce: true,
    issuer: 'https://dev-41050731.okta.com/oauth2/default',
    display: 'page',
    scopes: ['openid', 'profile', 'email']
  }
});

const oktaAuth = new OktaAuth({
  issuer: 'https://dev-41050731.okta.com/oauth2/default',
  clientId: '0oa3jllirhiYvPbui5d7',
  redirectUri: window.location.origin + '/login/callback',
  scopes: ['openid', 'profile', 'email']
})

export { oktaAuth, oktaSignIn };