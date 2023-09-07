const users = require('./users.json')

const addUserOptions = {
    schema: {
        body: {
            type: 'object' ,
            properties: {
                name: {
                    type: 'string'
                },
                age: {
                    type: ['number', 'string']
                },
                gender: {
                    type: 'string',
                    enum: ['male', 'female', 'others']
                },
            },
            required: ['name', 'gender']
        }
    }
}
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

    app.post('/addUser', addUserOptions, (request) => {
        const id = users.length + 1

        const newUser = { ...request.body, id }

        users.push(newUser)

        return newUser
    })
    done()
}



module.exports = handler
