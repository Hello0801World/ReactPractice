import React from 'react';
import ReactDom from 'react-dom';

//CSS 
import './index.css';
// stateless functional component


const firstBook = {
    img: 'https://images-na.ssl-images-amazon.com/images/I/91vwHMt+x7L._AC_UL900_SR900,600_.jpg',
    title: 'Skybox',
    author: 'Gunna'
}

const secondBook = {
    img: 'https://images-na.ssl-images-amazon.com/images/I/81a5KHEkwQL._AC_UL900_SR900,600_.jpg',
    title: 'Praise the lord',
    author: 'ASAP Rocky'
}
// component 
// always return JSX, return single element
function BookList(){
    return (
        <section className='booklist'>
            <Book img={firstBook.img} title={firstBook.title} author={firstBook.author} /> { /* pass the object name and value */ }
            <Book img={secondBook.img} title={secondBook.title} author={secondBook.author} />
        </section>            
    );
}

// porps (properties)
const Book = (props) => {
    console.log(props.title)
    // const title2 = props.job
    // variable
    

    return (
        <article className='book'>
            <img className='bookImg' src={props.img} alt="" />
            <h1>{props.title}</h1>
            <h4 style={{color: '#617d98', fontSize: '0.75rem', 
            marginTop: '0.25' }}>
            {props.author}
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