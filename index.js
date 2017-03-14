exports.register = function (app) {
  app.all('/loadsman/rules/get-many', function (req, res, next) {
    if (! (req.method === 'GET' || req.method === 'POST')) {
      return next()
    }

    var RuleRepository = require('./src/RuleRepository.js')
    var routes = RuleRepository.getCollectionFromRouter(app._router.stack)
    var rules = RuleRepository.transformRoutesToRules(routes)

    res.send({data: rules})
  })

  app.all('/loadsman/framework/get-data', function (req, res, next) {
    if (! (req.method === 'GET' || req.method === 'POST')) {
      return next()
    }

    var FrameworkRepository = require('./src/FrameworkRepository.js')
    var expressInfo = FrameworkRepository.getExpressInfo()

    res.send({data: expressInfo})
  })
}