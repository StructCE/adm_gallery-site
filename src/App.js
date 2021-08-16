import { GlobalStyle } from "./styles/Global";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./routes";


function App() {
  return (
    <div className="App">
      <>
        <GlobalStyle />
        <BrowserRouter>
          <Routes/>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
