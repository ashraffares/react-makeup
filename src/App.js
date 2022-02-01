import {
  Routes, Route,
} from 'react-router-dom';

import Main from './layouts/Main';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (

    <Routes className="App">
      <Route path="/" element={<Main />} exact />
      <Route path="/home" element={<Home />} exact />
      <Route path="/about" element={<About />} exact />
    </Routes>

  );
}

export default App;
