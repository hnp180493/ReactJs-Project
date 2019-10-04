import React from 'react';
import FetchAPI from '../service/fetchApi';
import { connect } from 'react-redux';
class FormComment extends React.Component {
    constructor() {
        super();
        this.content = React.createRef();
    }

    addComment = async (e) => {
        e.preventDefault();
        let userInfo = JSON.parse(localStorage.getItem("USER_INFO"));
        if (userInfo === null) {
            alert("Please login before comment!");
            return false;
        }

        let content = this.content.current.value;
        if (content === "") {
            alert("Please input your comment!");
            return false;
        }

        let params = {
            email: userInfo.email,
            content: content,
            parentId: this.props.parentId
        }

        await FetchAPI.post(FetchAPI.addComment, params);
        this.resetForm();
        
        //Child Form Comment
        if (this.props.changeStateAfterComment) {
            this.props.dispatchAddChildComment(this.props.parentId);
            this.props.changeStateAfterComment();
        }else{ //Parent Form Comment
            this.props.dispatchAddComment();
        }
    }

    resetForm() {
        this.content.current.value = "";
    }

    render() {
        return (
            <form onSubmit={(e) => this.addComment(e)}>
                <textarea className="comment-input"
                    placeholder="write a comment..."
                    rows={this.props.rows || 2}
                    defaultValue={""}
                    ref={this.content} />
                <br />
                <button type="submit" className="btn btn-info float-right">Post</button>
            </form>
        )
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        dispatchAddComment: () => {
            dispatch({ type: 'ADD_COMMENT' })
        },
        dispatchAddChildComment: (parentId) => {
            dispatch({ type: 'ADD_CHILD_COMMENT', parentId })
        }
    }
}

export default connect(null, mapDispatchToProps)(FormComment);