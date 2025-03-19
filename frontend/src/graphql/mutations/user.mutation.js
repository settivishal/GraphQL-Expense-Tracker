import { gql } from "@apollo/client";

const SIGN_UP = gql`
	mutation SignUp($input: SignUpInput!) {
		signUp(input: $input) {
			_id
			name
			username
		}
	}
`;

export default SIGN_UP;
