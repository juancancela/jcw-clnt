#! /usr/bin/env node

var userArgs = process.argv.splice(2);
var to = userArgs[0];
var subject = userArgs[1];
var message = userArgs[2];

var mailOptions = { from: 'cancela.juancarlos@gmail.com', to: to, subject: subject, text: message, html: '<b>'+message+'</b>'};
var transporter = require('nodemailer').createTransport({ service: 'Gmail', auth: { user: 'cancela.juancarlos@gmail.com', pass: 'XXXXX'}});

transporter.sendMail(mailOptions, function(error, info){
  error ? console.log(error) : console.log('Message sent: ' + info.response);}
);
