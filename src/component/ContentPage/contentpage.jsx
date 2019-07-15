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
				<NavLink to={`${item.path}/${item.subroute[0].id}`} >   {/*activeClassName="active-side-bar"*/}
					{ item.title } <i className="fas fa-chevron-down"/>
				</NavLink> 
				{item.subroute.map((e,index)=>
					<NavLink key={index} to={`${item.path}/${e.id}`} activeClassName="active-sub-route" className="sub-route">
						{e.title}
					</NavLink>
				)}
			</li>
    	);
    }
    showItem = (title) =>{
    	return(
    		<Item title={title}/>
    	);
    }
    componentDidMount() {
    }
    render() {
        return (
        <Router >
			<div className="content-page container-fluid">
			<div className="row">
				<div className="side-bar col-md-3">
					<h1>{this.props.sidebar.title}</h1>
						<ul>
							{ this.showSideBar( this.props.sidebar )}
						</ul>
				</div>
				{this.props.sidebar.routes.map((item) =>
					item.subroute.map((e, index) =>	
						<Route key={index} path={`${item.path}/${e.id}`} component={ ()=> this.showItem(e.title) }/>
					)
				)}
			</div>
			</div>      
		</Router>      
        );
    }
}

export default Content;
  //   render() {
  //       return (
  //       <Router>
		// 	<div className="content-page container-fluid">
		// 	<div className="row">
		// 		<div className="side-bar col-md-3">
		// 			<h1>{this.props.sidebar.title}</h1>
		// 				<ul>
		// 					{ this.showSideBar( this.props.sidebar )}
		// 				</ul>
		// 		</div>
		// 		{this.props.sidebar.routes.map((item) =>
		// 			item.subroute.map((e, index) =>
		// 				<Route key={index} exact path={e.path} component={ ()=> this.showItem(e.title) }/>
		// 			)
		// 		)}
		// 	</div>
		// 	</div>      
		// </Router>      
  //       );
  //   }