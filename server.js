'use strict';
const express = require ('express');
const MongoClient = require('mongodb').MongoClient;
const basicAuth = require('basic-auth');
const path = require('path');
const bodyParser= require('body-parser');
const fileUpload = require('express-fileupload');

const preview = require('./files/javascript/preview.js');
var database = require('./scripts/constants/database.js');
const getresume = require('./files/javascript/handlegetResume.js');
const deleteresume = require('./files/javascript/deleteresume.js');
const adduni = require('./files/javascript/adduniversity.js');
const addskill = require('./files/javascript/addskill.js');

const server = express();

MongoClient.connect('mongodb://localhost:27017/resume_builder', (err, mongodb) => {
  if(err) return console.log(err)

    database.resumes = mongodb;

    const auth = function (req, res, next) {
      function unauthorized(res) {
        res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
        return res.send(401);
      };

      var user = basicAuth(req);

      if (!user || !user.name || !user.pass) {
        return unauthorized(res);
      };

      if (user.name === 'resume_zemoso' && user.pass === 'osomez@semuser') {
        return next();
      } else {
        return unauthorized(res);
      };
    };

    const authmaster = function (req, res, next) {
      function unauthorized(res) {
        res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
        return res.send(401);
      };

      var user = basicAuth(req);

      if (!user || !user.name || !user.pass) {
        return unauthorized(res);
      };

      if (user.name === 'resume_zemoso' && user.pass === 'osomez@123') {
        return next();
      } else {
        return unauthorized(res);
      };
    };

  

    server.use('/files',express.static(path.join(__dirname,'files')));
    server.use('/scripts',express.static(path.join(__dirname,'scripts')));
    server.use('/images',express.static(path.join(__dirname,'images')));
    server.set("views",'./files/views');

    server.use(bodyParser.urlencoded({extended: true}));
    server.use(fileUpload());

    server.get('/',auth,(req,res)=>{res.sendFile(__dirname +'/files/views/form.html')});
    server.get('/resumes',(req,res)=>{res.sendFile(__dirname+'/files/views/getResume.html')});
    server.get('/masterdb',authmaster,(req,res)=>{res.sendFile(__dirname+'/files/views/masterdb.html')});

    server.post('/preview', preview);
    server.post('/getresume', getresume);
    server.post('/delete',deleteresume);
    server.post('/adduniversity',adduni);
    server.post('/addskill',addskill);

    server.listen(80,() => {console.log('server has started on 80')});

})

