const fetch = require("node-fetch");

exports.handler = async function(event, context, callback) {
    const API_ENDPOINT = `https://dev.to/api/comments`;
const payload = {"comment":{"body_markdown":"test comment","commentable_id":"460826","commentable_type":"Article","parent_id":null}}
    const response = await fetch(API_ENDPOINT, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload)
    });


    console.log(response);


    // const dataJson = await response.json();   

    // console.log({dataJson});

     // success
     return callback(null, {
        statusCode: 200,
        body: JSON.stringify(
            {"test": "hello"}
        )
    });
}
