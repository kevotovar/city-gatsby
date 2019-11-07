const path = require('path')
const { PropertyNode } = require('./src/nodes/propertyNode')
const get = require('lodash/get')
const axios = require('axios')

exports.sourceNodes = async ({ actions }) => {
  const { createNode } = actions

  const properties = await axios.get(
    'http://www.citybienesraices.com/api/realties/search?locationLevel=auto&pageNumber=1&pageSize=100&sortColumn=demand&sortDirection=Descending'
  )
  get(properties, 'data.items', []).forEach(property => {
    const propertyNode = PropertyNode(property)
    createNode(propertyNode)
  })
}

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions;
//   const result = await graphql(`
//     query AllProperties {
//       allNocNockProperty(limit: 10) {
//         edges {
//           node {
//             id
//             url
//             bathrooms
//             bedrooms
//             code
//             constructionSize
//             description
//             hasMortgage
//             id
//             latitude
//             location
//             longitude
//             lotSize
//             mediumPictureUrl
//             nocNockId
//             operation
//             parkingSpaces
//             pictureUrl
//             pictures {
//               largePictureUrl
//               mediumPictureUrl
//             }
//             price
//             settlement
//             shortLocation
//             status
//             statusValue
//             type
//             typeCode
//             typeOperationText
//             zone
//           }
//         }
//       }
//     }
//   `);
//   const properties = get(result, "data.allNocNockProperty.edges", []);
//   properties.forEach(({ node }) => {
//     createPage({
//       path: node.url,
//       component: path.resolve("./src/components/PropertyPage.jsx"),
//       context: {
//         propertyId: node.id
//       }
//     });
//   });
// };
