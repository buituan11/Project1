import React, { Component } from 'react';
import './contentpage.css';
class Content extends Component {
    constructor(props) {
        super(props);
        this.state={
        	arrow: [<i className="fas fa-chevron-up"></i>, <i className="fas fa-chevron-down"></i>]
        }
    }
    showSideBar = ( sidebar ) => {
    	return sidebar.map((item, index) =>
    		<li key={ index }> { item }  {this.state.arrow[0]} </li>
    	);
    }

    render() {
        return (
			<div className="content-page container-fluid">
			<div className="row">
				<div className="side-bar col-md-2">
					<h1>LABEL</h1>
					<ul>
						{ this.showSideBar( this.props.sidebar )}
					</ul>
				</div>
				<div className="content col-md-10">
					<h1>LABEL CONTENT</h1>
					<div className="item">
						<h2>AAAAAAAAAAAA</h2>
						<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend</p>
						<img src="Img/example.jpg" alt=""/>		
					</div>		
					<div className="item">
						<h2>AAAAAAAAAAAA</h2>
						<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend</p>
						<img src="Img/example.jpg" alt=""/>		
					</div>	
					<h2>LABEL SIDEBAR</h2>
					<div className="content-list">
					</div>
				</div>
			</div>
			</div>            
        );
    }
}

export default Content;
