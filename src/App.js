import { GlobalStyle } from "./styles/Global";
import { BrowserRouter } from 'react-router-dom';
import { Routes } from './routes'


function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
