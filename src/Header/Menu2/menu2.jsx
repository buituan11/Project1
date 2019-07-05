import React, { Component } from 'react';
import './menu2.css';

class Menu2 extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="menu2 container-fluid">
           		<div className="row">
           			<div className="menu2-title col-md-3" onLoad={(e)=> this.changeWidth()}>
           				<h1> { this.props.title } </h1>
           				<button style={{bottom: '55px'}}> { this.props.button1 } <i className="fas fa-globe" /></button>
           				<button style={{bottom: '10px'}}> LIÊN HỆ <i className="far fa-comment-alt" /> </button>
           			</div>
	           		<div className="menu2-detail col-md-9">
	           			{ this.props.detail.map((item, index) => <p key={index}> {item} </p>)}
	           		</div>
           		</div>
           	</div>
        );
    }
}

export default Menu2;
