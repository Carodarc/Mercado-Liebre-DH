const express = require('express');
const app = express();

const path =require('path');

const port = 3000

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, 'src', 'views', 'home.html'))
})

app.listen(port, ()=>[
    console.log(`Servidor corriendo en http://localhost:${port} 😎`)
])

app.use(express.static(path.join(__dirname, 'public')))