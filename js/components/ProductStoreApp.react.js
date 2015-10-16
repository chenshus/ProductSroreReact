/**
 * Created by chen4_000 on 4/7/2015.
 */


var React = require('react');
var Cart = require('./Cart.react');
var ProductSection = require('./ProductSection.react');
var ThreadSection = require('./ThreadSection.react');


var ProductStoreApp = React.createClass({

        render : function (){
            return (
                <div className="productstoreapp">
                    <ThreadSection />
                    <ProductSection />
                    <Cart/>

                </div>
            );
        }
    }
);

module.exports = ProductStoreApp;