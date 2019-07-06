import React, { Component } from 'react';
import './statistic.css';
class Statistic extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="statistic">
            	<p className="statistic-title">ECOUNT mang đến phương pháp quản lý<br/>cho doanh nghiệp vừa và nhỏ bằng sự tin cậy và tín nhiệm</p>
				<ul>
					<li>
						<img src="Img/icon/chi-nhanh.png" alt=""/>
						<h1> 10 </h1>
						<p>Chi nhánh toàn cầu</p>
					</li>
					<li>
						<img src="Img/icon/nam-kinh-nghiem.png" alt=""/>
						<h1> 20 </h1>
						<p>Năm kinh nghiệm</p>
					</li>
					<li>
						<img src="Img/icon/tinh-nang.png" alt=""/>
						<h1> 27.030 </h1>
						<p>Số tính năng phát triển suốt 20 năm</p>
					</li>
					<li>
						<img src="Img/icon/dv-su-dung.png" alt=""/>
						<h1> 40.000 </h1>
						<p>Đơn vị sử dụng</p>
					</li>
				</ul>
				<div className="more-statistic">
					<p>1.256 ngành hàng kinh doanh khác nhau<br/>đang tin dùng ECOUNT ERP</p>
					<button> Xem chi tiết <i className="fas fa-plus"/></button>
				</div>
            </div>
        );
    }
}

export default Statistic;
