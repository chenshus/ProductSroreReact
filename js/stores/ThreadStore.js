/**
 * Created by chen4_000 on 4/7/2015.
 */
var ProductStoreDispatcher = require('../dispatcher/ProductStoreDispatchers');
var assign = require('object-assign');
var EventEmitter = require('events').EventEmitter;
var ProductStoreConstant = require('../constant/ProductStoreConstants');

var CHANGE_EVENT = 'change';
var ActionTypes = ProductStoreConstant.ActionTypes;

var _threads ={};
var _currentID ="t_2";

var ThreadStore = assign({},EventEmitter.prototype,{


    init : function (products){
        products.forEach(function(product){
            _threads[product.threadId] ={
                   id: product.threadId,
                   ProductName : product.productName
        }
        })
    },

    getAllThreads : function (){
        var threads = [];
        for (var id in _threads){
            threads.push(_threads[id])
        }
      return threads;
    },

    emitChange : function(){
        this.emit(CHANGE_EVENT);
    },
    addChangeListener : function (callback){
        this.on(CHANGE_EVENT,callback);
    },
    removeChangeListener : function (callback){
        this.removeListener(CHANGE_EVENT,callback);
    },
    getCurrentThread : function (CurrentID){
        return _threads[CurrentID];
    },
    getCurrentThreadID :function(){
        return _currentID;
    }
});

ThreadStore.dispatchToken  =ProductStoreDispatcher.register (function (action){
   switch(action.type){
       case ActionTypes.ADD_TO_CART:
           break;
       case ActionTypes.CLICK_THREAD:
           _currentID=action.threadId;
           ThreadStore.emitChange();
           break;
       case ActionTypes.GET_NEW_PRODUCTS:
           ThreadStore.init(action.products);
           ThreadStore.emitChange();
           break;
   }
});

module.exports =ThreadStore;