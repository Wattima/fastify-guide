const Ajv = require("ajv")

const ajv = new Ajv({
    // removeAdditional: true,

    coerceTypes: false,

})

const fastify = require("fastify")

const app = fastify({logger:true})

app.setValidatorCompiler(({ schema, method, url, httpPart }) => {
    return ajv.compile(schema)
})

app.register(require('fastify-formbody'))

app.register(require('./routers'), {
    prefix: '/api',
})



const PORT = process.env.PORT || 8000



 // domain.com/getUsers?gender=male
 // twitter.com/username

app.listen(PORT).catch((error) => {
    app.log.error(error)
        process.exit()
})
