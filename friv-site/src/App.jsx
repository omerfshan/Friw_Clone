// App.jsx
import { Routes, Route } from 'react-router-dom';
import Header from './Companents/Header';
import Home from './Pages/Home';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Header />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
     
        </Routes>
      </div>
    </>
  );
}

export default App;
