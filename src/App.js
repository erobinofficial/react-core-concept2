import { useState } from 'react';
import './App.css';

function App() {
  // const products = [
  //   {name: 'Apple', price: 100},
  //   {name: 'Samsung', price: 200},
  //   {name: 'Google', price: 300},
  //   {name: 'Microsoft', price: 400},
  //   {name: 'Motorolla', price: 500},
  //   {name: 'RR', price: 600},
  // ]
  return (
    <div className="App">
      <Counter></Counter>
      {/* {
        products.map(product => <Product name={product.name} price={product.price}></Product>)
      } */}


    </div>
  );
}

const Counter = () => {
  const [count, setCount] = useState(0);
  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  )
}


// const Product = props => {
//   return (
//     <div className="main-div">
//       <h1>Name: {props.name}</h1>
//       <p>Price: {props.price}</p>
//     </div>
//   );
// }
export default App;
