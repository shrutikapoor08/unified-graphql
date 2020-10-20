process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0

const fetch = require("node-fetch");

exports.handler = async function(event, context, callback) {
    const token = event.headers.token;

    const API_ENDPOINT = 'https://api.github.com/graphql';
    const response = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ query: '{ viewer  { repositories(first:100) { nodes { name, description } } } }' }),
    });


    const dataJson = await response.json();

    console.log(dataJson);
     return callback(null, {
        statusCode: 200,
        body: JSON.stringify(dataJson)
    });
}
