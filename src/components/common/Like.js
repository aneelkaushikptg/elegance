import React, { Component } from 'react';

class Like extends Component {
    render() {
        let classes = "like ";
        if (!this.props.liked) classes += "unlike";
        return (
            <button onClick={this.props.onClick} className={classes}></button>
        );
    }
}

export default Like;
