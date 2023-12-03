const express= require('express')
require('./connect.js')
const app=express()
const AddClient=require('./controller/client/AddClient')
const Rendezvous =require('./controller/rendezvous/Ajoutrendezvous')
const DeleteClient=require('./controller/client/DelClient')
const UpdateClient=require('./controller/client/UpdateClient')
const GetClient=require('./controller/client/GetClient')
const SignIn =require('./controller/auth/SigIn.js')
const SignUp =require('./controller/auth/SigUP.js')
const NewEvent=require ('./controller/calendar/NewEvnt')

app.use(express.json())
app.listen(3000,()=>{console.log('yekhdem jawo behi serveru port 3000 ');})

app.use('/client',AddClient)
app.use('/client',DeleteClient)
app.use('/client',UpdateClient)
app.use('/client',GetClient)
app.use('/Rendezvous',Rendezvous)
app.use('/',SignIn)
app.use('/',SignUp)
app.use('/event',NewEvent)



