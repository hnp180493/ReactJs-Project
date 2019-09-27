import React, { Component } from 'react';
import ChildComment from './ChildComment';
    
class Comment extends Component {
    render() {
        return (
            <li className="media">
                <a href="#" className="float-left">
                    <img src="https://bootdey.com/img/Content/user_1.jpg" alt="" className="rounded-circle" />
                </a>
                <div className="media-body">
                    <div className="comment-item">
                        <div className="media-heading">
                            <span className="text-muted float-right">
                                <small className="text-muted">30 min ago</small>
                            </span>
                            <strong className="text-success">@MartinoMont</strong>
                        </div>
                        <div className="comment-content">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
                                dolor
                                sit amet, <a href="#">#consecteturadipiscing </a>
                            </p>
                            <a className="float-right btn btn-outline-primary ml-2"> <i className="fa fa-reply" /> Reply</a>
                            <a className="float-right btn text-white btn-danger"> <i className="fa fa-heart" /> Like</a>
                        </div>
                    </div>
                    <ChildComment />
                </div>
            </li>

        );
    }
}

export default Comment;