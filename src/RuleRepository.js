const RuleTransformer = require('./RuleTransformer.js')

exports.getCollectionFromRouter = (routes) => {
  const filteredRoutes = []
  routes.forEach(function (route) {
    // It seems all other Layers are not routes
    if (route.name !== 'bound dispatch') {
      return
    }
    filteredRoutes.push(route.route)
  })
  return filteredRoutes
}

exports.transformRoutesToRules = (routes) => {
  return routes.map(function (route) {
    return RuleTransformer.transform(route)
  })
}