var React = require('react');
var ReactDOM = require('react-dom');

var ItemComponent = React.createClass({
			render:function (){
				return (
					 <li className="list-group-item">
					     <div className="handle" >
					     	<a href="javascript:;" onClick={this.delectHandle}>删除</a>
					     </div>
					 	<p className="user" ><span >{this.props.userName}</span><span>说:</span></p>
							<p className="centence">{this.props.content}</p>
					 </li>
				)		
			},
			delectHandle:function (){
				
			}
		})


module.exports = ItemComponent;