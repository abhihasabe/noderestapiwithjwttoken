const express = require('express');
const router = express.Router();

const companysController = require('../controllers/core.controller');

// get All Countrys
router.get('/getCountries',companysController.getCountrys);

// get City By CountryID
router.get('/getCityByCountryID/:id',companysController.getCityByCountryID);

// get all companys Type
router.get('/getCompanyTypes', companysController.getCompanysTypeList);

//get all User Typs
router.get('/getUserTypes', companysController.getUserType);

//get Attendance Type
router.get('/getAttendanceTypes', companysController.getAttendanceTypes);

//get Inventory Type
router.get('/getInventoryTypes', companysController.getInventoryTypes);

module.exports = router;