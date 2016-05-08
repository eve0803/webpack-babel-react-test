var React = require('react');
var ReactDOM = require('react-dom');

var LiComponent = React.createClass({
	getInitialState:function(){
		return {
			isStyle:false
		}
	},
	render:function (){
		
		return (
			<li 
				className={this.state.isStyle?'red':''}
				onMouseEnter={this.overHandle}
				onMouseLeave={this.outHandle}
			>
				<span>{this.props.innerText}</span>
				<a onClick={this.props.onDelectItem} href="javascript:;">删除</a>
			</li>
		)	
	},
	overHandle:function (){
		this.setState({isStyle:true})	
	},
	outHandle:function (){
		this.setState({isStyle:false})
	}
})


var HelloComponent = React.createClass({
	getInitialState:function (){
		return {
			list:[1,2,3,4]
		}
	},
	render:function (){

		var arr = this.state.list.map(function (item,index){
			return <LiComponent 
					key={index}
					innerText={item}
					onDelectItem={this.delectItem.bind(this,item)}
					/>	
		},this);

		return (
			<div>
				<div className="bs-example">
					<div className='form-group'>
						<textarea className="form-control" rows="3" placeholder="请留言"></textarea>
					</div>
					<div className='form-group'>
						<div className="col-sm-offset-2 col-sm-10">
							<button type="button" style={{float:'left'}} className="btn btn-default">提交</button>
						</div>
					</div>				
				</div>
				<ul className="list-group">
				   <li className="list-group-item">免费域名注册</li>
				   <li className="list-group-item">免费 Window 空间托管</li>
				   <li className="list-group-item">图像的数量</li>
				   <li className="list-group-item">24*7 支持</li>
				   <li className="list-group-item">每年更新成本</li>
				</ul>
			</div>
		)
	},
	searchHandle:function (){
		var val = this.refs.sch_text.value;
		if(val === "") return;
		this.state.list.push(val)
		this.setState({list:this.state.list})
	},
	delectItem:function (data){
		var newArr = this.state.list.filter(function (item){
			return data !== item;
		});
		console.log( newArr );
		this.setState({list:newArr});
	}
});

module.exports = HelloComponent;