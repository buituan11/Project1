import React, { Component } from 'react';
import './item.css';

class Item extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        	<div className="content col-md-9">
					<h1>LABEL CONTENT</h1>
					<div className="item">
						<h2>AAAAAAAAAAAA</h2>
						<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend</p>
						<img src="https://res.cloudinary.com/buituan/image/upload/v1562925138/Project1/example.jpg" alt="abc"/>		
					</div>		
					<div className="item">
						<h2>AAAAAAAAAAAA</h2>
						<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend</p>
						<img src="https://res.cloudinary.com/buituan/image/upload/v1562925138/Project1/example.jpg" alt=""/>		
					</div>	
					<h2>LABEL SIDEBAR</h2>
					<div className="content-list">
					</div>
				</div>
        );
    }
}

export default Item;
