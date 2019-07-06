import React, { Component } from 'react';
import './comment.css';
class Comment extends Component {
    constructor(props) {
        super(props);
    }
    comment = () =>{
    	return (
    		<div className="comment-1 col-md-10 container-fluid">
		    	<div className="row">
		    		<div className="img-comment col-md-5">
		    			<img src="Img/comment/comment-1.png" alt=""/>
		    		</div>
		    		<div className="detail-comment col-md-7">
		    			<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante,</p>
		    		</div>
		    	</div>
			</div>
    	);
    }
    render() {
        return (
            <div className="comment-slide container-fluid">
            	<div className="row"> 
            		<button className="prev col-md-1">
		            	<i className="fas fa-chevron-left 7x" />
		            </button>
		    		{ this.comment() }
		    		<button className="next col-md-1">
		            		<i className="fas fa-chevron-right next" />
		            </button>
		        </div>
            </div>
        );
    }
}

export default Comment;
