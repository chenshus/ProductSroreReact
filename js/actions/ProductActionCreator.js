/**
 * Created by chen4_000 on 4/7/2015.
 */


var ProductStoreDispatcher = require('../dispatcher/ProductStoreDispatchers');

var ProductStoreConstant = require('../constant/ProductStoreConstants');
var ActionTypes = ProductStoreConstant.ActionTypes;

module.exports ={

    AddToCart : function (product,quantity){
        ProductStoreDispatcher.dispatch ({
            type : ActionTypes.ADD_TO_CART,
            product :product,
            productQunatity :quantity
        });
    },
    clickThread : function(threadID){
        ProductStoreDispatcher.dispatch ({
            type : ActionTypes.CLICK_THREAD,
            threadId : threadID
        })
    }
};