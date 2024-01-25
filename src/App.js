import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/header/Header';
import Features from './pages/Features/Features';
import Home from './pages/home/Home';
import Services from './pages/services/Services';

function App() {
  return (
    <>
      <Header />
      <Home />
      <Services />
      <Features />
      <Footer />
    </>
  );
}

export default App;
