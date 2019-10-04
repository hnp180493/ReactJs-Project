import React, { Component } from 'react';
import ChildComment from './ChildComment';
import FetchAPI from '../../service/fetchApi';
import { connect } from 'react-redux';
import UserInfoService from '../../service/userInfoService';

class ListChildComment extends Component {
    constructor() {
        super();
        this.state = {
            childComments: []
        }
    }

    async componentDidMount() {
        await this.getComments();
    }

    async componentDidUpdate() {
        if (this.props.forceReload) {
            await this.getComments();
        }
    }

    shouldComponentUpdate(nextProp) {
        if (this.props.parentId !== nextProp.parentIdRedux) {
            return false;
        }

        return true;
    }

    async getComments() {
        let userInfo = UserInfoService.getUserInfo();
        let params = {
            email: userInfo.email,
            parentId: this.props.parentId
        }
        let commentsInfor = await FetchAPI.get(FetchAPI.getChildCommentsAndUsers, params);
        this.setState({
            childComments: commentsInfor.comments
        })
        this.props.dispatchGetComments(this.props.parentId);
    }

    renderChildComments() {
        return this.state.childComments.map((comment, index) => {
            return (
                <ChildComment key={comment.commentId} comment={comment} />
            )
        })
    }
    render() {
        return (
            <div>
                {this.renderChildComments()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        forceReload: state.childCommentReducer.forceReload,
        parentIdRedux: state.childCommentReducer.parentId
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        dispatchGetComments: (parentId) => {
            dispatch({ type: 'GET_CHILD_COMMENTS', parentId })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ListChildComment);