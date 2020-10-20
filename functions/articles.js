
const fetch = require("node-fetch");

exports.handler = async function(event, context, callback) {

    const myusername = "shrutikapoor08";
    const graphQLParams =  event.body ? JSON.parse(event.body) : undefined
    const username = graphQLParams ? graphQLParams.input.username : myusername;
    const API_ENDPOINT = `https://dev.to/api/articles?username=${username}`;
    const response = await fetch(API_ENDPOINT, {
        headers: { "Accept": "application/json" }
    });

    const dataJson = await response.json();   

    const dataMapper = dataJson.reduce( (arr, item) => { 
        arr.push ({
        title: item.title,
        id: item.id,
        date_published: item["readable_publish_date"],
        url: item.url,
        reactions: item["public_reactions_count"],
            profile_image: item["social_image"]
    })
    return arr;
}, [])

    console.log(dataMapper)

     return callback(null, {
        statusCode: 200,
        body: JSON.stringify({
           articles: dataMapper
        })
    });
}