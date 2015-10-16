/**
 * Created by chen4_000 on 4/14/2015.
 */

var ProductServerAction = require('../actions/ProductServerAction');


module.exports ={

    getAllProducts : function (){

        var rawMessages = JSON.parse(localStorage.getItem('Products'));
        ProductServerAction.GetAllProducts(rawMessages);

    }
};