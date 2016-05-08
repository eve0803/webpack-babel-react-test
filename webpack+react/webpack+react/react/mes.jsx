var React = require('react');
var ReactDOM = require('react-dom');
var MesComponent = React.createClass({
			render:function (){
				return (
					<div className="col-md-4">
		                <form className="form-horizontal">
		                    <div className="form-group">
		                        <label>用户名</label>
		                        <input type="text" ref="user_input" className="form-control" placeholder="用户名" />
		                    </div>
		                    <div className="form-group">
		                        <label>留言内容</label>
		                        <textarea ref="content_input" className="form-control" rows="6" placeholder="留言内容"></textarea>
		                    </div>
		                    <div className="form-group">
		                        <div className="col-sm-offset-2 col-sm-10">
		                            <button type="button" onClick={this.sendMesHandle} className="btn btn-default pull-right">提交</button>
		                        </div>
		                    </div>
		                </form>
		            </div>
				)		
			},
			sendMesHandle:function (){
				var userName = this.refs.user_input.value;		
				var content = this.refs.content_input.value;	

				this.props.changeList({
					userName:userName,
					content:content,
					_id:Date.now()
				});

				this.refs.user_input.value = "";
				this.refs.content_input.value = "";
			}
		});


module.exports = MesComponent;