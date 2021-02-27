import logo from './logo.svg';
import './App.css';

function App() {

  const Person1 = {
    name: 'Mahfuz',
    job: 'Thelagari'
  };
  const personStyle = {
    color: "red",
    backgroundColor: 'salmon'
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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

export default App;
