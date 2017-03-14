exports.getExpressInfo = function () {
  return {
    "name": "Express",
    "version": require('express/package.json').version,
    "features": [
      "rule-list"
    ]
  }
}