const express = require('express');
const router = express.Router();

const employeeController = require('../controllers/employee.controller');

const { addEmployeeValidation } = require('../../validation/employee/employee.validation');

// create new company
router.post('/addEmployee',addEmployeeValidation, employeeController.createNewEmployee);

module.exports = router;