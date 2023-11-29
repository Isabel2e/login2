const mysql = require ('mysql');

const conection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
})

conection.connect((error) =>{
    if(error){
        console.log('Error de Conexión a la Base de Datos'+ error)
    }
    else { console.log('Conexión segura');
    }   
}) 

module.exports = conection;



