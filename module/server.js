import os from 'os'
import fs from 'fs'
import  events from 'events'



//events 
const  emitter =new events() ;

console.log(emitter.emit())





//fs 
    // fs.readdir("./",(err, res)=>{console.log(res)})






//os 
// console.log(os.type())
// console.log(os.uptime())
// console.log(os.freemem())
// console.log(os.totalmem())


// const express =require('express') ;
import express from 'express';
const app =express() ; //work server


const students =[
    {id :1 ,nom:"mohcine" ,prenom:"ennefai" ,nv:"bac"  } ,
    {id :1 ,nom:"ayman " ,prenom:"tazi" ,nv:"bac"  } ,
    {id :1 ,nom:"yassir" ,prenom:"benani" ,nv:"bac"  } ,
    {id :1 ,nom:"ali" ,prenom:"fadil" ,nv:"bac"  } ,
]
// test module 
// const objModule= require('./Module')
// import sayhello from "./Module.js"
// console.log(sayhello())



app.get('/' ,(request ,response)=>{
    // response.send(request.params)
    response.json(students)
    // response.status("404")
    
})


// function  global 
    // setTimeout() 
    // clearTimeout ()
    // setInterval ()
    // clearInterval ()





app.listen(8081 ,()=>{
    console.log("serveur work")  
})






//test get data  
// app.post("/add" ,(req ,res)=>{
//     data =req.body ;
//     console.log(data) 
// })

// app.get("/getall" ,()=>{
//     console.log("get workk")
// })
// app.get("/update" ,()=>{
//     console.log("update  workk")
// })
// app.get("/delete" ,()=>{
//     console.log("delelte  workk")
// })


