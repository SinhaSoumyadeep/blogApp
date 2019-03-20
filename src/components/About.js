import React, {Component} from 'react';


export class About extends Component{

    constructor(props){
        super(props);
        console.log("abourt const");

    }

    render(){
        return(
            <div >
                <header className="w3-container w3-center" style={{padding:"128px 16px 165px"}} id="home">
                    <h1 style={{fontFamily: "Montserrat"}} className="w3-jumbo"><b>Soma Mitra</b></h1>
                    <p style={{fontFamily: "Montserrat"}}>Photographer.</p>
                </header>
            </div>

        );
    }

}