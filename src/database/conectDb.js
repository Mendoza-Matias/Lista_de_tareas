const moongose = require('mongoose');


const conectDatabase = async () =>{
    try {

        await moongose.connect(process.env.MONGO_URI);
        console.log('ok conection')
        
    
    } catch (error) {
        console.log("error with conection");
    }
}

module.exports = conectDatabase;
