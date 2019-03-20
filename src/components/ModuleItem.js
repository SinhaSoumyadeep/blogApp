import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import Checkout from "./Checkout";

export class ModuleItem extends Component{

    constructor(props){
        super(props)
        this.selected = this.selected.bind(this);
        this.unHighlight = this.unHighlight.bind(this);
        this.state={css:{width: "18rem", marginBottom:"25px"}}
        this.addToCart = this.addToCart.bind(this);

    }

    selected(){
        console.log("hovering")
        this.setState({css:{width: "18rem", marginBottom:"25px", boxShadow: "0px 0px 10px 0px black"}})

    }
    unHighlight(){
        this.setState({css:{width: "18rem", marginBottom:"25px"}})

    }

    addToCart(){
        //console.log("addingtocart: "+);
        this.props.add(this.props.imgid);
    }

    render(){





        return(
            <div>


                <div className="card" style={this.state.css} onMouseOver={this.selected} onMouseOut={this.unHighlight}>
                    <Link to={`/picture/${this.props.imgid}`} >
                    <img src={this.props.value} className="card-img-top" alt="..." style={{width: "268px", height: "197px"}}/>
                    </Link>
                        <div className="card-body">
                            <div style={{float: "left"}}>
                            <h5 className="card-title">Card title</h5>
                            </div>
                            <div style={{float: "right"}}>
                                <span className="badge badge-pill badge-success">Price ${this.props.price}</span>
                            </div>

                            <div style={{float: "left"}}>

                            <p className="card-text">Some quick example text to build on the card title and make up the
                                bulk of the card's content.{this.props.imgid}</p>
                                <button type="button" className="btn btn-success" onClick={this.addToCart}>Add</button>
                                <Checkout amount={this.props.price*100}/>


                            </div>

                        </div>
                </div>


            </div>
        );
    }

}