const { response } = require('express');
const express = require('express');
// const { readFile } = require('fs');
 

const app = express();

// app.get('/',(resquest,response)=>{
//     // Below one is callback based which could lead to callback hell
//     // readFile('app/home.html','utf8',(err,html) =>{
//     //     if(err){
//     //         response.status(500).send('Sorry, we are out');
//     //     }
//     //     response.send(html);
//     // })


// })

app.listen(process.env.PORT || 3000 , ()=> console.log(`App is available on http://localhost:3000`));

 
const {readFile} = require('fs').promises;


app.get('/', async (request,response) => {
    response.send(await readFile('app/home.html','utf8'));
});
