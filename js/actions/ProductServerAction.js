/**
 * Created by chen4_000 on 4/14/2015.
 */


var ProductStoreDispatcher = require('../dispatcher/ProductStoreDispatchers');

var ProductStoreConstant = require('../constant/ProductStoreConstants');
var ActionTypes = ProductStoreConstant.ActionTypes;

module.exports = {

    GetAllProducts: function (products) {
        ProductStoreDispatcher.dispatch({
            type: ActionTypes.GET_NEW_PRODUCTS,
            products: products
        });

    }
};