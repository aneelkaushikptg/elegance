import React from 'react';

class Login extends React.Component {
    render() {
        return (
            <div className="login">
                <div class="login-inner">
                    <h2>Login</h2>
                    <form name="form">
                        <div className="form-group">
                            <label for="username">Email Address</label>
                            <input type="text" className="form-control" name="email" value="" />
                        </div>
                        <div className="form-group">
                            <label for="password">Password</label>
                            <input type="password" className="form-control" name="password" value="" />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;


