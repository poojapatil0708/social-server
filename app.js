const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/', (req,res)=>{
    res.status(200).send("Hello world")
}),

app.listen(8000, ()=> console.log("Server is listning on port 8000"))