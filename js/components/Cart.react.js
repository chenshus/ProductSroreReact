/**
 * Created by chen4_000 on 4/7/2015.
 */


var React = require('react');
var CartStore = require('../stores/CartStore');
var CartListItem = require('./CartListItem.react');


function getStateFromStores(){
    return {
            chosenProducts :CartStore.getAll()
    };
}


var Cart = React.createClass({

    getInitialState : function (){
        return getStateFromStores();
    },
    componentDidMount : function (){
        CartStore.addChangeListener(this._onChange);
    },
    componentWillUnmount : function (){
      CartStore.removeChangeListener(this._onChange());
    },

     render : function (){
         var chosenProductsItems = this.state.chosenProducts.map(function (product){
             return (
                 <div>
                 <CartListItem
                   key= {product.id}
                     product ={product} />
                 </div>
             )
         },this);

         return (
            <div>
            {chosenProductsItems}
                </div>
         );
     },



    _onChange : function (){
        this.setState(getStateFromStores())
    }

    }
);

module.exports = Cart;
