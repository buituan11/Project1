import React, { Component } from 'react';
import './App.css';
import Header from '../Header/header.jsx';
import Main from '../Main/main.jsx';
import Footer from '../Footer/footer.jsx';
import Content from '../ContentPage/contentpage.jsx';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

class App extends Component {
    constructor(props) {
        super(props);
        this.state={
            arrTinhNang: ['1NỀN TẢNG WEB', 'QUẢN LÝ KHO', 'SẢN XUẤT', 'BÁN HÀNG', 'MUA HÀNG', 'KẾ TOÁN', 'BẢNG LƯƠNG', 'QUẢN LÝ NHÓM'],
            arrECOUNT: ['2GIẢI PHÁP HỢP LÝ', 'VÌ SAO CHỌN ECOUNT?', 'LƯU Ý TRƯỚC KHI MUA PHẦN MÊM ERP'],
            arrDichVu: ['3HỖ TRỢ VÀ ĐÀO TẠO', 'CẬP NHẬT HỆ THỐNG', 'HỆ THỐNG BẢO MẬT', 'SAO LƯU & PHỤC HỒI DỮ LIỆU', 'DỊCH VỤ TƯ VẤN KHÁCH HÀNG', 'HƯỚNG DẪN SỬ DỤNG ONLINE]'],
            arrSanPham: ['4BẢNG GIÁ', 'GẶP TRỰC TIẾP', 'PHIÊN BẢN MÔ PHỎNG', 'GIỚI THIỆU TRỰC TUYẾN', 'PHIÊN BẢN DÙNG THỬ', 'TẠI SAO CHÚNG TA CẦN ĐẾN ECOUNT?', 'ECOUNT CÓ THỂ GIÚP TÔI NHƯ THÉ NÀO', 'HỆ THỐNG VIDEO', 'HỘI THẢO GIỚI THIỆU', 'HỎI ĐÁP'],
            arrGioiThieu: ['5GIỚI THIỆU', 'VỀ ĐỘI NGŨ CỦA CHÚNG TÔI', 'LIÊN HỆ', 'Ý KIẾN KHÁCH HÀNG']
        }
    }

    RenderContent = ( menu ) => {
      console.log(menu)
      return (
          <Content sidebar={ menu }/>
      );
    }

    render() {
      let menu = [];
        return (
        <Router>
          <div className="App container-fluid">
            <Header 
              tinhNang={this.state.arrTinhNang}
              ecount={this.state.arrECOUNT}
              dichVu={this.state.arrDichVu}
              sanPham={this.state.arrSanPham}
              gioiThieu={this.state.arrGioiThieu}/>
            {/*<Main/>*/}
            {/*<Content/>*/}
            <Route exact path='/' component={ Main }/>
            <Route path='/tinh-nang' component={ ()=>this.RenderContent( this.state.arrTinhNang )}/>
            <Route path='/ecount-erp' component={ ()=>this.RenderContent( this.state.arrECOUNT )}/>
            <Route path='/dich-vu' component={ ()=>this.RenderContent( this.state.arrDichVu )}/>
            <Route path='/san-pham' component={ ()=>this.RenderContent( this.state.arrSanPham )}/>
            <Route path='/gioi-thieu' component={ ()=>this.RenderContent( this.state.arrGioiThieu )}/>
            <Footer/>
            {/*<div style={{backgroundColor: 'green', height: '400px'}}>
            </div>
            <div style={{backgroundColor: 'yellow', height: '400px'}}>
            </div>
            <div style={{backgroundColor: 'blue', height: '400px'}}>
            </div>*/}
          </div> 
          </Router>
        );
    }
}

export default App;

