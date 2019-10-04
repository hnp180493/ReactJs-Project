import React, { Component } from 'react';
import FetchAPI from '../../service/fetchApi';
import {connect} from 'react-redux';
import UserInfoService from '../../service/userInfoService';
class Like extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reloadLike: false,
            isLike: this.props.like.isLike,
            totalLike: this.props.like.totalLike || 0,
        }
        this.userLogin = JSON.parse(localStorage.getItem("USER_INFO"));
    }
    async componentDidMount() {
        this.props.hubConnection.on('LIKE_BUTTON_CLICK', (commentId, email, totalLike) => {
            if (this.props.like.commentId === commentId) {
                this.setState({
                    totalLike: totalLike,
                })
                if(email === this.userLogin.email){
                    this.setState({
                        isLike: !this.state.isLike
                    })
                }
            }
        })
    }

    handleLikeComment = async () => {
        let userInfo = UserInfoService.getUserInfo();
        if (userInfo) {
            let request = `${FetchAPI.likeComment}?commentId=${this.props.like.commentId}&email=${userInfo.email}`;
            let response = await FetchAPI.post(request);
            if (response) {
                this.props.hubConnection.invoke('LikeButtonClick', this.props.like.commentId, userInfo.email);
            } else {
                alert("Please try later");
            }
        } else {
            alert("Please login first!");
        }

    }

    render() {
        let totalLike = this.state.totalLike > 0 ? this.state.totalLike : "";
        let isLike = this.state.isLike ? "active" : "";
        return (
            <span className="total-like">
                {totalLike}
                <a className={`like-button ${isLike}`} onClick={this.handleLikeComment}>
                    <i className="fa fa-heart bouncy" />
                </a>
            </span>
        );
    }
}

let mapStateToProps = (state) =>{
    return{
        hubConnection: state.hubConnection
    }
}

export default connect(mapStateToProps)(Like);