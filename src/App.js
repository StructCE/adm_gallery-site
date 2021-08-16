import { GlobalStyle } from "./styles/Global";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./routes";
import UserProvider from "./contexts/useUserContext";


function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <GlobalStyle />
        <Routes/>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
