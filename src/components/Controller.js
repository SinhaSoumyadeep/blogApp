import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Landing from "./Landing";
import {PreviewPicture} from "./PreviewPicture";
import {Checkout} from "./Checkout";
import {WebRoom} from "./WebRoom";
export class Controller extends Component{


    render(){
        return(
            <Router>
                <div>
                    <Route path="/land" component={Landing}>
                    </Route>
                    <Route path="/picture/:id"
                           component={PreviewPicture}>
                    </Route>
                    <Route path="/webroom" component ={WebRoom}/>
                </div>
            </Router>

        );
    }

}