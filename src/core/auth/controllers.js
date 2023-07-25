var Model = require("./models");

exports.login = async (req, res) => {
    try{
        let results = await Model.user_login();
        apiResponses.success(200, "message", data)
    }catch(err){
        res.status(404).json({
            err
        });
    }
}