const jwt = require("jsonwebtoken");

module.exports = function(req,res,next){
    try {
        // split because used " Bearer + token "
        console.log(req.headers.authorization);
        const token = req.headers.authorization.split(' ')[1];
        console.log('Hi, I am auth middleware', token)
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.body.userId = decoded.userId;
        next();
    } catch (error) {
        res.send({
            success:false, 
            message:"Invalid token"
        })
    }
}