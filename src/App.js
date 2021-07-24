import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import { GlobalStyle } from "./styles/Global";


function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <SignUpPage />
    </div>
  );
}

export default App;
