import logo from './logo.svg';
import './App.css';

function App() {

const Person1 = {
  name: 'Mahfuz',
  job: 'Thelagari'
};
const personStyle = {
  color: "red",
  backgroundColor:'salmon'
};
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p className = "" style = {personStyle}>My first paragraph</p>
        <p className = "" style = {personStyle}>Name: {Person1.name}</p>
        <p className = "" style = {personStyle}>Job: {Person1.job}</p>
      </header>
    </div>
  );
}

export default App;
