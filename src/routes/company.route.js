const express = require('express');
const router = express.Router();

const companysController = require('../controllers/company.controller');

const { addUserValidation } = require('../../validation/users/user.validation');

// create new company
router.post('/addCompany', addUserValidation, companysController.createNewCompany);

module.exports = router;