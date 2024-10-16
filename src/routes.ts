export const routes = function (app: any): void {
    app.use('/api', require('./api/signUp'))
    app.use('/api', require('./api/templates'))
  }