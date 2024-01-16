import fastify from 'fastify'

const port = 3333

const app = fastify()

app.listen({ port }).then(() => {
  console.log(`HTTP Server running on port ${port}`)
})
