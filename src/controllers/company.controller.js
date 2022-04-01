const CompanyModel = require('../models/company.model');

// create new company
exports.createNewCompany = (req, res) =>{
    const companyReqData = new CompanyModel(req.body);
    console.log('companyReqData', companyReqData);
    CompanyModel.createCompany(companyReqData, (err, company)=>{
        if(err){
            res.json({success:0, message:err});
        }else if(company == "Email Already Exists") {
            res.json({success:0,  message:company});
        }else{
            res.json({success:0,  message:"Data Added Successfully"});
        }
    });
}