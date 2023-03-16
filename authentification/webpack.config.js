const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: 'authentification',
  exposes: {
    // Update this whole line (both, left and right part):
    './Module': './src/app/auth/auth.module.ts',

  },

  remotes: {
    "authentification": "http://localhost:4201/remoteEntry.js",
  },



  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});





