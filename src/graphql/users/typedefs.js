import { gql } from 'apollo-server'

export const userTypeDefs = gql`
  type Query {
    user: User
    users: [User]!
  }

  type User {
    id: ID
    name: String
  }
`
