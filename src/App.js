import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const nayoks = ["Razzak", 'Salman', 'Jasim', 'Manna'];

  const products = [
    { name: "Photoshop", price: "$90.99" },
    { name: "Illustrator", price: "$60.99" },
    { name: "PDF Reader", price: "$6.99" }
  ];

  const persons = [
    { name: "Sakib Al Hasan", profession: "Cricketer" },
    { name: 'Jalanta Alil', profession: 'Actor' },
    { name: 'Imagin Dragons', profession: 'Music Band' }
  ]

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>I'm React Person</p>
        <Count></Count>
        <Users></Users>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
        </ul>

        {
          products.map(product => <Product product={product}></Product>)
        }

        {
          persons.map(person => <Person person={person}></Person>)
        }

        {/* <Product product={products[0]}></Product>
        <Product product = {products[1]}></Product>
        <Product product = {products[2]}></Product> */}
        {/* <Person name="Sakib Al Hasan" profession="Cricketer"></Person>
        <Person name="Jalanta Alil" profession="Actor"></Person>
        <Person name="Imagine Dragons" profession="Music Band"></Person> */}
      </header>
    </div>
  );
}

function Person(props) {
  const personStyle = {
    border: "2px solid black",
    margin: "10px",
    padding: "15px",
    width: "50%",
    backgroundColor: "#6495ed",
    color: "black"
  }
  const { name, profession } = props.person;
  return (
    <div style={personStyle}>
      <h1>Name: {name}</h1>
      <h3>Profession: {profession}</h3>
    </div>
  )
}


function Product(props) {

  const productStyle = {
    border: "1px solid gray",
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    float: 'left'
  }
  const { name, price } = props.product;
  return (
    <div style={productStyle}>
      <h2>{name}</h2>
      <h5>{price}</h5>
      <button>Buy Now</button>
    </div>
  )
}

function Count(props) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}

function Users() {
  const [users, setUsers]  = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])
  return (
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}


export default App;
