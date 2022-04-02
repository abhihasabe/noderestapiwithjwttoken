const joi = require("@hapi/joi");


const strongPasswordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,15}$/;


const schema = {
    employee: joi.object({
        employee_name:                  joi.string().max(100).required(),
        employee_dob:                   joi.date().raw().required(),
        employee_gender:                joi.string().valid("Male", "Female", "Other").required(),
        employee_mobileno:              joi.number().integer().min(1000000000).message("Invalid mobile number").max(9999999999).message("Invalid mobile number").required(),
        employee_alternate_mobileno:    joi.number().integer().min(1000000000).message("Invalid mobile number").max(9999999999).message("Invalid mobile number").allow('',null),
        employee_email:                 joi.string().email().required(),
        employee_dept:                  joi.number().required(),
        employee_dateofjoining:         joi.date().raw().required(),
        employee_working_location:      joi.number().required(),
        employee_end_date:              joi.date().raw().allow('',null),
        employee_blood_group:           joi.string().allow('',null),
        employee_address:               joi.string().required(),
        employee_aadharno:              joi.string().allow('',null),
        employee_panno:                 joi.string().allow('',null),
        employee_pfno:                  joi.string().allow('',null),
        employee_esicno:                joi.string().allow('',null),
        employee_wcpolicy:              joi.string().allow('',null),
        employee_bank_acno:             joi.string().allow('',null),
        employee_company_id:            joi.number().required(),
        password:                       joi.string().regex(strongPasswordRegex).message("Password must be strong. At least one upper case alphabet. At least one lower case alphabet. At least one digit. At least one special character. Minimum six in length").required()
    })
};

module.exports = schema;