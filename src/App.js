import React from 'react';
import ReactDOM from 'react-dom';
class ReactState extends ReactState.component{
    constructor(){
        super();
            this.state={MyWebsite:"Welcome to my Website"}
        }
        render(){
        return <h1>{this.state.MyWebsite}</h1>
        }
}
ReactDOM.render(<ReactState/>,document.getElementById,("root"));

export default ReactState;

