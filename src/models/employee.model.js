var dbConn  = require('../../config/db.config');

var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

const salt = bcrypt.genSaltSync(10);

console.log(salt);

var Employee = function(employee){
    this.employee_name                  =   employee.employee_name;
    this.employee_dob                   =   employee.employee_dob;
    this.employee_gender                =   employee.employee_gender;
    this.employee_mobileno              =   employee.employee_mobileno;
    this.employee_alternate_mobileno    =   employee.employee_alternate_mobileno;
    this.employee_email                 =   employee.employee_email;
    this.employee_dept                  =   employee.employee_dept;
    this.employee_dateofjoining         =   employee.employee_dateofjoining;
    this.employee_working_location      =   employee.employee_working_location;
    this.employee_end_date              =   employee.employee_end_date;
    this.employee_blood_group           =   employee.employee_blood_group;
    this.employee_address               =   employee.employee_address;
    this.employee_aadharno              =   employee.employee_aadharno;
    this.employee_panno                 =   employee.employee_panno;
    this.employee_pfno                  =   employee.employee_pfno;
    this.employee_esicno                =   employee.employee_esicno;
    this.employee_wcpolicy              =   employee.employee_wcpolicy;
    this.employee_bank_acno             =   employee.employee_bank_acno;
    this.employee_company_id            =   employee.employee_company_id;
    this.password                       =   employee.employee_name!=null?
                                                bcrypt.hashSync(employee.password, salt):
                                                employee.password;
}


// create new company
Employee.createEmployee = (employeeReqData, result) =>{
    dbConn.query('SELECT * FROM employee_table WHERE employee_email=?', employeeReqData.employee_email, (err, res)=>{
        if(err){
            console.log('Error while fetching employee by id', err);
            result(null, err);
        }else{
            console.log('by id',res.length);
            if(res.length==0){
                dbConn.query('INSERT INTO employee_table SET ? ', employeeReqData, (err, res)=>{
                    if(err){
                        console.log('Error while inserting data');
                        result(err, null);
                }   else{
                        console.log('employee created successfully');
                        result(null, employeeReqData)
                    }
                });
            }else{
                result(null, "email is already been registered");
            }
        }
    })
}

// Login
Employee.login = (employeeReqData,result) =>{
    dbConn.query('SELECT * FROM employee_table WHERE employee_email=?',employeeReqData.employee_email, (err, res)=>{
        if(err){
            console.log('Error while fetching companys Type', err);
            result(null,err);
        }else{
            if(res.length>0){
                bcrypt.compare(employeeReqData.password, res[0].password,function(err, results) {
                    // result == true
                    if(err){
                        console.log(" Comparision" ,err);
                    }else{
                        if(results==true){
                            var token = jwt.sign(
                                {
                                username:res[0].employee_name,
                                dob:res[0].employee_dob
                            }, 'secret', 
                            {
                                expiresIn:"1h"
                            })
                            result(null,res[0], token);
                        }else{
                            console.log('User Dose Not Exits');
                            result(null,"User Dose Not Exits");
                        }
                    }
                });
            }else{
                console.log('User Dose Not Exits');
                result(null,"User Dose Not Exits");
            }
        }
    })
}


module.exports = Employee;