import { GlobalStyle } from "./styles/Global";
import { BrowserRouter } from 'react-router-dom';
import { Routes } from './routes'
import UserProvider from "./contexts/useUserContext";
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <GlobalStyle />
        <Navbar />
        <Routes />
        <Footer />
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
