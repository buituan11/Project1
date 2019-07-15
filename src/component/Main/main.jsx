import React, { Component } from 'react';
import './main.css';

class Main extends Component {
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
            <div className="main container-fluid">
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
            	<div className="comment">
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
					<div className="more-comment container-fluid">
						<p>Hãy cũng xem những câu chuyện từ khách hàng khác</p>
						<button>Xem ngay tại đây   <i className="fas fa-plus"/></button>
					</div>
            	</div>
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
				<div className="merit container-fluid">
                    <p>ECOUNT ERP mang đến dịch vụ tốt nhất</p>
                    <ul>
                        <li className="container-fluid">
                            <div className="row">
                                <div className="img-merit col-md-4">
                                    <img src="Img/icon/merit-1.png" alt=""/>
                                </div>
                                <a className="col-md-8" href="#">
                                    Không cần cài đặt ban đầu<br/>
                                    Dùng trên trình duyệt web<br/><br/>
                                    <u><b>Sử dụng ngay ở bất cứ nơi đâu</b></u>
                                </a>
                            </div>
                        </li>
                        <li className="container-fluid">
                            <div className="row">
                                <div className="img-merit col-md-4">
                                    <img src="Img/icon/merit-2.png" alt=""/>
                                </div>
                                <a className="col-md-8" href="#">
                                    Không cần cài đặt ban đầu<br/>
                                    Dùng trên trình duyệt web<br/><br/>
                                    <u><b>Sử dụng ngay ở bất cứ nơi đâu</b></u>
                                </a>
                            </div>
                        </li>
                        <li className="container-fluid">
                            <div className="row">
                                <div className="img-merit col-md-4">
                                    <img src="Img/icon/merit-3.png" alt=""/>
                                </div>
                                <a className="col-md-8" href="#">
                                    Không cần cài đặt ban đầu<br/>
                                    Dùng trên trình duyệt web<br/><br/>
                                    <u><b>Sử dụng ngay ở bất cứ nơi đâu</b></u>
                                </a>
                            </div>
                        </li>
                        <li className="container-fluid">
                            <div className="row">
                                <div className="img-merit col-md-4">
                                    <img src="Img/icon/merit-4.png" alt=""/>
                                </div>
                                <a className="col-md-8" href="#">
                                    Không cần cài đặt ban đầu<br/>
                                    Dùng trên trình duyệt web<br/><br/>
                                    <u><b>Sử dụng ngay ở bất cứ nơi đâu</b></u>
                                </a>
                            </div>
                        </li>
                        <li className="container-fluid">
                            <div className="row">
                                <div className="img-merit col-md-4">
                                    <img src="Img/icon/merit-5.png" alt=""/>
                                </div>
                                <a className="col-md-8" href="#">
                                    Không cần cài đặt ban đầu<br/>
                                    Dùng trên trình duyệt web<br/><br/>
                                    <u><b>Sử dụng ngay ở bất cứ nơi đâu</b></u>
                                </a>
                            </div>
                        </li>
                        <li className="container-fluid">
                            <div className="row">
                                <div className="img-merit col-md-4">
                                    <img src="Img/icon/merit-6.png" alt=""/>
                                </div>
                                <a className="col-md-8" href="#">
                                    Không cần cài đặt ban đầu<br/>
                                    Dùng trên trình duyệt web<br/><br/>
                                    <u><b>Sử dụng ngay ở bất cứ nơi đâu</b></u>
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="trial">
                    <p>Chỉ 1.000.000 đồng mỗi tháng với đầy đủ tính năng <br/>
                    Miễn phí 7 ngày dùng thử ngay hôm nay</p>
                    <button>
                            Yêu cầu dùng thử <i className="fas fa-plus" />
                    </button>
                </div>
            </div>
        );
    }
}

export default Main;
