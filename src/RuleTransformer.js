exports.transform = function (route) {
  var methods = Object.keys(route.methods)
  // This means it's `all` route
  if (methods.length === 33) {
    methods = []
  }
  // Node methods are lovercase.
  methods = methods.map(function (method) {
    return method.toUpperCase()
  })

  return {
    uri: route.path,
    name: '',
    router: 'Express',
    methods: methods,
  }
}