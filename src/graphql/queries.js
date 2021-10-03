/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPresent = /* GraphQL */ `
  query GetPresent($id: ID!) {
    getPresent(id: $id) {
      id
      name
      image
      groupName
      presentCode
      description
      createdAt
      updatedAt
    }
  }
`;
export const listPresents = /* GraphQL */ `
  query ListPresents(
    $filter: ModelPresentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPresents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        image
        groupName
        presentCode
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
