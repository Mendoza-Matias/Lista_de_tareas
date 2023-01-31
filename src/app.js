const express = require('express');
const {engine} = require('express-handlebars');
const path = require('path')
const moongose = require('mongoose')

const app = express();

//Handlebars config
app.set('views',path.join(__dirname,'views'))

app.engine('.hbs', engine({
    defaultLayout:'home',
    layoutsDir:path.join(app.get('views'),'layouts'),
    extname:'.hbs'
    
}));
app.set('view engine', '.hbs');
//Middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))


//Rutas
app.use(require('./routes/mostrarNota'))
app.use(require('./routes/crearNota'))
app.use(require('./routes/editarNota'));
app.use(require('./routes/eliminarNota'))


//Conectar la base de datos
async function conectarDb (){
    try {
        console.log('Iniciando conección')
        
        moongose.set('strictQuery',false)

        await moongose.connect ('mongodb://127.0.0.1:27017/notas');
    
    } catch (error) {
        console.log('Hubo un problema')
    }
}
conectarDb()



//Conectar el servidor
const PORT = 8082

app.listen(PORT,()=>{
    console.log('conectado')
})
