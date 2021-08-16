import { BrowserRouter } from "react-router-dom";
import UserProvider from "./contexts/useUserContext";
import Routes from "./Routes";
import { GlobalStyle } from "./styles/Global";


function App() {
  return (
    <div className="App">
      <>
        <BrowserRouter>
          <UserProvider>
            <GlobalStyle />
            <Routes/>
          </UserProvider>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
