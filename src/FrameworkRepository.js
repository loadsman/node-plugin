exports.getExpressInfo = () => {
  return {
    "name": "Express",
    "version": require('express/package.json').version,
    "features": [
      "rule-list"
    ]
  }
}