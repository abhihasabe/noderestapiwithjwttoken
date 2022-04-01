var dbConn  = require('../../config/db.config');

var Companys = function(companys){
    this.company_name       =   companys.company_name;
    this.company_type       =   companys.company_type;
    this.company_email      =   companys.company_email;
    this.company_phone      =   companys.company_phone;
    this.company_fax        =   companys.company_fax;
    this.company_address    =   companys.company_address;
    this.company_branch     =   companys.company_branch;
    this.company_pincode    =   companys.company_pincode;
    this.company_country    =   companys.company_country;
    this.company_website    =   companys.company_website;
    this.company_info       =   companys.company_info;
}


// get all Country
Companys.getAllCountrys = (result) =>{
    dbConn.query('SELECT * FROM country_table', (err, res)=>{
        if(err){
            console.log('Error while fetching companys Type', err);
            result(null,err);
        }else{
            console.log('companys Type fetched successfully');
            result(null,res);
        }
    })
}


// get all companys City
Companys.getCityByCountry = (cid, result) =>{
    dbConn.query('SELECT * FROM city_table WHERE country_id=? ', cid, (err, res)=>{
        if(err){
            console.log('Error while fetching City', err);
            result(null,err);
        }else{
            console.log('City fetched successfully');
            result(null,res);
        }
    })
}

// get all companys Types
Companys.getAllCompanysTypes = (result) =>{
    dbConn.query('SELECT * FROM company_types_table', (err, res)=>{
        if(err){
            console.log('Error while fetching companys Type', err);
            result(null,err);
        }else{
            console.log('companys Type fetched successfully');
            result(null,res);
        }
    })
}


Companys.getAllUserTypes = (result) =>{
    dbConn.query('SELECT * FROM users_types_table', (err, res)=>{
        if(err){
            console.log('Error while fetching companys Type', err);
            result(null,err);
        }else{
            console.log('companys Type fetched successfully');
            result(null,res);
        }
    })
}

Companys.getAttendanceTypes = (result) =>{
    dbConn.query('SELECT * FROM attendance_type_table', (err, res)=>{
        if(err){
            console.log('Error while fetching companys Type', err);
            result(null,err);
        }else{
            console.log('companys Type fetched successfully');
            result(null,res);
        }
    })
}

Companys.getAllInventoryTypes = (result) =>{
    dbConn.query('SELECT * FROM inventory_types_table', (err, res)=>{
        if(err){
            console.log('Error while fetching companys Type', err);
            result(null,err);
        }else{
            console.log('companys Type fetched successfully');
            result(null,res);
        }
    })
}

module.exports = Companys;