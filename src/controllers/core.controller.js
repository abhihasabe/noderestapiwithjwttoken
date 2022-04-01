const req = require('express/lib/request');
const CompanyModel = require('../models/core.model');

// get countrys
module.exports.getCountrys = (req, res)=> {
    //console.log('here all Company list');
    CompanyModel.getAllCountrys((err, company) =>{
        if(err)
        res.status(500).json({success:0, message:err, data:company});
        console.log('single employee data',company);
        res.json({success:1, message:"Data Fetch Successfully", data:company});
    })
}

// get city by Country ID
module.exports.getCityByCountryID = (req, res)=>{
    //console.log('get emp by id');
    CompanyModel.getCityByCountry(req.params.id, (err, company)=>{
        if(err)
        res.json({success:0, message:err, data:company});
        console.log('single employee data',company);
        res.json({success:1, message:"Data Fetch Successfully", data:company});
    })
}

// get all Company Types
module.exports.getCompanysTypeList = (req, res)=> {
    //console.log('here all Company list');
    CompanyModel.getAllCompanysTypes((err, company) =>{
        if(err)
        res.json({success:0, message:err, data:company});
        console.log('single employee data',company);
        res.json({success:1, message:"Data Fetch Successfully", data:company});
    })
}


module.exports.getUserType = (req, res)=> {
    //console.log('here all Company list');
    CompanyModel.getAllUserTypes((err, company) =>{
        console.log('We are here');
        if(err)
        res.json({success:0, message:err, data:company});
        console.log('single employee data',company);
        res.json({success:1, message:"Data Fetch Successfully", data:company});
    })
}

module.exports.getAttendanceTypes = (req, res)=>{
    CompanyModel.getAttendanceTypes((err, company) =>{
        console.log('We are here');
        if(err)
        res.json({success:0, message:err, data:company});
        console.log('single employee data',company);
        res.json({success:1, message:"Data Fetch Successfully", data:company});
    })
}

module.exports.getInventoryTypes = (req, res)=>{
    CompanyModel.getAllInventoryTypes((err, company) =>{
        console.log('We are here');
        if(err)
        res.json({success:0, message:err, data:company});
        console.log('single employee data',company);
        res.json({success:1, message:"Data Fetch Successfully", data:company});
    })
}