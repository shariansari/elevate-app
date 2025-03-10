import { REGXEMAIL, STROGNPASSWORD } from "../constant/Regex"

export const RegisterValidation = (json) => {

    const MyPromiss = new Promise((resolve, reject) => {

        var errorJson = {}

        if (json?.name === "" || json.name == undefined) {
            Object.assign(errorJson, { name: "Field cannot be empty *" })
        }
        if (json?.email === "" || json.email == undefined) {
            Object.assign(errorJson, { email: "Field cannot be empty *" })
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