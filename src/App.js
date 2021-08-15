import { GlobalStyle } from "./styles/Global";
import { BrowserRouter } from 'react-router-dom';
import { Routes } from './routes'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navbar />
      <Routes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
