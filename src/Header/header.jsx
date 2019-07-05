import React, { Component } from 'react';
import './header.css';
import Menu2 from './Menu2/menu2.jsx';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state ={
           	arrTinhNang: ['NỀN TẢNG WEB', 'QUẢN LÝ KHO', 'SẢN XUẤT', 'BÁN HÀNG', 'MUA HÀNG', 'KẾ TOÁN', 'BẢNG LƯƠNG', 'QUẢN LÝ NHÓM'],
          	arrECOUNT: ['GIẢI PHÁP HỢP LÝ', 'VÌ SAO CHỌN ECOUNT?', 'LƯU Ý TRƯỚC KHI MUA PHẦN MÊM ERP'],
          	arrDichVu: ['HỖ TRỢ VÀ ĐÀO TẠO', 'CẬP NHẬT HỆ THỐNG', 'HỆ THỐNG BẢO MẬT', 'SAO LƯU & PHỤC HỒI DỮ LIỆU', 'DỊCH VỤ TƯ VẤN KHÁCH HÀNG', 'HƯỚNG DẪN SỬ DỤNG ONLINE]'],
          	arrSanPham: ['BẢNG GIÁ', 'GẶP TRỰC TIẾP', 'PHIÊN BẢN MÔ PHỎNG', 'GIỚI THIỆU TRỰC TUYẾN', 'PHIÊN BẢN DÙNG THỬ', 'TẠI SAO CHÚNG TA CẦN ĐẾN ECOUNT?', 'ECOUNT CÓ THỂ GIÚP TÔI NHƯ THÉ NÀO', 'HỆ THỐNG VIDEO', 'HỘI THẢO GIỚI THIỆU', 'HỎI ĐÁP'],
          	arrGioiThieu: ['GIỚI THIỆU', 'VỀ ĐỘI NGŨ CỦA CHÚNG TÔI', 'LIÊN HỆ', 'Ý KIẾN KHÁCH HÀNG']
        }
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
           					<div className="menu1">			{/* Tính năng ERP*/}
           						<a href="#"> TÍNH NĂNG ERP </a>
           						<Menu2 
           							title={ "TÍNH NĂNG" }
           							button1={ "PHIÊN BẢN MÔ PHỎNG" }
           							detail={this.state.arrTinhNang}/>		
           					</div>
           					<div className="menu1">			{/*Về ECOUNT ERP*/}
           						<a href="#"> VỀ ECOUNT ERP </a>
           						<Menu2
           							title={'VỀ ECOUNT ERP'}
           							button1={'TÍNH NĂNG'}
           							detail={ this.state.arrECOUNT }/>	
           					</div>
           					<div className="menu1">		   {/*Dịch vụ*/}
           						<a href="#"> DỊCH VỤ </a>
           						<Menu2
           							title={'DỊCH VỤ'}
           							button1={'TÍNH NĂNG'}
           							detail={ this.state.arrDichVu }/>
           					</div>
           					<div className="menu1">			{/*Sản phẩm*/}
           						<a href="#"> SẢN PHẨM </a>
           						<Menu2 
           							title={ 'SẢN PHẨM '}
           							button1={'TÍNH NĂNG'}
           							detail={ this.state.arrSanPham }/>
           					</div>
           					<div className="menu1">			{/*Giới thiệu*/}
           						<a href="#"> GIỚI THIỆU </a>
           						<Menu2 
           							title={ 'GIỚI THIỆU '}
           							button1={'TÍNH NĂNG'}
           							detail={ this.state.arrGioiThieu }/>
           					</div>
           				</nav>
           			</div>
           		</div>
            </header>
        );
    }
}

export default Header;
