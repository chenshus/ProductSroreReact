/**
 * Created by chen4_000 on 4/7/2015.
 */
/** @jsx React.DOM */

var ProductStoreApp = require('./components/ProductStoreApp.react');
var ProductStoreWebApiUtils = require('./utils/ProductStoreWebAPIUtils');
var React = require('react');
var ProductData = require('./ProductsData');


window.React = React;
ProductData.init();
ProductStoreWebApiUtils.getAllProducts();



React.render(
    <ProductStoreApp/>,
    document.getElementById('react')
);


