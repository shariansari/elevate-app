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
        if (json?.password === "" || json.password == undefined) {
            Object.assign(errorJson, { password: "Field cannot be empty *" })
        }
        if (json?.confirmPassword === "" || json.confirmPassword == undefined) {
            Object.assign(errorJson, { confirmPassword: "Field cannot be empty *" })
        }
        if (json?.contact === "" || json.contact == undefined) {
            Object.assign(errorJson, { contact: "Field cannot be empty *" })
        }
        if (json?.email?.length > 0) {
            if (!REGXEMAIL.test(json?.email)) {
                Object.assign(errorJson, { email: "Invalid Email Address *" })
            }
        }
        if (json?.contact?.length > 0 && json?.contact?.length !== 10) {
            Object.assign(errorJson, { contact: "Invalid Mobile no. *" })
        }
        if (json?.password?.length > 0) {
            if (!STROGNPASSWORD.test(json?.password)) {
                Object.assign(errorJson, { password: "Requires uppercase,lowercase,digit,or special character *" })
            }
        }
            if (json?.password?.length > 0 && json?.confirmPassword?.length > 0 ) {
            if (json?.password !== json?.confirmPassword) {
              Object.assign(errorJson, { confirmPassword: "Password does not match *" })
            }
          }
        resolve(errorJson)

    })

    return MyPromiss;
}