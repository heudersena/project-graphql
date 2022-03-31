import { ApolloServer } from 'apollo-server'
import 'dotenv/config'
import { resolvers, typeDefs } from './graphql/schema'

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server.listen(4000).then(({ url }) => {
  console.log(`${url}`)
})
