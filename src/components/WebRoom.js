import React, {Component} from 'react';
import {WebCam} from "./WebCam";
import Header from "./Header";
import {Footer} from "./Footer";
import {Redirect} from "react-router-dom";



export class WebRoom extends Component{

    constructor(props){
        super(props);
        console.log("abourt const");
        this.state = {cart: [], isloggedIn: true}

    }

    search(){

    }

    render(){

        if(this.state.isloggedIn) {
            return (

                <div className={"body1"}>


                    <Header searchStr={this.search} cart={this.state.cart}/>
                    <WebCam/>
                    <Footer/>


                </div>


            );
        }
        else{
            return(
                <div>
                    <Redirect to='/land' />
                </div>
            )
        }
    }

}