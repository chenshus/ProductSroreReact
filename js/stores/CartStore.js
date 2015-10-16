/**
 * Created by chen4_000 on 4/7/2015.
 */



var ProductStoreDispatcher = require('../dispatcher/ProductStoreDispatchers');
var assign = require('object-assign');
var EventEmitter = require('events').EventEmitter;
var ThreadStore = require('./ThreadStore');
var ProductStoreConstant = require('../constant/ProductStoreConstants');

var CHANGE_EVENT = 'change';
var ActionTypes = ProductStoreConstant.ActionTypes;

var _products = {};





var CartStore =assign({},EventEmitter.prototype,{

    emitChange :function (){
        this.emit(CHANGE_EVENT);
    },
    addChangeListener : function(callback){
        this.on(CHANGE_EVENT,callback)
    },
    removeChangeListener : function (callback){
        this.removeListener(CHANGE_EVENT,callback)
    },
    get: function (id){
       return _products[id];
    },
    getAll : function (){
        var products =[];
        for(var i in _products){
            products.push(_products[i])
        }
       return products;
    },
    getAllForThread : function (threadID){
        _products.forEach(function(product){
            if(product.threadID==threadID){
                return product;
            }
        })
    },
    getAllForCurrentThread : function(){
        this.getAllForThread(ThreadStore.getCurrentThread);
    },
     _addProduct:function (cartProduct){
    _products[cartProduct.product.id]=cartProduct;
}

});


CartStore.dispatchToken = ProductStoreDispatcher.register (function(action){

    switch(action.type){

        case ActionTypes.ADD_TO_CART:
            /*ProductStoreDispatcher.waitFor(ProductStore.dispatchToken);*/
            var CartProduct = {
              product :action.product,
              quantity : action.productQunatity
            };
            CartStore._addProduct(CartProduct);
            CartStore.emitChange();
            break;
    }
});

module.exports =CartStore;