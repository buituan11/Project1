import React, { Component } from 'react';
import './visual.css';
class Visual extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        	<div className="visual container-fluid">
	        	<div className="visual-title">
	        			<p>Hãy trải nghiệm tất cả tính năng của ECOUNT ERP</p>
		        		<p>để Thay Đổi Hiệu Quả</p>
		        		<p>chỉ 1.000.000 đồng mỗi tháng</p>
	        	</div>
	        	<ul className="visual-detail">
	        		<li><a href="#"><img src="Img/icon/ico-nen-tang-erp.png" alt=""/><br/>NỀN TẢNG WEB</a></li>
	        		<li><a href="#"><img src="Img/icon/icon-quan-ly-kho.png" alt=""/><br/>QUẢN LÝ KHO</a></li>
	        		<li><a href="#"><img src="Img/icon/icon-san-xuat.png" alt=""/><br/>SẢN XUẤT</a></li>
	        		<li><a href="#"><img src="Img/icon/icon-ban-hang.png" alt=""/><br/>BÁN HÀNG</a></li>
	        		<li><a href="#"><img src="Img/icon/icon-mua-hang.png" alt=""/><br/>MUA HÀNG</a></li>
	        		<li><a href="#"><img src="Img/icon/icon-ke-toan.png" alt=""/><br/>KẾ TOÁN</a></li>
	        		<li><a href="#"><img src="Img/icon/icon-quan-ly-kho.png" alt=""/><br/>QUẢN LÝ KHO</a></li>
	        		<li><a href="#"><img src="Img/icon/icon-quan-ly-nhom.png" alt=""/><br/>QUẢN LÝ NHÓM</a></li>
	        	</ul>
	        </div>
        );
    }
}
export default Visual;
