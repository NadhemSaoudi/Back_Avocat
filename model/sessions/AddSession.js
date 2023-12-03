const moongoose = require('mongoose');
const jalasat = moongoose.model('jalasat',{
    name:{
         type:String,
         required:true,
         trim:true,
         minlength: 3,
         maxlength: 20,
         validate(value){
              if(!validator.isAlpha(value)){
                   throw new Error('اسم الجلسة غير صالح')
              }
         }
    },
    time :{
         type:String,
         required:true,
         trim:true,
         minlength: 3,
         maxlength: 20,
         validate(value){
              if(!validator.isAlpha(value)){
                   throw new Error('الوقت غير صالح')
              }
         }

    },
     date:{
           type:Date,
           required:true,
           trim:true,
           minlength: 3,
           maxlength: 20,
           validate(value){
                 if(!validator.isAlpha(value)){
                       throw new Error('التاريخ غير صالح')
                 }
           }
     },
     place:{
          type:String,
          required:true,
          trim:true,
          minlength: 3,
          maxlength: 20,
          validate(value){
               if(!validator.isAlpha(value)){
                    throw new Error('المكان غير صالح')
               }
          }
     },
     description:{
          type:String,
          required:true,
          trim:true,
          minlength: 3,
          maxlength: 20,
          validate(value){
               if(!validator.isAlpha(value)){
                    throw new Error('الوصف غير صالح')
               }
          }
     },
     





});
module.exports=jalasat;