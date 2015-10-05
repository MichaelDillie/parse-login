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
		Parse.User.logIn(
			{
			success: function(user) {
				console.log('loged in');
			},
			error: function(user, error) {

			}
		});
	}
});
