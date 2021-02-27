import logo from './logo.svg';
import './App.css';

function App() {

  const products = [
    { name: "Photoshop", price: "$90.99" },
    { name: "Illustrator", price: "$60.99" },
    { name: "PDF Reader", price: "$6.99" }
  ];

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>I'm React Person</p>
        <Product product={products[0]}></Product>
        <Product product = {products[1]}></Product>
        <Product product = {products[2]}></Product>
        <Person name="Sakib Al Hasan" profession="Cricketer"></Person>
        <Person name="Jalanta Alil" profession="Actor"></Person>
        <Person name="Imagine Dragons" profession="Music Band"></Person>
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
  return (
    <div style={personStyle}>
      <h1>Name: {props.name}</h1>
      <h3>Profession: {props.profession}</h3>
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
 const {name, price}  = props.product;
  return (
    <div style={productStyle}>
      <h2>{name}</h2>
      <h5>{price}</h5>
      <button>Buy Now</button>
    </div>
  )
}

export default App;
