import React, { Component } from 'react';
import './header.css';
import Menu2 from './Menu2/menu2.jsx';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

class Header extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
           <header className="container-fluid">
           		<div className="row">
           			<div className="icon col-md-3">
           				<NavLink to="/"> <img src="Img/icon.png" alt="icon"/></NavLink>
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
           						<NavLink to="/tinh-nang"> TÍNH NĂNG ERP </NavLink>
           						<Menu2 
           							title={ "TÍNH NĂNG" }
           							button1={ "PHIÊN BẢN MÔ PHỎNG" }
           							detail={this.props.tinhNang}/>		
           					</div>
           					<div className="menu1">			{/*Về ECOUNT ERP*/}
           						<NavLink to="/ecount-erp"> VỀ ECOUNT ERP </NavLink>
           						<Menu2
           							title={'VỀ ECOUNT ERP'}
           							button1={'TÍNH NĂNG'}
           							detail={ this.props.ecount }/>	
           					</div>
           					<div className="menu1">		   {/*Dịch vụ*/}
           						<NavLink to="/dich-vu"> DỊCH VỤ </NavLink>
           						<Menu2
           							title={'DỊCH VỤ'}
           							button1={'TÍNH NĂNG'}
           							detail={ this.props.dichVu }/>
           					</div>
           					<div className="menu1">			{/*Sản phẩm*/}
           						<NavLink to="/san-pham"> SẢN PHẨM </NavLink>
           						<Menu2 
           							title={ 'SẢN PHẨM '}
           							button1={'TÍNH NĂNG'}
           							detail={ this.props.sanPham }/>
           					</div>
           					<div className="menu1">			{/*Giới thiệu*/}
           						<NavLink to="/gioi-thieu"> GIỚI THIỆU </NavLink>
           						<Menu2 
           							title={ 'GIỚI THIỆU '}
           							button1={'TÍNH NĂNG'}
           							detail={ this.props.gioiThieu }/>
           					</div>
           				</nav>
           			</div>
           		</div>
            </header>
        );
    }
}

export default Header;
