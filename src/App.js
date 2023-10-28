import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/nav';

import Profile from './pages/main-profile';
import Main from './pages/main-page'

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>

      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/profile' element={<Profile/>} />



      </Routes>

    </div>

    </Router>
  );
}

export default App;