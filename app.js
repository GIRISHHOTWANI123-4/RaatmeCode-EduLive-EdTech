const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
// var uuidv4 = require('uuid/v4');


// require('mongoose-uuid2')(mongoose);


const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/SignUpDB", {useNewUrlParser: true});

const SignUpSchema = new mongoose.Schema({
  name: "String",
  username: "String",
  password: "String",
  email: "String",
  institute: "String",
  role: "String"
});

const AnswerSchema=new mongoose.Schema({
  answer:"String"
});

const CourseSchema = new mongoose.Schema({
  tid:Object,
  courseCode:Number,
  courseName:String
});

const TeacherSchema = new mongoose.Schema({
  _id: Object,
  tName: String
});


const StudentSchema = new mongoose.Schema({
  name:String,
  username:String,
  password:String
});

const StudentCourse = new mongoose.Schema({
  sid:Object,
  cid:Object
});

const Answer =mongoose.model("Answer",AnswerSchema);

const SignUp = mongoose.model("SignUp", SignUpSchema);

const Course = mongoose.model("Course",CourseSchema);

const Student = new mongoose.model("Student",StudentSchema);

const StudCourse = new mongoose.model("StudCourse", StudentCourse);

const Teacher = mongoose.model('Teacher', TeacherSchema);


app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});


app.get('/teachers/:teacherName', async (req, res) => {
  const tName = req.params.teacherName;
  console.log(tName);
  if (tName !== undefined) {
    let tid = "";
    await Teacher.findOne({tName: tName}, (err, ans) => {
      if (ans != null) {
        tid = ans._id;
        console.log(tid);
      }

    });
    await Course.find({tid: tid}, (err, ans) => {
      if (ans != null) {
        console.log(ans);
        res.send(ans);
      } else
        res.send("Not found");
    });
  }
});


app.post('/courses', async (req, res) => {
  const username = req.body.username;
  const code = 987654;
  const cname = req.body.courseName;
  let tid;

  await Teacher.findOne({tName: username}, (err, ans) => {
    if (ans != null)
      tid = ans._id;
  });

  const newCourse = new Course({
    tid: tid,
    courseCode: code,
    courseName: cname
  });
  newCourse.save((err) => {
    if (!err)
      res.send("Course updated");
    else
      res.send("Error while inserting");
  })

});


app.post("/signup", async (req, res) => {

  const name = req.body.name;
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;
  const role = req.body.role;
  const institute = req.body.institute;

  console.log('name',name);

  await SignUp.findOne({username: username, password: password}, (err, ans) => {
    if(!err) {
      console.log("in");
      if (ans != null) {
        res.send("Account already exists!!!!");

      } else {
        console.log("else");
        const newUser = new SignUp({
          name: name,
          username: username,
          password: password,
          email: email,
          institute: institute,
          role: role
        });

        newUser.save((err) => {
          if (!err) {
            console.log("inserted in Teacher DB  0 ");
            if (role.toLowerCase() === 'teacher') {

              console.log("inserted in Teacher DB  1 ");
              const newTeacher = new Teacher({
                _id: newUser._id,
                tName: username
              });

              newTeacher.save((err) => {
                if (err)
                  console.log(err);
                else
                  console.log("finally entered");
              });

              res.send(role);
            } else if (role.toLowerCase() === 'student') {

              const newStudent = new Student({
                name:newUser.name,
                username:newUser.username,
                password:newUser.password,
                _id:newUser._id
              });
              newStudent.save((err)=>{
                if(!err)
                  console.log("inserted in Student DB");
              })
              res.send("Student");

            } else {
              SignUp.deleteOne({username: username}, () => {
                //console.log("Deleted");
                res.send("deleted");
              });

            }
          } else
            res.send(err);
        })


      }
    }
    else res.send(err);
  });

});

app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  SignUp.findOne({username: username, password: password}, (err, ans) => {
    if (!err) {
      if (ans != null) {
        const role = ans.role;
        if (role.toLowerCase() === 'student')
          res.send('student');
        else
          res.send('teacher');
      } else
        res.send("NO DATA");
    } else
      res.send(err);
  });

});


app.post('/joinclass',async (req,res)=>{
  const username = req.body.username;
  const courseCode = req.body.CourseCode;
  let sid = 1;
   await Student.findOne({username:username},(err,ans) =>{
    if(!err){
      if(ans!= null){
        sid = ans._id;
      }
      // console.log(sid);

    }

  });
  let cid =1;
  await Course.findOne({courseCode:courseCode},(err,ans)=>{
    if(!err){
      if(ans!=null){
        cid = ans._id;
        console.log("Cid = ",cid);
      }
      else
        console.log("null");
    }
    else
      console.log("error");
  });

  let studCourse = new StudCourse({
    sid: sid,
    cid: cid
  });

  studCourse.save((err)=>{
    if(!err)
      res.send("Sid cid Inserted in StudCourse table");
    else
      res.send(err);
  });

});


app.listen(4000, () => {
  console.log("Listening to port 4000");
});
