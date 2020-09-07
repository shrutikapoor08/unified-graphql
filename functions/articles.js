
const fetch = require("node-fetch");

exports.handler = async function(event, context, callback) {

    const myusername = "shrutikapoor08";
    console.log(event);
    const username =  event.queryStringParameters.username || myusername;
    const API_ENDPOINT = `https://dev.to/api/articles?username=${username}`;
    const response = await fetch(API_ENDPOINT, {
        headers: { "Accept": "application/json" }
    });


    const dataJson = await response.json();
     console.log(dataJson[0]);   
   
     /*
     // In case of errors:
     return res.status(400).json({
       message: "error happened"
     })
     */
   
     // success
     return callback(null, {
        statusCode: 200,
        body: JSON.stringify({
            title: dataJson[0].title,
            description: dataJson[0].description,
            id: dataJson[0].id
        })
    });
}