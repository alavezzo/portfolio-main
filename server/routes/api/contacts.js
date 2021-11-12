const router = require('express').Router();
const { createContact, getContacts } = require('../../controllers/contacts-controllers');

router.route('/').post(createContact).get(getContacts)

module.exports = router;