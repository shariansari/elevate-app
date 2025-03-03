import { REGXEMAIL, STROGNPASSWORD } from "../constant/Regex"

export const LoginValidation = (json) => {

    const MyPromiss = new Promise((resolve, reject) => {

        var errorJson = {}

       
        if (json?.email === "" || json.email == undefined) {
            Object.assign(errorJson, { email: "Field cannot be empty *" })
        }
        if (json?.password === "" || json.password == undefined) {
            Object.assign(errorJson, { password: "Field cannot be empty *" })
        }
       
        if (json?.email?.length > 0) {
            if (!REGXEMAIL.test(json?.email)) {
                Object.assign(errorJson, { email: "Invalid Email Address *" })
            }
        }
      
       
        
        resolve(errorJson)

    })

    return MyPromiss;
}