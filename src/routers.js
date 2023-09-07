const { addUserOptions } = require('./options')
const { getUsers, getUserById, addUser } = require('./handlers')

const handler = (app, opts, done) => {
	app.get('/getUsers', getUsers)

	app.get('/getUser/:id', getUserById)

	app.post('/addUser', addUser)

	done()
}

module.exports = handler
