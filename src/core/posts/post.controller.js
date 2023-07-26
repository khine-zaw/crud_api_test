var Queries = require('./post.models');

exports.getIndexPage = (req,res) => {
    res.render('post');
}

exports.getPosts = (req, res) =>{
    Queries.getPosts((err,results)=>{
        if(err){
            res.status(404).json({
                "code": 404,
                "message": err
            });
        }else{
           res.status(200).json({
                "code": 200,
                "message": "Posts List",
                "data": results
           });
        }
    })
}

exports.createPost = (req, res) => {
    var body = req.body;
    var dataSet = [
        body.post_name,
        body.post_author,
        body.post_description,
    ]
    Queries.createPost(dataSet,(err,results) => {
        if(err){
            res.status(404).json({
                "code": 404,
                "message": err
            });
        }else{
            res.status(200).json({
                "code": 200,
                "message": "successful created",
            });
        } 
    });
}

exports.postDetails = (req,res) =>{

    var p_id = req.params.id;

    Queries.postDetails(p_id, (err,results)=>{
        if(err){
            res.status(404).json({
                "code": 404,
                "message": err
            });
        }else{
            res.status(200).json({
                "code": 200,
                "message": `${results.post_name} Details`,
                "data": results
            })
        }
    })
}

exports.updatePost = (req, res) => {
    var p_id = req.params.id;
    var body = req.body;
    console.log(body);
    Queries.updatePost(body,p_id).then((results)=>{
        console.log(results);
        res.status(200).json({
            "code": 200,
            "message": "updated successful",
            data : results
        });
    }).catch((err)=>{
        res.status(404).json({
            "code": 404,
            "message": err
        });
    });
}

//post delete
exports.deletePost = (req, res) => {
    var p_id = req.params.id;

    Queries.deletePost(p_id).then((results)=>{
        res.status(200).json({
            "code": 200,
            "message": "Delete Successful",
            data : results
        });
    }).catch((err)=>{
        res.status(404).json({
            "code": 404,
            "message": err
        })
    })
}