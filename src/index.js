const fastify = require("fastify")

const users = require('./users.json')

const app = fastify({logger:true})


const PORT = process.env.PORT || 8000

app.get('/getUsers', (request, reply) => {
    return users;
 })

app.listen(PORT).catch((error) => {
    app.log.error(error)
        process.exit()
})
