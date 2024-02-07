const jwt = require("jsonwebtoken");

module.exports = function(req,res,next){
    try {
        // split because used " Bearer + token "
        console.log(req.headers.authorization);
        const token = req.headers.authorization.split(' ')[1];
        console.log('Hi, I am auth middleware', token)
        console.log('env....',process.env.JWT_SECRET_KEY);
        const decodedToken  = jwt.verify(token, process.env.JWT_SECRET_KEY);
        console.log(decodedToken );
        console.log(decodedToken.userId);
        req.body.userId = decodedToken.userId;
        next();
    } catch (error) {
        res.send({
            success:false, 
            message:error
        })
    }
}