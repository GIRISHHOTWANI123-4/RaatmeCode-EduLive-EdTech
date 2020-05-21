const express=require("express");
const bodyParser=require("body-parser");
const app=express();
const mongoose=require("mongoose");

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());
mongoose.connect("mongodb://localhost:27017/QuestionDB",{useNewUrlParser:true });
const QuestionSchema=new mongoose.Schema(
    {
        question:String,
        option1:String,
        option2:String,
        option3:String,
        option4:String,
        answer:String
    });

const FinalScoreSchema=new mongoose.Schema(
    {
         score:String
    }
)
const Question=mongoose.model("Question",QuestionSchema);
const Final=mongoose.model("Score",FinalScoreSchema);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

app.post("/addquestion",(req,res)=>{

    const question=req.body.question;
    const option1=req.body.option1;
    const option2=req.body.option2;
    const option3=req.body.option3;
    const option4=req.body.option4;
    const answer=req.body.answer;

    const newQuestion=new Question({
        question:question,
        option1: option1,
        option2: option2,
        option3: option3,
        option4: option4,
        answer:answer
    });
    newQuestion.save((err)=>{
        if(!err) {
              res.redirect("http://localhost:3000/questionpaper");
                }
        else
            res.send(err);
    });
});
app.get("/getquestions",(req,res)=>{
       Question.find((err,ans)=>{
              if(!err)
                   res.send(ans);
              else
                  res.send(err);
       });

});

app.post("/answer",async (req,res)=>{
    let finalscore=0;
    const str="answer";
    const length=req.body.count;
    const answer1=req.body.answer1;
    const answer2=req.body.answer2;
   await Question.findOne({answer:answer1},(err,ans)=>{
                    if(ans!=null) {
                        finalscore = finalscore + 1;
                    }
                });

    await Question.findOne({answer:answer2},(err,ans)=>{
        if(ans!=null) {
            finalscore = finalscore + 1;
        }
    });
   const newFinal=new Final({
       score:finalscore
   })
   await newFinal.save((err) => {
       if (err)
           res.send("ERROR");
   })
   res.redirect("http://localhost:3000/student");

});
app.get('/result',(req,res)=>{

     Final.findOne({},(err,ans)=>{
         if(!err)
              res.send(ans.score)
         else
              res.send(err)
     })
});

app.listen(4001,()=>{
  console.log("Server listening to port 4001");
})