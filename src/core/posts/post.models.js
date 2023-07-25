var {MySQL} = require('../../database/db_helper');

//view post list
exports.getPosts = (cb) => {

    var q = `SELECT * FROM tbl_posts`;
    
    MySQL.query(q, (err,results) => {
        if(err){
            console.log(err);
            cb(err, null);
        }else{
            cb(null, results)
        }
    })
}

//create post
exports.createPost = (data,cb) => {
    
    var query = `
    INSERT INTO tbl_posts (post_name,post_author,post_description,createdAt,updatedAt)
    VALUES (?,?,?,now(),now());
    `;

    MySQL.query_filter(query, data,(err,results) => {
        if(err){
            cb(err, null);
        }else{
            cb(null, 'Data Create Done')
        }
    })
}

//post details
exports.postDetails = (id,cb) => {
    var dataset= [id];
    var query = `
    SELECT * FROM tbl_posts WHERE id = ?`;
    MySQL.query_filter(query,dataset,(err,results)=>{
        if(err){
            cb(err,null);
        }else{
            cb(null, results[0]);
        }
    })
}