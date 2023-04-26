import { BrowserRouter,Routes,Route } from "react-router-dom";
//show
//create
//edit
import './App.css';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
 <Routes>
< Route path="/" element ="Show"/>
< Route path="/create" element ="Create"/>
< Route path="/edit/:id" element ="Edit"/>
 </Routes>
     
     </BrowserRouter>

    </div>
  );
}

export default App;
