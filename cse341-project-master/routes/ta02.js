//TA02 PLACEHOLDER
// Remember, you can make more of these placeholders yourself!
const express = require('express');
const req = require('express/lib/request');
const router = express.Router();

const array = ['Sean', 'Steven', 'Pratt'];
let errorMessage = '';

router.post('/addUser', (req, res, next) => {
const addUser = req.body.addUser;
if (array.includes(addUser)) {
  console.log('User already exists');
  errorMessage = 'User already exists';
}
else {
  array.push(addUser);
  console.log(array);
}
res.redirect('/ta02/');
});

router.post('/removeUser', (req, res, next) => {
  const removeUser = req.body.removeUser;
  const index = array.indexOf(removeUser);
  if (index == -1) {
    console.log('User not in the array');
    errorMessage = 'User not found';
    // res.send('<h3>User not found</h3>');
  }
  else {
    array.splice(index,1);
    console.log(array);
  }
  res.redirect('/ta02/');
});


router.get('/', (req, res, next) => {
  res.render('pages/ta02', {
    title: 'Team Activity 02',
    users: array,
    errorMessage: errorMessage,
    path: '/ta02', // For pug, EJS
    // activeTA03: true, // For HBS
    // contentCSS: true, // For HBS
  });
});

module.exports = router;