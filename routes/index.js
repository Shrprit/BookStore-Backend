
const adminRoutes = require("./admin")



module.exports = function(app){
    app.use("/api/admin",adminRoutes)
}