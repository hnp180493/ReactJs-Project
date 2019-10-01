import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';
import FetchApi from '../service/fetchApi'
class SocialLogin extends Component {
    constructor() {
        super();
        this.state = {
            userLogin: JSON.parse(localStorage.getItem('USER_INFO')),
        }
    }
    responseGoogle = (response) => {
        localStorage.setItem('USER_INFO', JSON.stringify(response.profileObj));
        let user = response.profileObj;
        this.setState({
            userLogin: {
                email: user.email,
                fullName: user.name,
                type: 'Google'
            },
        });
        var params = {
            Email: user.email,
            FullName: user.name,
            FirstName: user.givenName,
            LastName: user.familyName,
            Image: user.imageUrl,
            type: 'Google',
        }
        FetchApi.post('/api/user/add', params);
    }

    logout = () => {
        localStorage.removeItem('USER_INFO');
        this.setState({
            userLogin: null,
        });
    }

    renderLoginLogout() {
        return (
            <div className="social-login">
                {
                    this.state.userLogin &&
                    // <GoogleLogout
                    //     clientId="512056324591-63hs5st5oe3bi5pt834idfvb1k8bn2ce.apps.googleusercontent.com"
                    //     buttonText="Logout"
                    //     onLogoutSuccess={this.logout}
                    // >
                    // </GoogleLogout>
                    <button onClick={this.logout}>Logout</button>
                }
                {
                    this.state.userLogin === null &&
                    <GoogleLogin
                        //Used email felix@inxvn.com to get cliendId
                        clientId="512056324591-63hs5st5oe3bi5pt834idfvb1k8bn2ce.apps.googleusercontent.com"
                        buttonText="Login"
                        onSuccess={this.responseGoogle}
                        onFailure={this.responseGoogle}
                    />
                }
            </div>
        )
    }
    render() {
        return (
            this.renderLoginLogout()
        )
    }
}

export default SocialLogin;