import faker from '@faker-js/faker'
import { v4 } from 'uuid'

export const userResolvers = {
  Query: {
    user: () => {
      return {
        id: v4(),
        name: faker.name.findName(),
      }
    },
    users: async () => {
      const db_users = []
      for (let index = 0; index < 5; index++) {
        db_users.push({ id: v4(), name: faker.name.findName() })
      }

      return db_users
    },
  },
}
