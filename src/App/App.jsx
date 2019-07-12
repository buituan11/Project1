import React, { Component } from 'react';
import './App.css';
import Header from '../Header/header.jsx';
import Main from '../Main/main.jsx';
import Footer from '../Footer/footer.jsx';
import Content from '../ContentPage/contentpage.jsx';
import { BrowserRouter as Router, Route, NavLink,Switch } from "react-router-dom";

class App extends Component {
    constructor(props) {
        super(props);
        this.state={
            arrTN: {
              title: "TÍNH NĂNG",
                routes:[
                  {
                    title: "NỀN TẢNG WEB",
                    path: "/tinh-nang/nen-tang-web",
                    subroute: [
                      {
                        title: "Tính năng 1",
                        path: "/tinh-nang/nen-tang-web/1"
                      },
                      {
                        title: "Tính năng 2",
                        path: "/tinh-nang/nen-tang-web/2"
                      }
                    ]   //Nền tảng web
                  },
                  {
                    title: "QUẢN LÝ KHO",
                    path: "/tinh-nang/quan-ly-kho",
                    subroute: [
                      {
                        title: "Quản lý 1",
                        path: "/tinh-nang/quan-ly-kho/1"
                      },
                      {
                        title: "Quản lý 2",
                        path: "/tinh-nang/quan-ly-kho/2"
                      }
                    ]   //Quản lý kho
                  }
                ]
            },
            arrEC: {
              title: "VỀ ECOUNT ERP",
                routes:[
                  {
                    title: "GIẢI PHÁP HỢP LÝ",
                    path: "/ve-ecount-erp/giai-phap",
                    subroute: [
                      {
                        title: "Giải pháp 1",
                        path: "/ve-ecount-erp/giai-phap/1"
                      },
                      {
                        title: "Giải pháp 2",
                        path: "/ve-ecount-erp/giai-phap/2"
                      }
                    ]   
                  },
                  {
                    title: "VÌ SAO CHỌN ECOUNT",
                    path: "/ve-ecount-erp/vi-sao-chon-ecount",
                    subroute: [
                      {
                        title: "Vì sao 1",
                        path: "/ve-ecount-erp/vi-sao-chon-ecount/1"
                      },
                      {
                        title: "Vì sao 2",
                        path: "/ve-ecount-erp/vi-sao-chon-ecount2"
                      }
                    ]   
                  }
                ]
            },
            arrDV: {
              title: "DỊCH VỤ",
                routes:[
                  {
                    title: "HỖ TRỢ ĐÀO TẠO",
                    path: "/dich-vu/ho-tro",
                    subroute: [
                      {
                        title: "Hỗ trợ 1",
                        path: "/dich-vu/ho-tro/1"
                      },
                      {
                        title: "Hỗ trợ 2",
                        path: "/dich-vu/ho-tro/2"
                      }
                    ]  
                  },
                  {
                    title: "CẬP NHẬT HỆ THỐNG",
                    path: "/dich-vu/cap-nhat",
                    subroute: [
                      {
                        title: "Cập nhật 1",
                        path: "/dich-vu/cap-nhat/1"
                      },
                      {
                        title: "Cập nhật 2",
                        path: "/dich-vu/cap-nhat/2"
                      }
                    ]  
                  }
                ]
            },
            arrSP: {
              title: "SẢN PHẨM",
                routes:[
                  {
                    title: "BẢNG GIÁ",
                    path: "/san-pham/bang-gia",
                    subroute: [
                      {
                        title: "BẢNG GIÁ 1",
                        path: "/san-pham/bang-gia/1"
                      },
                      {
                        title: "BẢNG GIÁ 2",
                        path: "/san-pham/bang-gia/2"
                      }
                    ]  
                  },
                  {
                    title: "GẶP TRỰC TIẾP",
                    path: "/dich-vu/gap-truc-tiep",
                    subroute: [
                      {
                        title: "Gặp trực tiếp 1",
                        path: "/dich-vu/gap-truc-tiep/1"
                      },
                      {
                        title: "Gặp trực tiếp 2",
                        path: "/dich-vu/gap-truc-tiep/2"
                      }
                    ]  
                  }
                ]
            },
            arrGT: {
              title: "GIỚI THIỆU",
                routes:[
                  {
                    title: "Giới THIỆU",
                    path: "/gioi-thieu/gioi-thieu-chung",
                    subroute: [
                      {
                        title: "Giới thiệu 1",
                        path: "/gioi-thieu/gioi-thieu-chung/1"
                      },
                      {
                        title: "Giới thiệu 2",
                        path: "/gioi-thieu/gioi-thieu-chung/2"
                      }
                    ]  
                  },
                  {
                    title: "VỀ ĐỘI NGŨ CHÚNG TÔI",
                    path: "/gioi-thieu/about-us",
                    subroute: [
                      {
                        title: "VỀ CHÚNG TÔI 1",
                        path: "/gioi-thieu/about-us/1"
                      },
                      {
                        title: "VỀ CHÚNG TÔI 2",
                        path: "/gioi-thieu/about-us/2"
                      }
                    ]  
                  }
                ]
            },
            arrGioiThieu: ['5GIỚI THIỆU', 'VỀ ĐỘI NGŨ CỦA CHÚNG TÔI', 'LIÊN HỆ', 'Ý KIẾN KHÁCH HÀNG']
        }
    }

    RenderContent = ( menu ) => {
      // console.log(menu)
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
              tinhNang={this.state.arrTN}
              ecount={this.state.arrEC}
              dichVu={this.state.arrDV}
              sanPham={this.state.arrSP}
              gioiThieu={this.state.arrGT}/>
            {/*<Main/>*/}
            {/*<Content/>*/}
            <Switch>
              <Route exact path='/' component={ Main }/>
              {this.state.arrTN.routes.map((item, index)=>
                  <Route key={index} path={ item.path } component={ ()=>this.RenderContent( this.state.arrTN)}/>
              )}
              {this.state.arrEC.routes.map((item, index)=>
                  <Route key={index} path={ item.path } component={ ()=>this.RenderContent( this.state.arrEC)}/>
              )}
              {this.state.arrDV.routes.map((item, index)=>
                  <Route key={index} path={ item.path } component={ ()=>this.RenderContent( this.state.arrDV)}/>
              )}
              {this.state.arrSP.routes.map((item, index)=>
                  <Route key={index} path={ item.path } component={ ()=>this.RenderContent( this.state.arrSP)}/>
              )}
              {this.state.arrGT.routes.map((item, index)=>
                  <Route key={index} path={ item.path } component={ ()=>this.RenderContent( this.state.arrGT)}/>
              )}
            </Switch>
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

