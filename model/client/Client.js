const mongoose = require('mongoose');
const Client=mongoose.model('Client',{
    name:{
         type:String,
           required:true,
               minlength:2

   
    },
         
     surname:{
            type:String,
               required:true,

        


     },
     phone:{
          type:String,
          required:true,
          unique:true,
          minlength:8,

       

            
        
     
     },
     cin:{
          type:String,
          required:true,
          unique:true,
          minlength:8,
      
      
     },
     email :{
          type:String,
          required:true,
          unique:true,
          minlength:8,
          
          
        
         
     },
        address:{
            type:String,
               required:true,
               minlength:2

           
        },

})
module.exports=Client;