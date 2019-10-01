import React from 'react';
import FetchAPI from '../service/fetchApi';
import {connect} from 'react-redux';
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
        this.props.dispatchAddComment();
    }

    resetForm(){
        this.content.current.value = "";
    }

    render() {
        return (
            <form onSubmit={(e) => this.addComment(e)}>
                <textarea className="form-control"
                    placeholder="write a comment..."
                    rows={this.props.rows || 3}
                    defaultValue={""}
                    ref={this.content} />
                <br />
                <button type="submit" className="btn btn-info float-right">Post</button>
            </form>
        )
    }
}

let mapDispatchToProps = (dispatch)=>{
    return {
        dispatchAddComment: ()=>{
            dispatch({type: 'ADD_COMMENT'})
        }
    }
}

export default connect(null, mapDispatchToProps)(FormComment);