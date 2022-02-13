const Info = require('../models/info');

const {validationResult} = require('express-validator');

exports.getIndex = (req, res, next) => {
  Info.find()
    .then(info => {
      res.render('index', {
        info: info,
        pageTitle: 'Info',
        path: '/'
      });
    });
}

exports.getAddInfo = (req, res, next) => {
  res.render('add-info', {
    pageTitle: 'Add Info',
    path: '/add-info',
    hasError: false,
    errorMessage: null,
    validationErrors: []
  });
}

exports.postAddInfo = (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const zip = req.body.zip;
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    console.log(errors.array());
    return res.status(422).render('add-info', {
      pageTitle: 'Add Info',
      path: '/add-info',
      hasError: true,
      info: {
        name: name,
        email: email,
        zip: zip
      },
      errorMessage: errors.array()[0].msg,
      validationErrors: errors.array()
    });
  }
  const info = new Info({
    name: name,
    email: email,
    zip: zip
  });
  info
    .save()
    .then(result => {
      // console.log(result);
      console.log('Created Info');
      res.redirect('/');
    })
    .catch(err => console.log(err));
};
