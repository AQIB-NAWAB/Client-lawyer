// craeting token and savving cookie
const sendToken = (user, statusCode, res)=>{
    const token = user.getJWTToken();
     
    // console.log(token);
    // option for Cookie
    const options = {
        httpOnly:true,
        path:"/api/v1",
        expires:new Date(
            // Date.now() + process.env.COOKIE_EXPIRE *24*60*60*1000
            Date.now() + 5*24*60*60*1000
        ),
        secure: true,
        domain: 'https://attorney-ease.vercel.app'

    };
 
    res.status(statusCode).cookie('token',token,options).json({
        success:true,
        user,
        token
    });
}

module.exports = sendToken