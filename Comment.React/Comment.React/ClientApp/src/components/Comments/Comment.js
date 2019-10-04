import React, { Component } from 'react';
import Helper from '../../service/helper';
import FormComment from '../FormComment';
import ListChildComment from './ListChildComment';
import Like from '../Common/Like';
import TotalReply from './TotalReply';
import {connect} from 'react-redux';
class Comment extends Component {
    constructor() {
        super();
        this.state = {
            toggleReply: false,
            toggleChildComment: false
        }
    }

    handleReply = () => {
        this.setState({
            toggleReply: !this.state.toggleReply,
        })
    }
    handleChildComments = () => {
        this.setState({
            toggleChildComment: !this.state.toggleChildComment
        })
    }

    changeStateAfterComment = () => {
        this.setState({
            toggleReply: false,
            toggleChildComment: true
        })
    }

    renderReplyText = () => {
        return this.state.toggleReply ? 'Hide' : 'Reply';
    }
    renderChildComments = () => {
        if (this.state.toggleChildComment) {
            return <ListChildComment parentId={this.props.comment.commentId} />
        }
    }
    renderReplyForm = () => {
        if (this.state.toggleReply) {
            return (
                <div className="child-reply">
                    <FormComment rows={1} 
                        parentId={this.props.comment.commentId} 
                        changeStateAfterComment={this.changeStateAfterComment} />
                </div>
            )
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
                            <a className="btn-child-reply" onClick={this.handleReply}> <i className="fa fa-reply" /> {this.renderReplyText()}</a>
                            {this.renderReplyForm()}

                            <TotalReply 
                                totalReply={this.props.comment.totalReply}
                                toggleChildComment={this.state.toggleChildComment}
                                handleChildComments={this.handleChildComments}/>
                        </div>

                    </div>

                    {this.renderChildComments()}
                </div>
            </li>

        );
    }
}


export default connect()(Comment);