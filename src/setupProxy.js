const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://jupiterapiserver-dev.azurewebsites.net/main/reports',
      changeOrigin: true,
    })
  );
};
