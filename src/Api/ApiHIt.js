
export const HitApi =  (json, api) => {

    console.log("json",json);
    console.log("api",api);

    

    return new Promise(function (resolve, reject) {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(json)
      };
      fetch(api, requestOptions)
        .then(res => res.json())
        .then(
          (result) => {
            console.log('result',result);
            resolve(result);
           
          },
          (error) => {
  
            resolve(error);
          }
        ).catch((err) => {
          resolve(err)
        })
    })
  }