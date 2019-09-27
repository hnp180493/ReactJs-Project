import React, { Component } from 'react';

class ChildComment extends Component {
    render() {
        return (
            <div className="media mt-3">
                <a href="#" className="float-left">
                    <img src="https://bootdey.com/img/Content/user_2.jpg" alt="" className="rounded-circle" />
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
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Lorem ipsum dolorsit amet, <a href="#">#consecteturadipiscing </a>
                            </p>
                            <a className="float-right btn btn-outline-primary ml-2"> <i className="fa fa-reply" /> Reply</a>
                            <a className="float-right btn text-white btn-danger"> <i className="fa fa-heart" /> Like</a>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default ChildComment;