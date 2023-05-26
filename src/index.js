import React from 'react';
import ReactDom from 'react-dom';

//CSS 
import './index.css';
// stateless functional component

// component 
// always return JSX, return single element
function BookList(){
    return (
        <section className='booklist'>
            <Book />
        </section>            
    );
}

const Book = () => {
    return (
        <article className='book'>
            <img className='bookImg' src='https://images-na.ssl-images-amazon.com/images/I/91vwHMt+x7L._AC_UL900_SR900,600_.jpg' alt="" />
            <h1>Killers of the Flower Moon: The Osage Murders and the Birth of the FBI</h1>
            <h4 style={{color: '#617d98', fontSize: '0.75rem', 
            marginTop: '0.25' }}>
            This is author of this book
            </h4>
            <div>
                <h2>Comment</h2>
                <input type="text" />
            </div>
            
        </article>
    );
}

// pass the function to index.html by using root and react dom
// ReactDom.render(FUNCTION_NAME, where) pass the function name within the clsing tag <FUNCTION_NAME />
ReactDom.render(<BookList/>, document.getElementById('root'));