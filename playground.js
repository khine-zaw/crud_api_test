var mysql = require("./src/database/db_helper");

var process_name = `SELECT now()`;

mysql.query(process_name, function(err, result){
    if(err){
        console.log(err);
    }else{
        console.log(result);
    }
});