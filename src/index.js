import React from 'react';
import ReactDom from 'react-dom';

//CSS 
import './index.css';
// stateless functional component

const books = [
    {
    img: 'https://images-na.ssl-images-amazon.com/images/I/91vwHMt+x7L._AC_UL900_SR900,600_.jpg',
    title: 'Skybox',
    author: 'Gunna'
    },
    {
        img: 'https://images-na.ssl-images-amazon.com/images/I/81a5KHEkwQL._AC_UL900_SR900,600_.jpg',
        title: 'Praise the lord',
        author: 'ASAP Rocky'
    },
];

 
// component 
// always return JSX, return single element
function BookList(){
    return (
        <section className='booklist'>
            {books.map((book) => {
                const {img, title, author} = book
                console.log(book)
                return 'Hello';
            })}
        </section>            
    );
}

// props (properties)
const Book = (props) => {
    console.log(props.title)
    // const title2 = props.job
    // variable
    
    const { img, title, author} = props  // destructure object

    return (
        <article className='book'>
            <img className='bookImg' src={img} alt="" />
            <h1>{title}</h1>
            <h4 style={{color: '#617d98', fontSize: '0.75rem', 
            marginTop: '0.25' }}>
            {author}
            </h4>
            {props.children}
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