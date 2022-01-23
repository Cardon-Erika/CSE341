//TA03 PLACEHOLDER
const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

const p = path.join(path.dirname(require.main.filename), 'data', 'data.json');
let datas = [];

router.post('/search', (req, res, next) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
        [];
    } else {
        datas = JSON.parse(fileContent);
    }
  });

  for (let x = datas.length - 1; x >= 0; x++) {
    if ((datas[x].name).includes(req.body.result)) {
      datas.splice(x, 1);
    }
  }

  res.render('pages/ta03', {
    title: 'Team Activity 03',
    data: datas,
    path: '/ta03',
  });

});

router.get('/', (req, res, next) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
        [];
    } else {
        datas = JSON.parse(fileContent);
    }
});
  res.render('pages/ta03', {
    title: 'Team Activity 03',
    data: datas,
    path: '/ta03',
  });
});



module.exports = router;