const joi=require('joi');

function userValidation(user){
    const schema=joi.object({
        name:joi.string().min(3).required(),
       
        phone:joi.string().min(10).max(12).required(),
        
        email:joi.string().email().required(),
        
        type:joi.string().required(),
        
        address:joi.object({
            county:joi.string(),
            city:joi.string(),
            area:joi.string(),
            landmark:joi.string(),
            pincode:joi.string()
        })
    })

    return schema.validate(user);
}

module.exports=userValidation;