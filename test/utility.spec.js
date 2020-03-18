var utility = require('../src/utility.js')

test('sum 1 + 2', () => {
  expect(utility.sum(1, 2)).toBe(3)
})

test('substraction 2 + 1', () => {
  expect(utility.subs(2, 1)).toBe(1)
})

test('caller', () => {
  var spy = jest.spyOn(utility, 'sum')
  utility.caller()
  expect(spy).toHaveBeenCalled()
  expect(spy).toHaveBeenCalledWith(1, 2)
})
