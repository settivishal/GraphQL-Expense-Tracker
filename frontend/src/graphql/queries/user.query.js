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

export default GET_AUTHENTICATED_USER;