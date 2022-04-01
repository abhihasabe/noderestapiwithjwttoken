const joi = require("@hapi/joi");

const schema = {
    user: joi.object({
        company_name: joi.string().max(100).required(),
        company_type: joi.number().required(),
        company_email: joi.string().email().required(),
        company_phone: joi.number().integer().min(1000000000).message("Invalid mobile number").max(9999999999).message("Invalid mobile number").required(),
        company_fax: joi.string().allow('',null),
        company_address: joi.string().allow('',null),
        company_branch: joi.number().required(),
        company_pincode: joi.number().allow('',null),
        company_country: joi.number().required(),
        company_website: joi.string().allow('',null),
        company_info: joi.string().allow('',null),
    })
};

module.exports = schema;