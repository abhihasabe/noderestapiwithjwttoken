const express = require('express');
const router = express.Router();

const companysController = require('../controllers/master.controller');

const checkAuth = require('../../helper/token/token_helper');

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
router.get('/getAttendanceTypes', checkAuth, companysController.getAttendanceTypes);

//get Inventory Type
router.get('/getInventoryTypes', checkAuth, companysController.getInventoryTypes);

//get all data count
router.get('/getCount', checkAuth, companysController.getCountData);

module.exports = router;