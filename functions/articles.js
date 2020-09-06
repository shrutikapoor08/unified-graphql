exports.handler = function(event, context, callback) {
    const response = await fetch('https://dev.to/api/articles?username=shrutikapoor08');
    const dataJson = await response.json();
     console.log(dataJson[0]);
     // run some business logic
   
   
     /*
     // In case of errors:
     return res.status(400).json({
       message: "error happened"
     })
     */
   
     // success
     return res.json({
       title: dataJson[0].title,
       description: dataJson[0].description,
       id: dataJson[0].id
     })
}