const { Schema, model } = require('mongoose');

const contactsSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String, 
            require: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must use a valid email address'],
        },
        message: {
            type: String,
        }
    }
)

const Contacts = model('Contacts', contactsSchema);

module.exports =  Contacts ;