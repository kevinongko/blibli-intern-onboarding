var utility = require('./utility')
require('./style.scss')

function logger (value) {
  console.log(value)
}

logger('foobar')
logger(
  utility.sum(1, 2)
)
