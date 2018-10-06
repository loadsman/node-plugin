const transformMethods = methodsObject => {
  const methods = Object.keys(methodsObject)
  // This means it's `all` route
  if (methods.length === 33) {
    return []
  }
  // Node methods are lowercase. But we need them to be uppercase.
  return methods.map(method => {
    return method.toUpperCase()
  })
}
exports.transformMethods = transformMethods

exports.transform = (route) => {
  return {
    uri: route.path,
    name: '',
    router: 'Express',
    methods: transformMethods(route.methods),
  }
}