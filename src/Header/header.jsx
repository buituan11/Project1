import React, { Component } from 'react';
import './header.css';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
           <header className="container-fluid">
           		<div className="row">
           			<div className="icon col-md-3">
           				<a href="#"> <img src="Img/icon.png" alt="icon"/></a>
           			</div>
           			<div className="navBar col-md-9">
           				<div className="contact container-fluid">
           					<i className="fas fa-user-circle" />
           					<div className="btn-contact">
           						<button> Yêu cầu gặp trực tiếp </button>
	           					<button> Bản demo </button>
	           					<button> Dùng thử ngay </button>
           					</div>
           					<a href="#"> <i className="fas fa-headphones-alt"/> 000-0000-0000 </a>
           				</div>
           				<nav className="menu container-fluid">
           					<div className="menu1">
           						<a href="#"> TÍNH NĂNG ERP </a>
           						<div className="menu2 container-fluid">
           							<div className="row">
           								<div className="menu2-title col-md-3">
           									<h1> TÍNH NĂNG </h1>
           									<button style={{bottom: '55px'}}> PHIÊN BẢN MÔ PHỎNG <i className="fas fa-globe" /></button>
           									<button style={{bottom: '10px'}}> LIÊN HỆ <i className="far fa-comment-alt" /> </button>
           								</div>
           								<div className="menu2-detail col-md-9">
           									<p>NỀN TẢNG WEB</p>
           									<p>QUẢN LÝ KHO</p>
           									<p>SẢN XUẤT</p>
           									<p>BÁN HÀNG</p>
           									<p>MUA HÀNG</p>
           									<p>KẾ TOÁN</p>
           									<p>BẢNG LƯƠNG</p>
           									<p>QUẢN LÝ NHÓM</p>
           								</div>
           							</div>
           						</div>		{/*Tính năng ERP*/}
           					</div>
           					<div className="menu1">
           						<a href="#"> VỀ ECOUNT ERP </a>
           						<div className="menu2 container-fluid">
           							<div className="row">
           								<div className="menu2-title col-md-3">
           									<h1> VỀ ECOUNT ERP </h1>
           									<button style={{bottom: '55px'}}> TÍNH NĂNG <i className="fas fa-globe" /></button>
           									<button style={{bottom: '10px'}}> LIÊN HỆ <i className="far fa-comment-alt" /> </button>
           								</div>
           								<div className="menu2-detail col-md-9">
           									<p>GIẢI PHÁP HỢP LÝ</p>
           									<p>VÌ SAO CHỌN ECOUNT?</p>
           									<p>LƯU Ý TRƯỚC KHI MUA PHẦN MÊM ERP</p>
           								</div>
           							</div>
           						</div>		{/*Về ECOUNT ERP*/}
           					</div>
           					<div className="menu1">		   {/*Dịch vụ*/}
           						<a href="#"> DỊCH VỤ </a>
           						<div className="menu2 container-fluid">
           							<div className="row">
           								<div className="menu2-title col-md-3">
           									<h1> DỊCH VỤ </h1>
           									<button style={{bottom: '55px'}}> TÍNH NĂNG <i className="fas fa-globe" /></button>
           									<button style={{bottom: '10px'}}> LIÊN HỆ <i className="far fa-comment-alt" /> </button>
           								</div>
           								<div className="menu2-detail col-md-9">
           									<p>HỖ TRỢ VÀ ĐÀO TẠO</p>
           									<p>CẬP NHẬT HỆ THỐNG</p>
           									<p>HỆ THỐNG BẢO MẬT</p>
           									<p>SAO LƯU & PHỤC HỒI DỮ LIỆU</p>
           									<p>DỊCH VỤ TƯ VẤN KHÁCH HÀNG</p>
           									<p>HƯỚNG DẪN SỬ DỤNG ONLINE</p>
           								</div>
           							</div>
           						</div>
           					</div>
           					<div className="menu1">			{/*Sản phẩm*/}
           						<a href="#"> SẢN PHẨM </a>
           						<div className="menu2 container-fluid">
           							<div className="row">
           								<div className="menu2-title col-md-3">
           									<h1> TÍNH NĂNG </h1>
           									<button style={{bottom: '55px'}}> PHIÊN BẢN MÔ PHỎNG <i className="fas fa-globe" /></button>
           									<button style={{bottom: '10px'}}> LIÊN HỆ <i className="far fa-comment-alt" /> </button>
           								</div>
           								<div className="menu2-detail col-md-9">
           									<p>BẢNG GIÁ</p>
           									<p>GẶP TRỰC TIẾP</p>
           									<p>PHIÊN BẢN MÔ PHỎNG</p>
           									<p>GIỚI THIỆU TRỰC TUYẾN</p>
           									<p>PHIÊN BẢN DÙNG THỬ</p>
           									<p>TẠI SAO CHÚNG TA CẦN ĐẾN ECOUNT?</p>
           									<p>ECOUNT CÓ THỂ GIÚP TÔI NHƯ THÉ NÀO</p>
           									<p>HỆ THỐNG VIDEO</p>
           									<p>HỘI THẢO GIỚI THIỆU</p>
           									<p>HỎI ĐÁP</p>
           								</div>
           							</div>
           						</div>
           					</div>
           					<div className="menu1">			{/*Giới thiệu*/}
           						<a href="#"> GIỚI THIỆU </a>
           						<div className="menu2 container-fluid">
           							<div className="row">
           								<div className="menu2-title col-md-3">
           									<h1> GIỚI THIỆU </h1>
           									<button style={{bottom: '55px'}}> PHIÊN BẢN MÔ PHỎNG <i className="fas fa-globe" /></button>
           									<button style={{bottom: '10px'}}> LIÊN HỆ <i className="far fa-comment-alt" /> </button>
           								</div>
           								<div className="menu2-detail col-md-9">
           									<p>GIỚI THIỆU</p>
           									<p>VỀ ĐỘI NGŨ CỦA CHÚNG TÔI</p>
           									<p>LIÊN HỆ</p>
           									<p>Ý KIẾN KHÁCH HÀNG</p>
           								</div>
           							</div>
           						</div>
           					</div>
           				</nav>
           			</div>
           		</div>
            </header>
        );
    }
}

export default Header;
