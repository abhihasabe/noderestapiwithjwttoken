const express = require('express');
const router = express.Router();

const companysController = require('../controllers/core.controller');

const checkAuth = require('../../validation/token/token_validation');

// router.get("/getCountries", checkAuth, function(req, res, next){

//     console.log("req.token",req.token);
//     companysController.getCityByCountryID;
// });

// get All Countrys
router.get('/getCountries',checkAuth, companysController.getCountrys);

// get City By CountryID
router.get('/getCityByCountryID/:id',checkAuth, companysController.getCityByCountryID);

// get all companys Type
router.get('/getCompanyTypes', checkAuth, companysController.getCompanysTypeList);

//get all User Typs
router.get('/getUserTypes',checkAuth, companysController.getUserType);

//get Attendance Type
router.get('/getAttendanceTypes', companysController.getAttendanceTypes);

//get Inventory Type
router.get('/getInventoryTypes', companysController.getInventoryTypes);

module.exports = router;