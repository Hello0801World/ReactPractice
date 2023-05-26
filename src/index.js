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
            <Book 
            img={firstBook.img} 
            title={firstBook.title} 
            author={firstBook.author} 
            > 
                <p>
                    Lorem Ipsum is simply dummy text of the printing 
                    and typesetting industry. Lorem Ipsum has been 
                    the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled 
                    it to make a type specimen book. It has survived not only 
                    five centuries, but also the leap into electronic typesetting, 
                    remaining essentially unchanged. It was popularised in the 1960s 
                    with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <select name="cars" id="cars">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                </select>
            </Book> { /* pass the object name and value */ }

            <Book img={secondBook.img} 
            title={secondBook.title} 
            author={secondBook.author} />
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