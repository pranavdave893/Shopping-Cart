var express = require('express');
var router = express.Router();


router.all('/', function (req, res, next) {
    var cartTgt = [];
    if (req.session.cart !== undefined) {
        cartTgt = req.session.cart;
    }

    if (req.method === 'POST') {
        var arr = [];
        var itemName = req.body.itemname;
        var itemQty = req.body.itemQty;
        var options = req.body.btn;
        var itemId = req.body.itemId;
        console.log(itemId + 'button is clicked');
        if (itemName != 'undefined')
        {
            if (options == 'Remove')
                arr = cartTgt.splice(itemId, 1);
            else
            {
                cartTgt[itemId].itemname = itemName;
                cartTgt[itemId].quantity = itemQty;
            }
        }
    }
    res.render('cart', {title: 'Items you added', cart: cartTgt});
});

module.exports = router;
