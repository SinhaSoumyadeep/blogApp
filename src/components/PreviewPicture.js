import React, {Component} from 'react';

export class PreviewPicture extends Component{

    constructor(props){
        super(props);
        //console.log("preview const");
        this.updateState = this.updateState.bind(this);
        this.state = {};

    }

    componentDidMount() {

        this.updateState(this.props.match.params.id);
    }
    componentWillReceiveProps(newProps){
        this.updateState(newProps.match.params.id);
    }

    updateState(props){
        this.setState({id: props});
    }




    render(){
        return(
            <div >
                <h1>hello there!{this.state.id}</h1>
            </div>

        );
    }

}