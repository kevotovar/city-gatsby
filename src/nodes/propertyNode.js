const createNodeHelpsers = require('gatsby-node-helpers').default

const { createNodeFactory } = createNodeHelpsers({
  typePrefix: 'NocNock',
})

exports.PropertyNode = createNodeFactory('Property', node => {
  return node
})
