const express =require("express")
const bodyparser =require("body-parser")
const cors =require("cors")
const  mysql =require("mysql2"); 

const multer = require('multer');
const path = require('path');


const app=express()
app.use(cors())
app.use(bodyparser.json())


// database Connection
const db =mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database:"js_commend"  , 
    port :3306
});

// CHECK CONNECTION
db.connect(function(err) {
    if (err) throw err;
        console.log("connected   ....");
    });







// get all data
//     /users
app.get('/users',(req,res)=>{

    const limit = parseInt(req.query.limit ) ||1 ;
    console.log(`page ${limit}`)
    const offset = parseInt(req.query.offset ) || 10;
    console.log(`page 2 ${offset}`)
    // const offset1 = (limit - 1) * offset;

    const sql =`SELECT * FROM users where flag_sup = 0 limit ${limit}  offset ${offset}` ; 
    // const sql =`SELECT * FROM users where flag_sup = 0  ` ; 



    db.query(sql, function (err, result, fields) {
        if (err) throw err;

        //
        // const totalRecords = result.length;
        // console.log(result.length)
        //  
        // const totalPages = Math.ceil(totalRecords / recordsPerPage);
    
        res.send({
            message :"all users",
            
            data:result
        })
    });
})


//get data  {id }
// app.get('/users/:id',(req,res)=>{
//     let getid=req.params.id
//     db.query(`SELECT * FROM users where id=${getid}`, function (err, result, fields) {
//         if (err) throw err;
//         console.log(result)
//         if(result.length>0){
//             res.send({
//                 message :"all users",
//                 data:result
//             })
//         }else{
//             res.send({
//                 message :"data not found",
//                 data:result
//             })
//         }
//     });
// })





//// create data

app.post('/users', (req,res)=>{

    // console.log(req.body, 'createdata');
    let  nom =req.body.nom ;
    let  prenom =req.body.prenom ;
    let  Address =req.body.Address ;
    let  City =req.body.City ;
    let  status =req.body.status ;

    let create=`insert into users (nom,prenom,Address,City) values("${nom}","${prenom}","${Address}","${City}")` ;

    // console.log(create )
    db.query(create,(err,result)=>{
        if (err) throw err; 
        console.log(result)

            res.send({
                message:"data created"
            })
    })
    });




//update data

//methode 1
app.post('/users/update/:id', (req,res)=>{

    // console.log(req.body, 'createdata');
    let getID=req.params.id ;
    let  nom =req.body.nom ;
    let  prenom =req.body.prenom ;
    let  Address =req.body.Address ;
    let  City =req.body.City ;
    let  status =req.body.status ;

    let qr =`update users set nom="${nom}" ,prenom="${prenom}" ,Address="${Address}" , City="${City}"  where id=${getID} ` ;

    // console.log(create )
    db.query(qr,(err,result)=>{
        if (err) throw err; 
        console.log(result)

            res.send({
                message:"data update"
            })
    })
    });
//methode 2
app.put('/users/:id' ,(req,res)=>{

    console.log(req.body, 'update');

    let getID=req.params.id ;

    let  nom =req.body.nom ;
    let  prenom =req.body.prenom ;
    let  Address =req.body.Address ;
    let  City =req.body.City ;
    let  status =req.body.status ;//status="${status}"
    
    let qr =`update users set nom="${nom}" ,prenom="${prenom}" ,Address="${Address}" , City="${City}"  where id=${getID} ` ;

    db.query(qr,(err,result)=>{
        if (err) throw err; 
            // console.log(result)

            res.send({
                message:"data update"
            })
    })
})



//delete data 

// methode 1
app.post('/users/delete/:id', (req,res)=>{

    console.log(req.body.data, 'delete');
    let getID=req.params.id ;
    // console.log(getID)
    
    // let  flag_sup =1 ;

    let qr =`update users set flag_sup=${req.body.data} where id =${getID}` ;
    // let qr =`delete from users where id =${getID} `
    
    db.query(qr,(err,result)=>{
        if (err) throw err; 
        

            res.send({
                message:"data deleted"
            })
    })
    });
// methode 2
// app.delete('/users/:id' ,(req,res)=>{

//     let getID=req.params.id ;

//     let qr =`delete from users where id =${getID} `

//     db.query(qr,(err,result)=>{
//         if (err) throw err; 
//             // console.log(result)

//             res.send({
//                 message:"data deleted"
//             })
//     })
// })







//port




const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public')
        },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
        }
});


const upload = multer({ storage });
app.post('/upload', upload.single('excelFile'), (req, res) => {
    // Handle file upload
    res.json({ message: 'File uploaded successfully' });
  });




//port 
app.listen(9090,()=>{
    console.log('server runing')
})