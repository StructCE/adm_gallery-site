import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import { GlobalStyle } from "./styles/Global";


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
