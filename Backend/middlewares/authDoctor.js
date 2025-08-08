import jwt from 'jsonwebtoken'

//Doctor authentication middleware
const authDoctor = async (req,res,next) => {
    try{

        const { dtoken } = req.headers
        if (!dtoken) {
            return res.json({success:false,message:'Not Autherized Login Again'})
        }
        const decoded = jwt.verify(dtoken,process.env.JWT_SECRET)
        req.doctorId = decoded.id
        next()

    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message });
    }
}
export default authDoctor