import Navbar from './components/Navbar';
import List from './components/List';
import Panel from './components/Panel';
import './App.css'
import Button from './components/Button';

function App() {

  return (
    <div className="App">
      <Navbar />

      <Panel>
        <h1>Hola</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque dignissimos impedit odit officia molestias aperiam ducimus error modi omnis sit eaque, dolores aspernatur id amet laudantium necessitatibus, nihil enim temporibus?</p>
      </Panel>
      <Panel>
        <h2>Adios</h2>
      </Panel>

      <div className="container mt-4">
        <h1>Cities</h1>

        <List />
      </div>
    </div>
  )
}

export default App
