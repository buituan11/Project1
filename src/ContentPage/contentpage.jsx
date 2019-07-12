import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import './contentpage.css';
import Item from './Item/item.jsx';
class Content extends Component {
    constructor(props) {
        super(props);
        this.state={
        	re: 1,
        	arrow: [<i className="fas fa-chevron-up"></i>, <i className="fas fa-chevron-down"></i>]
        }
    }
    showSideBar = ( sidebar ) => {
    	return sidebar.routes.map((item, index) =>
    		<li key={ index }> 
				<NavLink to={item.path} activeClassName="active-side-bar">
					{ item.title  }
				</NavLink> 
			</li>
    	);
    }
    render() {
        return (
        <Router>
			<div className="content-page container-fluid">
			<div className="row">
				<div className="side-bar col-md-3">
					<h1>{this.props.sidebar.title}</h1>
						<ul>
							{ this.showSideBar( this.props.sidebar )}
						</ul>
				</div>
				{this.props.sidebar.routes.map((item, index) =>
					<Route key={index} exact path={item.path} component={ Item }/>
				)}
			</div>
			</div>      
		</Router>      
        );
    }
}

export default Content;
