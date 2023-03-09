import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './components/HomeScreen';
import Footer from './components/Footer';
import Login from './components/Login';
import Ticket from './components/Ticket';
import AllTickets from './components/AllTickets';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ticket" element={<Ticket />} />
        <Route path="/alltickets" element={<AllTickets />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
