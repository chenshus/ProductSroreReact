/**
 * Created by chen4_000 on 4/7/2015.
 */
var React = require('react');

var ReactPropTypes = React.PropTypes;

var CartListItem = React.createClass({

    propTypes : {
        product : ReactPropTypes.object
    },

    render : function(){

        var chosenProduct = this.props.product;
        return (
            <li className="cart-list-item">
                <h5 className="cart-product-name">{chosenProduct.product.productName}</h5>
                <h6 className="cart-product-price">{chosenProduct.product.productPrice}</h6>
                <h6 className="cart-product-quantity">{chosenProduct.quantity}</h6>
                <h6 calssName="total-price">total : {Number(chosenProduct.product.productPrice)*chosenProduct.quantity}</h6>
            </li>
        )

    }
});

module.exports =CartListItem;