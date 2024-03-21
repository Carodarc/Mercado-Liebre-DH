const express = require('express');
const app = express();

const path = require('path');
app.use(express.static(path.join(__dirname, 'src', 'public')));

const port = 3001;

app.listen(port, ()=>{
    console.log(`Servidor corriendo en http://localhost:${port}`)
});

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, 'src', 'views', 'home.html'));
})

app.get('/register',(req, res)=>{
    res.sendFile(path.join(__dirname, 'src', 'views', 'register.html'))
  
  });
  
  app.get('/login',(req, res)=>{
    res.sendFile(path.join(__dirname, 'src', 'views', 'login.html'))
    
  });
  
  app.get('*', (req, res)=>{
      res.send(`
      <div style="display:flex; flex-direction:column; align-items:center">
      <h1>Esta pagina no existe</h1>
      <img style="width:50%" src="/img/not-found.webp" alt="error-404">
      </div>  
      `)
    })
   
