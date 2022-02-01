import {
  Routes, Route,
} from 'react-router-dom';

import Search from './pages/Search';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Routes className="App">
        <Route path="/" element={<Home />} exact />
        <Route path="/search" element={<Search />} exact />
        <Route path="/about" element={<About />} exact />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
