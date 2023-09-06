const users = require('./users.json')

const handler = (app, opts, done) => {
    app.get('/getUsers', (request, reply) => {
        const {gender} = request.query

        if (!gender) return users

        const filteredUsers = users.filter((user) => user.gender.toLowerCase() == gender.toLowerCase())
        return filteredUsers;
     })

    app.get('/getUser/:id', (request, reply) => {
        const id = parseInt(request.params.id, 10)

        const user = users.find(user => user.id == id)

        return user || reply.status(404).send({
            msg: "User not found"
        })
    })
    done()
}



module.exports = handler
