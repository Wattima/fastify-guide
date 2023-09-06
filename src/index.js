const fastify = require("fastify")

const app = fastify({logger:true})


const PORT = process.env.PORT || 8000

app.get('/hello', (request, reply) => {
    return 'Hello World'
 })

app.listen(PORT).catch((error) => {
    app.log.error(error)
        process.exit()
})
