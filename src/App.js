
import './App.css';
import DataBase from './DataContext/Object';
import RouterComponent from "../src/RouterComponent/RouterComponent"

function App() {
  return (
    <div className="App">
      <DataBase>
        <RouterComponent />
     </DataBase>
    </div>
  );
}

export default App;
