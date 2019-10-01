import React, { Component } from 'react';
import ChildComment from './ChildComment';
import Helper from '../../service/helper';
import FormComment from '../FormComment';
import FetchAPI from '../../service/fetchApi';

class Comment extends Component {
    constructor() {
        super();
        this.state = {
            replyText: 'Reply',
            toggleReply: false
        }
    }
    toggleReply = () => {
        if (this.state.toggleReply) {
            return (
                <div className="child-reply">
                    <FormComment rows={2} parentId={this.props.comment.commentId} />
                </div>
            )
        }
    }
    handleReply = () => {
        this.setState({
            toggleReply: !this.state.toggleReply,
            replyText: this.state.toggleReply ? 'Hide' : 'Reply'
        })
    }
    getChildComments = async () => {
        var request = `${FetchAPI.getChildCommentsAndUsers}?parentId=${this.props.comment.commentId}`;
        let childs = await FetchAPI.get(request);
        if (childs.length > 0) {
            return childs.map((comment, index) => {
                return (
                    <ChildComment />
                )
            })
        }
    }

    render() {

        return (
            <li className="media">
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
                            <a className="float-right btn btn-outline-primary ml-2" onClick={this.handleReply}> <i className="fa fa-reply" /> {this.state.replyText}</a>
                            <a className="float-right btn text-white btn-danger"> <i className="fa fa-heart" /> Like</a>
                        </div>
                    </div>
                    {this.toggleReply()}

                    {this.getChildComments()}
                </div>
            </li>

        );
    }
}

export default Comment;