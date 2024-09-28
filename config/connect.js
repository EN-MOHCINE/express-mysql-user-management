

// const express =require("express")
// const bodyparser =require("body-parser")
// const cors =require("cors")
// const  mysql =require("mysql2")

// const app=express()

// app.use(cors())
// app.use(bodyparser.json())


// // database Connection
// const db =mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database:"js_commend"  , 
//     port :3306
// });
// // CHECK CONNECTION
// db.connect(function(err) {
//     if (err) throw err;
//         console.log("connected   ....");
//     });



// module.exports.app =app ;
// module.exports.connect  =db ;












// var mysql = require('mysql');

// var con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database:"js_commend" 
    
// });



//connect 

// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
// });





//create bs 

// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     con.query("CREATE DATABASE js_users", function (err, result) {
//         if (err) throw err;
//             console.log("Database created");
//         });
//     });





// create table

// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     var sql = "CREATE TABLE users  (id INT AUTO_INCREMENT PRIMARY KEY,nom VARCHAR(30), prenom VARCHAR(30),Address varchar(255),City varchar(255))";
//     con.query(sql, function (err, result) {
//         if (err) throw err;
//         console.log("Table created");
//     });
// });




//insert 

// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");

//     var sql = "INSERT INTO  users(nom, prenom,Address,City) VALUES ?";
//     var values =[
//         ['Mohcine', 'Ennefai','sidi bernoussi azhare','casa']
//         ,['haymod', 'falah','wasis ','agadir'],
//         ['tazi', 'ali','102 azhare','rabat'],
//         ['yassin', 'laarbi','sidi bernoussi azhare','casa'],
        
//     ];

//     con.query(sql,[values], function (err, result) {
//         if (err) throw err;
//         console.log("1 record inserted  "+  result.affectedRows);//number insert
//     });
// });

