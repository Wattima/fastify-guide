const fastify = require("fastify")



const app = fastify({logger:true})

app.register(require('./routers'))


const PORT = process.env.PORT || 8000



 // domain.com/getUsers?gender=male
 // twitter.com/username

app.listen(PORT).catch((error) => {
    app.log.error(error)
        process.exit()
})
