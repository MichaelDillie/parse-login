var React = require('react');

module.exports = React.createClass({
	getInitialState: function() {
		return { error: null };
	},
	render: function() {
		return (
			<div className="container">
				<div className="row">
					<form className="form" onSubmit={this.onLogin}>
						<h1>Login</h1>
						<input type="text" className="username-login" ref="username" />
						<input type="password" className="password-login" ref="password" />
						<button>LogIn</button>
					</form>
				</div>
			</div>
		);
	},
	onLogin: function(e) {
		e.preventDefault();
		var user = new Parse.User();
		user.Login(
			{
				username: this.refs.email.getDOMNode().value,
				password: this.refs.password.getDOMNode().value,
			},
			{
				success: (u) => {
					this.props.router.navigate('dashboard', {trigger: true});
				},
				error: (u, error) => {
					this.setState({
						error: error.message
					});
				}
			}
		);
	}
});
