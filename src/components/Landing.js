import React, {Component} from 'react';
import Header from "./Header";
import '../css/main.css'
import {ModuleItem} from "./ModuleItem";
import {About} from "./About";
import {Footer} from "./Footer";
class Landing extends Component {

    constructor(){
        super();
        this.titleChanged = this.titleChanged.bind(this);
        this.search = this.search.bind(this);
        this.addToCart = this.addToCart.bind(this);


        this.state = {images:[
                {id:"1", url: "https://www.w3schools.com/w3images/wedding.jpg", price: "10"},
                {id:"2", url: "https://www.w3schools.com/w3images/underwater.jpg", price: "20"},
                {id:"3", url: "https://www.w3schools.com/w3images/rocks.jpg", price: "30"},
                {id:"4", url: "https://www.w3schools.com/w3images/chef.jpg", price: "20"},
                {id:"5", url: "https://www.w3schools.com/w3images/sailboat.jpg", price: "5"},
                {id:"6", url: "https://www.w3schools.com/w3images/p6.jpg", price: "15"}
                ], cart:[]};
    }


    titleChanged(event){



        this.setState({search:  event.target.value })
    }

    search(dataFromchild){

        if(dataFromchild == ""){

            this.setState({images:[
                        {id:"1", url: "https://www.w3schools.com/w3images/wedding.jpg", price: "10"},
                        {id:"2", url: "https://www.w3schools.com/w3images/underwater.jpg", price: "20"},
                        {id:"3", url: "https://www.w3schools.com/w3images/rocks.jpg", price: "30"},
                        {id:"4", url: "https://www.w3schools.com/w3images/chef.jpg", price: "20"},
                        {id:"5", url: "https://www.w3schools.com/w3images/sailboat.jpg", price: "5"},
                        {id:"6", url: "https://www.w3schools.com/w3images/p6.jpg", price: "15"}
                    ]});

        }else{

            //console.log(dataFromchild);
            this.setState({searchStr: dataFromchild})

            let filtered = this.state.images.filter((item)=>{
                return (item.id == dataFromchild);
            })

            this.setState({images: filtered});

        }




    }


    iterateModules(){
        return this.state.images.map((item)=>{

            return <ModuleItem imgid={item.id} value={item.url} price={item.price} add={this.addToCart}/>

        });

    }

    addToCart(item){
        var cartTemp = this.state.cart;
        cartTemp.push({id: item});
        this.setState({cart: cartTemp});


    }


    render() {

        return (
            <div className={"body1"}>


                <Header searchStr = {this.search} cart={this.state.cart}/>
                <About/>

                <div class="card-deck">
                    {this.iterateModules()}
                </div>
                <Footer/>



            </div>

        )
    }
}
export default Landing;