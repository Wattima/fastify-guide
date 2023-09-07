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
            required: ['name', 'gender'],
            additionalProperties: false,
        }
    }
}

module.exports = { addUserOptions }
