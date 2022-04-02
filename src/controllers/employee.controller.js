const EmployeeModel = require('../models/employee.model');

// create new company
module.exports.createNewEmployee = (req, res) =>{
    const employeeReqData = new EmployeeModel(req.body);
    console.log('employeeReqData', employeeReqData);
    EmployeeModel.createEmployee(employeeReqData, (err, result)=>{
        if(err){
            res.json({success:0, message:err});
        }else if(result == "email is already been registered") {
            res.json({success:0,  message:result});
        }else{
            res.json({success:1,  message:"Data Added Successfully", data:result});
        }
    });
}

// get countrys
module.exports.authentication = (req, res)=> {
    const employeeReqData = new EmployeeModel(req.body);
    //console.log('here all Company list');
    EmployeeModel.login(employeeReqData, (err, result, token) =>{
        if(err){
            res.status(500).json({success:0, message:err, data:result});
        }else if(result =="User Dose Not Exits"){
            res.json({success:0, message:"User Dose Not Exist"});
        }else{
            res.json({success:1, message:"Data Fetch Successfully",token:token, data :result});
        }
    })
}


// Refresh token
module.exports.refreshToken = (req, res)=> {
    const employeeReqData = new EmployeeModel(req.body);
    //console.log('here all Company list');
    EmployeeModel.refresh(employeeReqData, (err, result) =>{
        if(err){
            res.status(500).json({success:0, message:err});
        }else{
            res.json({success:1, message:"refresh token successfully",token:result});
        }
    })
}