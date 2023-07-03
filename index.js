const express = require('express')

const app = express();

const route  = require('./routes/routes');
const commonMiddleware = require('./middleware/commonMiddleware');

app.get('/', (req,res)=>{

    res.send("<h1>main page</h1>")
  
    return res.end()
})

app.use('/user',commonMiddleware,route)


app.listen(8080,()=>{
    console.log("Server is running fine");
})