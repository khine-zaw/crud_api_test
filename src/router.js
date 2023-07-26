const authRoutes = require("./core/auth/routes");

module.exports = function(app) {
    // app.use("/", function(req, res){
    //     res.status(200).json({
    //         "status": "Running"
    //     });
    // });
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });
    app.use("/api/auth", authRoutes);

}