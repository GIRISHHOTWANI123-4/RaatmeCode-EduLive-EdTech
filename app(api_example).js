require('dotenv').config();
const express=require("express");
const bodyParser=require("body-parser");
const mongoose = require('mongoose');
const md=require('md5');
//const encrypt=require("mongoose-encryption");

const app=express();
app.use(bodyParser.urlencoded({
  extended: true
}));


mongoose.connect("mongodb://localhost:27017/LoginDB",{useNewUrlParser:true });

const LoginSchema=new mongoose.Schema(
    {
       username:String,
       password:Number
    });

//LoginSchema.plugin(encrypt,{secret:process.env.SECRET,encryptedFields:['password']});

const Login=mongoose.model("Login",LoginSchema);

// app.get("/",(req,res)=>{
//      res.sendFile(__dirname+"/index.html");
// });

// app.get("/logins/:username",(req,res)=>{
//
//     // const username=req.params.username;
//       Login.findOne({username:req.params.username},(err,ans)=>{
//                 if(ans)
//                 {
//
//                     res.send("Item found");
//                }
//                 else
//                   res.send("No Match Found");
//
//       });
//
 app.route("/logins/:username").

    get((req,res)=>{
          Login.findOne({username:req.params.username},(err,ans)=>
           {
               if(ans)
               {
                 console.log(ans.password);
                 res.send(ans);
               }
            else
               res.send("item not found");
          });

    })


    .put((req,res)=>{
        Login.updateOne({username:req.params.username},
                     {username:req.body.username,
                      password:req.body.password
                     },
                     (err,results)=>{
                          res.send(results);
                     });

    });

    app.route("/logins")

    .post((req,res)=>{
        const username=req.body.username;
        const password=parseInt(md(req.body.password));
        const newUser=new Login({
             username:username,
             password:password
        });
       newUser.save((err)=>{
           if(!err)
            res.send("Successfully updated in the database");
           else
            res.send(err);

       });

    })

  .get((req,res)=>{
     console.log("in logins get");
      Login.find((err,ans)=>{
           if(!err)
            res.send(ans);
            else
             res.send(err);

      });

  });


    // const newLoginInstance=new Login({
    //      username:req.body.username,
    //      password:req.body.password
    // });
    //   newLoginInstance.save((err)=>{
       //     if(!err)
       //      {res.send("Successfully updated");
       //      }
       //   else
       //      {
       //          res.send("Error in inserting");
       //          console.log(err);
       //      }
       // });

        // const username=req.body.username;
        // const password=req.body.password;
        // const query=Login.where({username:username});
        //
        // query.findOne((err,arr)=>{
        //     if(err)
        //       console.log("Error occured");
        //
        //     else if(arr!=null)
        //         res.send(arr);
        //     else
        //        res.send("Item not found");
        //
        // });

        // Login.find({username:username},(err,arr)=>{
        //     if(!err)
        //      {
        //
        //           res.send(arr);
        //      }
        //     else{
        //          res.send("The item was not found in the database");
        //         }
        //
        // });



//});

app.listen(3000,()=>{
    console.log("Server listening to port 3000")
})
