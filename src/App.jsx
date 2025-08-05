// --- src/App.jsx ---
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import AddNote from './pages/AddNote';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/add" element={<AddNote />} />
      <Route path="/Theme" element={<ThemeToggle/>}/>
    </Routes>
  );
}

export default App;