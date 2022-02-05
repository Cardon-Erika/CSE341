exports.postCreateCookie = (req, res, next) => {
    console.log('Cookie creation!');
};

exports.getIndex = (req, res, next) => {
    if (req.session.counter === undefined) {
        req.session.counter = 0;
    }
    if (req.session.style === undefined) {
        req.session.style = 0;
    }
    res.render('pages/ta05', {
        title: 'Team Activity 05',
        path: '/ta05',
        style: req.session.style,
        counter: req.session.counter
    });
};

exports.postChangeCount = (req, res, next) => {
  req.session.counter += Number(req.body.numChange);
  res.redirect('/ta05');
};

exports.postChangeStyle = (req, res, next) => {
    req.session.style = req.body.changeStyle;
    res.redirect('/ta05');
};

exports.resetSession = (req, res, next) => {
    console.log(req.body);
    if (req.body.reset === 'reset') {
        req.session.destroy(() => {
            res.redirect('/ta05');
            console.log('SESSION DESTROYED');
        })
    } else {
        res.redirect('/ta05');
    }
}