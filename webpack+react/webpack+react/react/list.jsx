var React = require('react');
var ReactDOM = require('react-dom');
var ItemComponent = require('./item');

var ListComponent = React.createClass({
	render:function (){
		
		return (
			 <div className="col-md-8">
                <h3 className="reply">内容发布：</h3>
                <h2 style={{display:"none"}}>暂无留言，点击左侧添加留言！！！</h2>
                <ul className="list-group">
                   {
                   		this.props.listArr.map(function (item,index){
                   			return 	<ItemComponent key={index} {...item} />	
                   		}.bind(this))
                   }
                </ul>
            </div>
		)		
	}
})


module.exports = ListComponent;