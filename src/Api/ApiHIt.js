import { domainId } from "../constant/Constant";

export const HitApi =  (json, api) => {

    console.log("json",json);
    console.log("api",api);

    

    return new Promise(function (resolve, reject) {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(json)
      };
      fetch(api, requestOptions)
        .then(res => res.json())
        .then(
          (result) => {
            console.log('result----',result);
            resolve(result);
           
          },
          (error) => {
            console.log('error----',error);
            // resolve(error);
          }
        ).catch((err) => {
          // resolve(err)
        })
    })
  }






export const salonistHitApi = (json, api) => {
  console.log("json", json);
  console.log("api", api);

  return new Promise(function (resolve, reject) {
      const formData = new FormData();

      // Append all keys from json to FormData
      Object.keys(json).forEach(key => {
          formData.append(key, json[key]);
      });

      const requestOptions = {
          method: 'POST',
          headers: { 'Accept': 'application/json' }, 
          // No 'Content-Type': 'multipart/form-data' (Browser sets it automatically)
          body: formData
      };

      fetch(api, requestOptions)
          .then(res => res.json())
          .then(
              (result) => {
                  console.log('result', result);
                  resolve(result);
              },
              (error) => {
                  resolve(error);
              }
          )
          .catch((err) => {
              resolve(err);
          });
  });
};
