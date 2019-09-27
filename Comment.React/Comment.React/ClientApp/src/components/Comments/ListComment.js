import React from 'react';
import FetchApi from '../../service/fetchApi';
import Comment from './Comment'
export default class ListComment extends React.Component {
    constructor() {
        super();
        this.state = {
            lstComments: [],
        }
    }

    async componentDidMount(){
        let comments = await FetchApi.get('/api/Comment/getall');
        this.setState({
            lstComments: comments
        })
        console.log(comments);
    }

    renderComments() {
        return (
           this.state.lstComments.map((comment, index)=>{
               return <Comment />;
           })
        );
    }
    render() {
        let content = this.renderComments(this.props.comments);
        return (
            <ul className="media-list">
                {content}
            </ul>
        )
    }
}
