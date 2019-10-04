import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';
import FetchApi from '../service/fetchApi';
import UserInfoService from '../service/userInfoService';

class SocialLogin extends Component {
    constructor() {
        super();
        this.state = {
            userLogin: UserInfoService.getUserInfo() ? true : false,
        }
    }
    responseGoogle = (response) => {
        if(response.profileObj){
            UserInfoService.addUser(response.profileObj);
            let user = response.profileObj;
            this.setState({
                userLogin: true,
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
    }

    logout = () => {
        UserInfoService.removeUser();
        this.setState({
            userLogin: false,
        });
    }

    renderSocialLogin = () => {
        if (this.state.userLogin) {
            let userInfo = UserInfoService.getUserInfo();
            return (
                <span className="logout-button">
                    <img src={userInfo.imageUrl} alt="" className="rounded-circle"></img>
                    <a onClick={this.logout} className="logout">Logout</a>
                </span>
            )
        } else {
            return (
                <GoogleLogin
                    //Used email felix@inxvn.com to get cliendId
                    clientId="512056324591-63hs5st5oe3bi5pt834idfvb1k8bn2ce.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                />)
        }
    }

    renderLoginLogout() {
        return (
            <div className="social-login">
                {this.renderSocialLogin()}
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