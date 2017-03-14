var RuleTransformer = require('./RuleTransformer.js')

exports.getCollectionFromRouter = function(routes){
  var filteredRoutes = []
  routes.forEach(function (route){
    if (route.name !== 'bound dispatch'){
      return
    }
    filteredRoutes.push(route.route)
  })
  return filteredRoutes
}

exports.transformRoutesToRules = function(routes){
  return routes.map(function (route){
    return RuleTransformer.transform(route)
  })
}