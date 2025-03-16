import { users } from "../Data/data.js";

const userResolver = {
  Query: {
    users: () => users,
  },
  Mutation: {},
};

export default userResolver;
