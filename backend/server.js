const express = require('express');
const server = express();

const PORT = 8000;

server.get('/',(req,res)=>{
    res.send("hello");
});

server.listen(8000,()=>{
    console.log(`server is listeing on the port http://localhost:${PORT}`);
})