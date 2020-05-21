const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));
mongoose.connect("mongodb://localhost:27017/SignUpDB", {useNewUrlParser: true});

const SignUpShema = new mongoose.Schema({
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

const Answer =mongoose.model("Answer",AnswerSchema);

const SignUp = mongoose.model("SignUp", SignUpShema);

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});


app.post("/signup", (req, res) => {

    const name = req.body.name;
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const role = req.body.role;
    const institute = req.body.institute;

    SignUp.findOne({username: username, password: password}, (err, ans) => {
        if (ans != null) {
            res.send("Account already exists!!!!");
            res.redirect("/");
        } else {
            const newUser = new SignUp({
                name: name,
                username: username,
                password: password,
                email: email,
                institute: institute,
                role: role,
            });
            newUser.save((err) => {
                if (!err) {
                    if (role.toLowerCase() === 'teacher') {
                        res.redirect("http://localhost:3000/teacher");
                    } else if (role.toLowerCase() === 'student') {
                        res.redirect("http://localhost:3000/student");
                    } else {
                        SignUp.deleteOne({username: username}, () => {
                            console.log("Deleted")
                        });
                        res.redirect("http://localhost:3000");
                    }
                } else
                    res.send(err);
            })
        }

    })

});

app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    SignUp.findOne({username: username, password: password}, (err, ans) => {
        if (!err) {
            if (ans != null) {
                const role = ans.role;
                if (role.toLowerCase() === 'student')
                    res.redirect("http://localhost:3000/student");
                else
                    res.redirect("http://localhost:3000/teacher");
            } else
                res.send("NO DATA");
        } else
            res.send(err);
    });

});

app.listen(4000, () => {
    console.log("Listening to port 4000");
});
