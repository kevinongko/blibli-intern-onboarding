module.exports = {
  sum: function (a, b) {
    return a + b
  },
  subs: function (a, b) {
    return a - b
  },
  caller: function () {
    this.sum(1, 2)
  }
}
