import React from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import InputComment from './components/InputComment';
import ListComment from './components/Comments/ListComment';
import FetchApi from '../src/service/fetchApi';


export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            comment: '',
            userLogin: null,
            
        }
    }
    handleChangeComment = (e) => {
        this.setState({
            comment: e.target.value,
        })
    }

    handleSubmitComment = (e) => {
        e.preventDefault();
        let content = this.state.comment;
        let user = this.state.userLogin;
        if (user === null) {
            alert("Please login before comment!");
            return;
        }
        if (content) {
            let params = {
                Email: user.email,
                Content: this.state.comment,
                ParentId: null,
            }
            FetchApi.post('/api/comment/add', params);
            this.setState({
                content: '',
            });
        } else {
            alert("Please enter your comment!");
            return;
        }
    }
    responseGoogle = (response) => {
        this.setState({
            userLogin: response.profileObj,
        });
        let user = response.profileObj;
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
    render() {
        // {
        //     this.state.userLogin &&
        //     <GoogleLogout
        //         buttonText="Logout"
        //         onLogoutSuccess={() => this.setState({ userLogin: null })}
        //     >
        //     </GoogleLogout>
        // }
        // {
        //     this.state.userLogin === null &&
        //     <GoogleLogin
        //         //Used email felix@inxvn.com to get cliendId
        //         clientId="512056324591-63hs5st5oe3bi5pt834idfvb1k8bn2ce.apps.googleusercontent.com"
        //         buttonText="Login"
        //         onSuccess={this.responseGoogle}
        //         onFailure={this.responseGoogle}
        //     />
        // }
        return (
            <div className="container">
                <div className="row bootstrap snippets">
                    <div className="col-lg-12">
                        <div className="comment-wrapper">
                            <div className="card">
                                <div className="card-header">Comment panel</div>
                                <div className="card-body">
                                    <textarea className="form-control" placeholder="write a comment..." rows={3} defaultValue={""} />
                                    <br />
                                    <button type="button" className="btn btn-info float-right">Post</button>
                                    <div className="clearfix" />
                                    <hr />
                                    <ListComment />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}