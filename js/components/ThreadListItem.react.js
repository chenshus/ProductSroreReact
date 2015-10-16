/**
 * Created by chen4_000 on 4/7/2015.
 */

var React = require('react');

var ProductActionCreator = require ('../actions/ProductActionCreator');
var cx = require('react/lib/cx');

var ReactPropTypes = React.PropTypes;

var ThreadListItem =React.createClass({

    propTypes: {
        thread: ReactPropTypes.object,
        currentThreadID : ReactPropTypes.string
    },
    render : function (){
        var thread = this.props.thread;
        return (
            <li
                className={cx({
                    'thread-list-item': true,
                    'active': thread.id === this.props.currentThreadID
                })}
                onClick={this._onClick}>
                <h5 className="thread-name">{thread.ProductName}</h5>
                <div className="thread-last-message">

                </div>
            </li>
        );
    },

    _onClick : function (){
        ProductActionCreator.clickThread(this.props.thread.id);
    }
});









module.exports = ThreadListItem;
