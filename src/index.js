const fastify = require("fastify")

const users = require('./users.json')

const app = fastify({logger:true})


const PORT = process.env.PORT || 8000

app.get('/getUsers', (request, reply) => {
    const {gender} = request.query

    if (!gender) return users

    const filteredUsers = users.filter((user) => user.gender.toLowerCase() == gender.toLowerCase())
    return filteredUsers;
 })

 // domain.com/getUsers?gender=male

app.listen(PORT).catch((error) => {
    app.log.error(error)
        process.exit()
})
