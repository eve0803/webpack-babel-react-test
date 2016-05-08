var React = require('react');
var ReactDOM = require('react-dom');
var HeaderComponent = React.createClass({
	render:function (){
		return (
			 <header className="site-header jumbotron">
		        <div className="container">
		            <div className="row">
		                <div className="col-xs-12">
		                    <h1>欢迎</h1>
		                    <p className="lead">妙味课堂是一支独具特色的IT培训团队，妙味反对传统IT教育枯燥乏味的教学模式，妙味提供一种全新的快乐学习方法！</p>
		                </div>
		            </div>
		        </div>
		    </header>
		)		
	}
});


module.exports = HeaderComponent;