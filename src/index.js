const fastify = require("fastify")

const app = fastify({logger:true})


const PORT = process.env.PORT || 8000


app.listen(PORT).catch((error) => {
    app.log.error(error)
        process.exit()
})
