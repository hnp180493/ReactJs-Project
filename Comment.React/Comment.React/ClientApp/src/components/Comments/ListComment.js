import React from 'react';
import FetchApi from '../../service/fetchApi';
import Comment from './Comment'
import { connect } from 'react-redux';
import FetchAPI from '../../service/fetchApi';
import UserInfoService from '../../service/userInfoService';

class ListComment extends React.Component {
    constructor() {
        super();
        this.state = {
            comments: [],
            totalPages: 1,
            page: 1
        }
    }

    async componentDidMount() {
        await this.handleComments();
    }

    async componentDidUpdate() {
        if (this.props.forceReload) {
            await this.handleComments();
        }
    }

    async getComments(page = 1) {
        let userInfo = UserInfoService.getUserInfo();
        let params = {
            email: userInfo.email,
            page: page
        }
        let commentsInfo = await FetchApi.get(FetchAPI.getComments, params);
        return commentsInfo;
    }

    async handleComments() {
        let commentsInfo = await this.getComments();
        this.setState({
            totalPages: commentsInfo.totalPages
        })
        this.setState({
            comments: commentsInfo.comments
        })
        this.props.dispatchGetComments();
    }

    loadMoreComment = async () => {
        let page = this.state.page + 1;
        let commentsInfo = await this.getComments(page);
        this.setState({
            comments: [...this.state.comments, ...commentsInfo.comments],
            page: page
        })
    }

    renderViewMore = () => {
        if (this.state.totalPages > 1 && this.state.page < this.state.totalPages) {
            return (
                <a className="view-more" onClick={this.loadMoreComment}>
                    View more
                </a>
            )
        }
    }

    renderComments() {
        return (
            this.state.comments.map((comment, i) => {
                return <Comment key={comment.commentId} comment={comment}></Comment>;
            })
        );
    }

    render() {
        return (
            <div>
                <ul className="media-list">
                    {this.renderComments()}
                </ul>
                {this.renderViewMore()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        forceReload: state.commentReducer.forceReload,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        dispatchGetComments: () => {
            dispatch({ type: 'GET_COMMENTS' })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ListComment);
