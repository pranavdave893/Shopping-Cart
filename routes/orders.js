var express = require('express');
var router = express.Router();

/* GET home page. */
router.all('/', function (req, res, next) {
    var message = '';
    if (req.method === 'POST') {
        if (req.session.cart === undefined) {
            req.session.cart = [];
        }
        var item = {};
        item.itemname = req.body.itemname;
        item.quantity = req.body.quantity;
        req.session.cart.push(item);
        console.log(req.session.cart);
    }
    res.render('order', {title: 'Please place your order here', message: 'Please checkout to cart!'});
});

module.exports = router;
