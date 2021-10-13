/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getReservation = /* GraphQL */ `
  query GetReservation($id: ID!) {
    getReservation(id: $id) {
      id
      roomId
      clientName
      phone
      startDate
      endDate
      reservState
      numOfPeople
      description
      createdAt
      updatedAt
    }
  }
`;
export const listReservations = /* GraphQL */ `
  query ListReservations(
    $filter: ModelReservationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReservations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        roomId
        clientName
        phone
        startDate
        endDate
        reservState
        numOfPeople
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
