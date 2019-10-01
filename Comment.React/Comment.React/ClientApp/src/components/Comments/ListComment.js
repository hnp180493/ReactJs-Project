import React from 'react';
import FetchApi from '../../service/fetchApi';
import Comment from './Comment'
import { connect } from 'react-redux';
class ListComment extends React.Component {
    constructor() {
        super();
        this.state = {
            lstComments: [],
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

    async getComments() {
        let comments = await FetchApi.get('/api/Comment/get-comments?page=1&pageSize=10');
        this.props.dispatchGetComments(comments);
    }

    renderComments() {
        return (
            this.props.comments.map((comment, i) => {
                return <Comment key={i} comment={comment}></Comment>;
            })
        );
    }
    render() {
        return (
            <ul className="media-list">
                {this.renderComments()}
            </ul>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        forceReload: state.comments.forceReload,
        comments: state.comments.comments
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        dispatchGetComments: (comments) => {
            dispatch({ type: 'GET_COMMENTS', comments })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ListComment);
