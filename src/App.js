// import React from 'react';
// import ReactDOM from 'react-dom';
// class ReactState extends ReactState.component{
//     constructor(){
//         super();
//             this.state={MyWebsite:"Welcome to my Website"}
//         }
//         render(){
//         return <h1>{this.state.MyWebsite}</h1>
//         }
// }
// ReactDOM.render(<ReactState/>,document.getElementById,("root"));

// export default ReactState;

import React from 'react';

function abc() {
    return (
        <div className='header'>
        <a href="" class="menu">   <div>Home</div></a> 
        <a href="" class="menu">   <div>Contact Us</div></a> 
        <a href="" class="menu">   <div>About us</div></a>
        <a href="" class="menu">   <div>Sign Up</div></a>
        <a href="" class="menu">   <div>Log in</div></a> 
        </div>
    );
}

export default abc;


