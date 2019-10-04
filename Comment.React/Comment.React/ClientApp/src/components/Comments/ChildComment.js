import React, { Component } from 'react';
import Helper from '../../service/helper';
import Like from '../Common/Like'
class ChildComment extends Component {
    render() {
        return (
            <div className="media mt-3">
                <a href="https://www.google.com/" className="float-left">
                    <img src={this.props.comment.image} alt="" className="rounded-circle" />
                </a>
                <div className="media-body">
                    <div className="comment-item">
                        <div className="media-heading">
                            <span className="text-muted float-right">
                                <small className="text-muted">{Helper.CalculateDateTime(this.props.comment.createdOn)}</small>
                            </span>
                            <strong className="text-success">{this.props.comment.fullName}</strong>
                        </div>
                        <div className="comment-content">
                            <p>
                                {this.props.comment.content}
                            </p>
                        </div>
                        <div className="btn-wrapper">
                            <Like like={
                                {
                                    commentId: this.props.comment.commentId,
                                    email: this.props.comment.email,
                                    totalLike: this.props.comment.totalLike,
                                    isLike: this.props.comment.isLike
                                }
                            } />
                        </div>

                    </div>
                </div>
            </div>

        );
    }
}

export default ChildComment;