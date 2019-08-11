/*
	Copyright 2015, Google, Inc.
 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0
 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/

var express = require('express'),
  dotenv = require('dotenv').config(),
  app = express(),
  nodemailer = require('nodemailer');
(bodyParser = require('body-parser')),
  (mongoose = require('mongoose')),
  (worksController = require('./server/controllers/works-controller')),
  (edusController = require('./server/controllers/edus-controller')),
  (skillsController = require('./server/controllers/skills-controller'));
othersController = require('./server/controllers/others-controller');
contactsController = require('./server/controllers/contacts-controller');

mongoose.connect(dotenv.DB_CONNECT);

app.use(bodyParser());

app.get('/', function(req, res) {
  res.sendfile(__dirname + '/client/index.html');
});

app.use('/', express.static(__dirname + '/client'));

//REST API
app.get('/api/works', worksController.list);
app.get('/api/works/:workId', worksController.get);
//app.post('/api/works', worksController.create);
app.get('/api/edus', edusController.list);
//app.post('/api/edus', edusController.create);
app.get('/api/skills', skillsController.list);
//app.post('/api/skills', skillsController.create);
app.get('/api/others', othersController.list);
//app.post('/api/others', othersController.create);
app.post('/contactform', contactsController.sendEmail);

app.listen(process.env.PORT || 8080, function() {
  console.log("I'm Listening...");
});
