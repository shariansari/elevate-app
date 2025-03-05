import { regexmobilePattern, REGXEMAIL, STROGNPASSWORD } from "../constant/Regex"

export const LoginValidation = (json) => {

    console.log("json", json);


    const MyPromiss = new Promise((resolve, reject) => {

        var errorJson = {}
        if (json?.contact === "" || json.contact == undefined) {
            console.log("yess");
            
            Object.assign(errorJson, { contact: "Field cannot be empty *" })
        }
        if (json?.contact?.length > 0) {
            console.log("yess11");
            if (!regexmobilePattern?.test(json?.contact)) {
                Object.assign(errorJson, { contact: "Invalid Email Address *" })
            }
        }
        resolve(errorJson)

    })

    return MyPromiss;
}