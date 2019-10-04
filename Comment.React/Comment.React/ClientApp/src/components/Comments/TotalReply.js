import React, { Component } from 'react';

class TotalReply extends Component {
    renderTotalReply = () => {
        if (this.props.totalReply > 0 && this.props.toggleChildComment === false) {
            return (
                <p onClick={this.props.handleChildComments}>
                   <span>View {this.props.totalReply} reply <i className="fa fa-angle-down"></i></span>
                </p>
            )
        }
    }
    render() {
        return (
            <div>
                {this.renderTotalReply()}
            </div>
        );
    }
}

export default TotalReply;