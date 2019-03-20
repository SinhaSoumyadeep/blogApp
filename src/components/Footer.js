import React, {Component} from 'react';
import "../css/footerWhite.css"
export class Footer extends Component{
    render(){
        return(
            <div>
                <div className="content">
                </div>
                <footer id="myFooter">
                    <div className="container footer">
                        <p className="footer-copyright">© 2019 Copyright Text</p>
                    </div>
                    <div className="footer-social">
                        <a href="#" className="social-icons"><i className="fa fa-facebook"></i></a>
                        <a href="#" className="social-icons"><i className="fa fa-google-plus"></i></a>
                        <a href="#" className="social-icons"><i className="fa fa-twitter"></i></a>
                    </div>
                </footer>
                <div className="hideNub">

                </div>
            </div>
        );
    }
}