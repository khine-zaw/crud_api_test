const Queries = require("./queries");
const { MySQL } = require("../../database/db_helper");

exports.user_login = (data) => {
    return new Promise((resolve, reject) => {
        MySQL.query(Queries.POST_LOGIN, function(err, result) {
            if(err){
                reject(err);
            }else{
                resolve(result);
            }
        });
    });
}