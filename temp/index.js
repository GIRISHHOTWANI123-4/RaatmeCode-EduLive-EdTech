//try
const path = require('path');
const cv = require('opencv4nodejs');
const express = require('express');
const  app = express();
const http = require('http')
const server = app.listen(3000)
const io = require('socket.io')(server);


const wCap = new cv.VideoCapture(0);
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'));
});

const fps = 60;
setInterval(() => {
    const frame = wCap.read();
    const image = cv.imencode('.jpg', frame).toString('base64');
    io.emit('image',image);
}, 1000/fps );