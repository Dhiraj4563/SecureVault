// --- src/pages/Dashboard.jsx ---
import { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { decryptNote } from '../utils/encryption';
import ThemeToggle from '../components/ThemeToggle'; // Make sure this component exists
import './Dashboard.css';

export default function Dashboard() {
  const { user, logout } = useContext(AuthContext);
  const [notes, setNotes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem(`${user}_notes`)) || [];
    const decrypted = stored.map((n) => ({ ...n, content: decryptNote(n.content) }));
    setNotes(decrypted);
  }, [user]);

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
  <h1>Welcome, {user}</h1>
  <div className="button-group">
    <button className="btn logout-btn" onClick={logout}>Logout</button>
    <ThemeToggle />
  </div>
</div>


      <button className="btn addnote-btn" onClick={() => navigate('/add')}>
        + Add Note
      </button>

      <div className="note-grid">
        {notes.map((note, index) => (
          <div key={index} className="note-card">
            <h2>{note.title}</h2>
            <p>{note.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
