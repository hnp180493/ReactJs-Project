import React from 'react';
import ListComment from './components/Comments/ListComment';
import FormComment from './components/FormComment';
import SocialLogin from './components/SocialLogin'

export default class App extends React.Component {
    render() {

        return (
            <div className="container">
                <div className="row bootstrap snippets">
                    <div className="col-lg-10 mx-auto">
                        <div className="comment-wrapper">
                            <div className="card">
                                <div className="card-header">
                                    Comment panel
                                    <SocialLogin />
                                </div>

                                <div className="card-body">
                                    <FormComment />
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