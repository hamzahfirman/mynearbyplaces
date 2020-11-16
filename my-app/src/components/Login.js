import React from 'react';
import { Redirect } from 'react-router-dom';
/* REACT BOOSTRAP */
import { Button } from 'react-bootstrap';
/* CSS */
import './Login.css';
/* Images */
import Resto from '../images/resto2.jpg';

class Login extends React.Component {
    // State of this component
    constructor(props) {
        super(props);
        // State is an object
        this.state = {
            username: '',
            authenticated: false
        };
    }
    // Submit 
    logInSubmit = (event) => {
        if (this.state.username.trim().length > 0) {
            //Let them into the Homepage
            this.setState({
                authenticated: true
            });
        }
        event.preventDefault();

    }
    hadleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        // Changes the username
        this.setState({
            [name]: value
        });
    }
    render() {
        {/* 
        from - is an object that will be passed to
        homepage component. Also, 'state' property
        inside form is independent from the 'state' 
        in the constructor of this component
         */}
        let from = { pathname: '/', state: { user: this.state.username } }
        if (this.state.authenticated) {
            {/* Redirect to the Homepage */}
            return (
                <Redirect to={from} />
            );
        }

        return (
            <div>
                <div id="headerTitle">FINDAPLACE</div>
                <div className="login">
                    <form className="form" onSubmit={this.logInSubmit}>
                        <input
                            type="text"
                            value={this.state.username}
                            onChange={this.hadleChange}
                            name="username" 
                            placeholder="username"/>
                            <Button as="input" type="submit" id="loginButton" value="Login" />
                    </form>
                </div>
                <img src={Resto} id="restoImg" height="350px" width="500px" alt="resto2"/>
            </div>
        );
    }
}


export default Login;