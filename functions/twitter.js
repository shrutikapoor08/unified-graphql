
const fetch = require("node-fetch");

exports.handler = async function(event, context, callback) {

    const myUsername = "shrutikapoor08";
    const graphQLParams =  event.body ? JSON.parse(event.body) : undefined
    const username = graphQLParams ? graphQLParams.input.username : myUsername;
    const API_ENDPOINT = `https://dev.to/api/articles?username=${username}`;
    const response = await fetch(API_ENDPOINT, {
        headers: { "Accept": "application/json" }
    });

    const dataJson = await response.json();   

    const dataMapper = dataJson.reduce( (arr, item) => { 
        arr.push ({
        title: item.title,
        id: item.id,
        date_published: item.published_at,
        url: item.url
    })
    return arr;
}, [])

     return callback(null, {
        statusCode: 200,
        body: JSON.stringify({
           articles: dataMapper
        })
    });
}