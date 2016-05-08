var React = require('react');
var ReactDOM = require('react-dom');
var HeaderComponent = require('./header');
var MesComponent = require('./mes');
var ListComponent = require('./list');
require('./css/bootstrap')
require('./css/docs.min')
require('./css/index')

		var delectItem = 'delectItem';
		
		var listArr = [
			{
				userName:"leo",
				content:"欢迎来到妙味课堂",
				_id:Date.now()+1
			},
			{
				userName:"多多",
				content:"欢迎来到妙味课堂",
				_id:Date.now()
			}
		]

		

		var MainComponent =  React.createClass({
			getInitialState:function (){
				return {
					listState:this.props.listArr
				}	
			},
			componentDidMount:function (){
				
			},	
			changeList:function (data){
				var newArr = this.state.listState.concat(data);
				this.setState({listState:newArr})	
			},
			render:function (){
				console.log( this.state.listState );
				return (
					<div>
						<HeaderComponent />
						<div className="container">
							<MesComponent changeList={this.changeList} />
							<ListComponent listArr = {this.state.listState} />
						</div>
				    </div>
				)		
			}
		});



var demo = document.createElement('div');

document.body.appendChild(demo);

ReactDOM.render(<MainComponent listArr = {listArr} />,demo);



