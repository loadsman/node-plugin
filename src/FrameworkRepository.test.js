const FrameworkRepository = require('./FrameworkRepository');

test('getExpressInfo', () => {
  expect(FrameworkRepository.getExpressInfo()).toMatchSnapshot()
})