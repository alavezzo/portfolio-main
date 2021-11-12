const Contacts = require('../models');


module.exports = {

    createContact({ body }, res) {
        Contacts.create(body)
            .then(dbContactsData => res.json(dbContactsData))
            .catch(err => es.status(400).json({ err}))
    }, 
    getContacts(req, res) {
        Contacts.find({})
            .then(dbContactsData => res.json(dbContactsData))
            .catch(err => es.status(400).json({ err}))
    }
}
