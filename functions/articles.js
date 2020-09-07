
const fetch = require("node-fetch");

exports.handler = async function(event, context, callback) {

    const myusername = "shrutikapoor08";
    console.log(event);
    const username =  event.body.input.username || myusername;
    const API_ENDPOINT = `https://dev.to/api/articles?username=${username}`;
    const response = await fetch(API_ENDPOINT, {
        headers: { "Accept": "application/json" }
    });

    const dataJson = await response.json();   

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