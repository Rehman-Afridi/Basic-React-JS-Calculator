import "./App.css";

import Header from "./Components/Header/Header";
import Display from "./Components/Display/Display";
import ButtonGrid from "./Components/ButtonGrid/ButtonGrid";

function App() {
  return(

    <div className="calculator-container">
      <div className="calculator">

        <Header/>
        
        <Display/>

        <ButtonGrid/>

        </div>
          </div>


  );
}

export default App;