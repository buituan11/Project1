import React, { Component } from 'react';

class Comment extends Component {
    constructor(props) {
        super(props);
    	this.state={
            commentId: 0,   
            comment: [
                {
                    img: "Img/comment/comment-1.png",
                    detail: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante,"
                },
                {
                    img: "Img/comment/comment-2.png",
                    detail: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante,"
                },
                {
                    img: "Img/comment/comment-3.png",
                    detail: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante,"
                }
            ]
        } 
    }
    setId = (value) =>{
    	if (value < 0){
    		return this.state.comment.length-1;
    	}
    	if (value > this.state.comment.length-1){
    		return 0;
    	}
    	return value;
    }
    render() {
        return (
        <div className="row">
        	<button className="prev col-md-1" onClick={() => this.setState({commentId: this.setId(this.state.commentId-1)})}>
                <i className="fas fa-chevron-left 7x" />
            </button>
            <div className="comment-1 col-md-10 container-fluid">
                <div className="row">
                    <div className="img-comment col-md-5">
                        <img src={this.state.comment[this.state.commentId].img} alt=""/>
                    </div>
                    <div className="detail-comment col-md-7">
                        <p>{this.state.comment[this.state.commentId].detail}</p>
                    </div>
                </div>
            </div>
            <button className="next col-md-1" onClick={() => this.setState({commentId: this.setId(this.state.commentId+1)})}>
                <i className="fas fa-chevron-right 7x" />
            </button>
        </div>
        );
    }
}

export default Comment;
