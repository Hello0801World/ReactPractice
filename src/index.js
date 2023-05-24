import React from 'react';
import ReactDom from 'react-dom';

// always return JSX
// stateless functional component

// component 
function Greeting(){
    return <h1>This is Shun and this is my first component</h1>;
    
}

// pass the function to index.html by using root and react dom
// ReactDom.render(FUNCTION_NAME, where) pass the function name within the clsing tag <FUNCTION_NAME />
ReactDom.render(<Greeting/>, document.getElementById('root'));