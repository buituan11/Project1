import React, { Component } from 'react';
import './main.css';
import Visual from '../Visual/visual.jsx';
import Comment from '../Comment/comment.jsx';
import Statistic from '../Statistic/statistic.jsx';
import Merit from '../Merit/merit.jsx';

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (	
            <div className="main container-fluid">
            	<Visual/>
            	<div className="comment">
            		<Comment/>
					<div className="more-comment container-fluid">
						<p>Hãy cũng xem những câu chuyện từ khách hàng khác</p>
						<button>Xem ngay tại đây   <i className="fas fa-plus"/></button>
					</div>
            	</div>
				<Statistic/>  		
				<Merit/>
            </div>
        );
    }
}

export default Main;
