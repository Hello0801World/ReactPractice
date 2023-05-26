import React from 'react';
import ReactDom from 'react-dom';

//CSS 
import './index.css';
// stateless functional component

const books = [
    {
        id: 1,
        img: 'https://images-na.ssl-images-amazon.com/images/I/91vwHMt+x7L._AC_UL900_SR900,600_.jpg',
        title: 'Skybox',
        author: 'Gunna'
    },
    {
        id: 2,
        img: 'https://images-na.ssl-images-amazon.com/images/I/81a5KHEkwQL._AC_UL900_SR900,600_.jpg',
        title: 'Praise the lord',
        author: 'ASAP Rocky'
    },
    {
        id: 3,
        img: 'https://images-na.ssl-images-amazon.com/images/I/71Pyj+9IPdL._AC_UL900_SR900,600_.jpg',
        title: 'Plain Jane',
        author: 'ASAP Ferg'
    },
];

 
// component 
// always return JSX, return single element
function BookList(){
    return (
        <section className='booklist'>
            {books.map((book) => {
                return (
                    <Book key={book.id} {...book}></Book>
                )
            })}
        </section>            
    );
}

// props (properties)
const Book = (props) => {
    // attribute, eventHandler
    

    const { img, title, author} = props

    const clickHandler = () => {
        alert('hello world');
    };

    const complexExample = (author) =>{
        console.log(author);
    };

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
            <button type='button' onClick={clickHandler}>Reference</button>
            <button type='button' onClick={() => complexExample(author)}>More complex example</button>
            {/* Function gets called only when it is clicked by setting arrow function  */}
            
        </article>
    );
}

// pass the function to index.html by using root and react dom
// ReactDom.render(FUNCTION_NAME, where) pass the function name within the clsing tag <FUNCTION_NAME />
ReactDom.render(<BookList/>, document.getElementById('root'));