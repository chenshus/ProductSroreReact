/**
 * Created by chen4_000 on 4/7/2015.
 */

var ProductStoreDispatcher =  require('../dispatcher/ProductStoreDispatchers');
var assign = require('object-assign');
var EventEmiter = require('events').EventEmitter;
var ThreadStore = require('./ThreadStore');
var ProductStoreConstant = require('../constant/ProductStoreConstants');


var CHANGE_EVENT ='change';
var ActionTypes = ProductStoreConstant.ActionTypes;

var _products = {};

var currentProduct = null;

function _addNewProducts (products){
    products.forEach(function(product){
        _products[product.id] =product;
    })
}


var ProductStore = assign({},EventEmiter.prototype,{

    emitChange : function(){
        this.emit(CHANGE_EVENT);
    },
    addChangeListener : function (callback){
        this.on(CHANGE_EVENT,callback);
    },
    removeChangeListener : function (callback){
        this.removeListener(CHANGE_EVENT,callback);
    },
    get : function (id){
        return _products[id];
    },
    getAll : function (){
        return _products;
    },
    getAllForThread : function (currentThreadID){
        for(var id in _products){
            if(_products[id].threadId == currentThreadID){
                return _products[id];
            }
        }
   /*     _products.forEach(function(product){
            if(product.threadId ==currentThreadID){
                return product;
            }
        })*/
    },
    getAllForCurrentThread: function() {
        currentProduct= this.getAllForThread(ThreadStore.getCurrentThreadID());
        return currentProduct;
    }


});



ProductStore.dispatchToken = ProductStoreDispatcher.register (function(action){

    switch(action.type){

        case ActionTypes.CLICK_THREAD:
            ProductStoreDispatcher.waitFor([ThreadStore.dispatchToken]);
            ProductStore.emitChange();
            break;
        case ActionTypes.GET_NEW_PRODUCTS :
            ProductStoreDispatcher.waitFor([ThreadStore.dispatchToken]);
            _addNewProducts(action.products);
            ProductStore.emitChange();
            break;
    }

});

module.exports =ProductStore;
