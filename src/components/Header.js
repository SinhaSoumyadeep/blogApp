import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import '../css/main.css'

class Header extends Component {



    constructor(props){
        super(props);
        this.search = this.search.bind(this);
        this.state = {isloggedIn: false}



    }

    titleChanged(event) {
        console.log(event.target.value);
    }

    search(event){
        this.props.searchStr(event.target.value);
    }


    renderWebRoom(){
        let webroom;

        if(this.state.isloggedIn){
            webroom = <Link to={"/webroom/"}>Web Room</Link>
        }

        return webroom;
    }



    render() {

        return (

            <div>
                <div className="navbary">
                    <a href="#home">Home</a>
                    <a href="#news">About</a>
                    <a href="#contact">Contact</a>
                    {this.renderWebRoom()}

                    <div style={{float: "left", paddingLeft:"47%", paddingTop:"8px"}}>
                    <form className="form-inline">
                        <input className="form-control" type="text" placeholder="Search" aria-label="Search" onChange={this.search}/>
                    </form>

                    </div>
                    <div style={{float: "right"}}>
                        <i className="fas fa-shopping-cart"></i>
                        <button type="button" className="btn btn-primary">
                            Cart <span className="badge badge-light">{this.props.cart.length}</span>
                            <span className="sr-only">unread messages</span>
                        </button>

                    </div>





                </div>


            </div>
        )
    }
}
export default Header;