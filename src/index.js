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
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
        </section>            
    );
}

const Book = () => {
    return (
        <article className='book'>
            <Image></Image>
            <Title />
            <Author />
            <Comment />
        </article>
    );
}

const Image = () => {
    return(
        <div>
            <img className='bookImg' src="https://images-na.ssl-images-amazon.com/images/I/91vwHMt+x7L._AC_UL900_SR900,600_.jpg" alt="" />
        </div>
    );
}
 
// const Person = () => {
//     return (
//         <h2>Shun Odaki</h2>
//     );
// }

const Comment = () => {
    return (
        <div>
            <h2>Enter comments</h2>
            <input type="text" />
        </div>
    );
}
const Author = () => {
    return (
        <h4>This is author of this book</h4>
    );
}

const Title = () => {
    return (
        <div>
            <h1>Killers of the Flower Moon: The Osage Murders and the Birth of the FBI</h1>
        </div>
    );
}



const Message = () => {
    return (
        <div>
            Enter something <input type = "text"/>
        </div>
    );
}

// const Greeting = () => {
//     return React.createElement('div', 
//     {}, 
//     React.createElement('h1', {}, 'hello world')) // 
// };

// pass the function to index.html by using root and react dom
// ReactDom.render(FUNCTION_NAME, where) pass the function name within the clsing tag <FUNCTION_NAME />
ReactDom.render(<BookList/>, document.getElementById('root'));