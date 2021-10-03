/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPresent = /* GraphQL */ `
  mutation CreatePresent(
    $input: CreatePresentInput!
    $condition: ModelPresentConditionInput
  ) {
    createPresent(input: $input, condition: $condition) {
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
export const updatePresent = /* GraphQL */ `
  mutation UpdatePresent(
    $input: UpdatePresentInput!
    $condition: ModelPresentConditionInput
  ) {
    updatePresent(input: $input, condition: $condition) {
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
export const deletePresent = /* GraphQL */ `
  mutation DeletePresent(
    $input: DeletePresentInput!
    $condition: ModelPresentConditionInput
  ) {
    deletePresent(input: $input, condition: $condition) {
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
