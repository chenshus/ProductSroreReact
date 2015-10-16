/**
 * Created by chen4_000 on 4/7/2015.
 */

var React = require('react');
var ThreadStore  = require('../stores/ThreadStore');
var ThreadListItem = require('../components/ThreadListItem.react');

function getStateFromStores (){

    return{
           currentThreadID : ThreadStore.getCurrentThreadID(),
            threads : ThreadStore.getAllThreads()
            };
}


var Thread = React.createClass({

    getInitialState : function (){
        return getStateFromStores();
    },
    componentDidMount : function (){
      ThreadStore.addChangeListener(this._onChange);
    },
    componentWillUnmount : function (){
      ThreadStore.removeChangeListener(this._onChange);
    },
    render : function (){
        var threadList = this.state.threads.map(function (thread){
            return (
                <ThreadListItem
                    key={thread.id}
                    thread = {thread}
                    currentThreadID = {this.state.currentThreadID}
                />


            )
        },this);
        return (
            <div className="thread-section">
                <ul className="thread-list">
                {threadList}
                </ul>
            </div>
        );


    },
    _onChange: function() {
        this.setState(getStateFromStores());
    }
});

module.exports = Thread;