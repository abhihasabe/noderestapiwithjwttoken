const express = require('express');
const router = express.Router();

const companysController = require('../controllers/company.controller');

const { addUserValidation } = require('../../validation/users/user.validation');

const checkAuth = require('../../validation/token/token_validation');

// create new company
router.post('/addCompany', addUserValidation, checkAuth, companysController.createNewCompany);

module.exports = router;