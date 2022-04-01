const EmployeeModel = require('../models/employee.model');

// create new company
exports.createNewEmployee = (req, res) =>{
    const employeeReqData = new EmployeeModel(req.body);
    console.log('employeeReqData', employeeReqData);
    EmployeeModel.createEmployee(employeeReqData, (err, employee)=>{
        if(err){
            res.json({success:0, message:err});
        }else if(employee == "Email Already Exists") {
            res.json({success:0,  message:employee});
        }else{
            res.json({success:1,  message:"Data Added Successfully"});
        }
    });
}