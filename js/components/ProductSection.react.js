/**
 * Created by chen4_000 on 4/7/2015.
 */


var React = require('react');

var ProductStore = require('../stores/ProductStore');
var ProductActionCreator = require('../actions/ProductActionCreator');

function getStateFromStores(){
    return {
        product :ProductStore.getAllForCurrentThread()
    };
}


var Product = React.createClass({

    getInitialState : function (){
     return  getStateFromStores();

    },
    componentDidMount : function (){
        ProductStore.addChangeListener(this._onChange);

    },
    componentWillUnmount : function(){
        ProductStore.removeChangeListener(this._onChange);
    },
    render : function (){

        return(
            <div className="Product">
                <h1>{this.state.product.productName}</h1>

                <select>
                </select>
                <h1>{this.state.product.productPrice}</h1>
                <button onClick={this._onClick}/>
            </div>
        )
    },
    _onChange : function(){
        this.setState(getStateFromStores());
    },
    _onClick : function (){
        ProductActionCreator.AddToCart(this.state.product,1)
    }

});




module.exports= Product;