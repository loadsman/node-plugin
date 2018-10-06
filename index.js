exports.register = function (app) {
  app.all('/loadsman/rules/get-many', function (req, res, next) {
    if (! (req.method === 'GET' || req.method === 'POST')) {
      return next()
    }

    const RuleRepository = require('./src/RuleRepository.js')
    const routes = RuleRepository.getCollectionFromRouter(app._router.stack)
    const rules = RuleRepository.transformRoutesToRules(routes)

    res.send({data: rules})
  })

  app.all('/loadsman/framework/get-data', function (req, res, next) {
    if (! (req.method === 'GET' || req.method === 'POST')) {
      return next()
    }

    const FrameworkRepository = require('./src/FrameworkRepository.js')
    const expressInfo = FrameworkRepository.getExpressInfo()

    res.send({data: expressInfo})
  })
}