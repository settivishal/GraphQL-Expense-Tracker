import { gql } from "@apollo/client";

const GET_AUTHENTICATED_USER = gql`
  query GetAuthenticatedUser {
    authUser {
      _id
      name
      username
      profilePicture
    }
  }
`;

export const GET_USER_AND_TRANSACTIONS = gql`
  query GetUserAndTransactions($userId: ID!) {
    user (userId: $userId) {
      _id
      name
      username
      profilePicture
      transactions {
        _id 
        description
        paymentType
        category
        amount
        location
        date
      }
    }
  }
`;

export default GET_AUTHENTICATED_USER;