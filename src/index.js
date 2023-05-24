import React from 'react';
import ReactDom from 'react-dom';


// stateless functional component

// component 
// always return JSX, return single element
function BookList(){
    return (
        <section>
            <Book />
        </section>            
    );
}

const Book = () => {
    return (
        <article>
            <Image />
            <Title />
            <Author />
        </article>
    );
}

const Image = () => <img src="https://images-na.ssl-images-amazon.com/images/I/81TxbGFGTVL._AC_UL900_SR900,600_.jpg" alt="" />
 
const Person = () => {
    return (
        <h2>Shun Odaki</h2>
    );
}

const Title = () => {
    return (
        <h1>Killers of the Flower Moon: The Osage Murders and the Birth of the FBI</h1>
    );
}

const Author = () => {
    return (
        <p className="text-sky-400">Author</p>
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