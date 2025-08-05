// --- src/pages/AddNote.jsx ---
import { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { encryptNote } from '../utils/encryption';
import './AddNote.css';

export default function AddNote() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSave = () => {
    if (!title.trim() || !content.trim()) return;
    const encrypted = encryptNote(content);
    const existing = JSON.parse(localStorage.getItem(`${user}_notes`)) || [];
    const updated = [...existing, { title, content: encrypted }];
    localStorage.setItem(`${user}_notes`, JSON.stringify(updated));
    navigate('/dashboard');
  };

  return (
    <div className="addnote-container">
      <div className="addnote-box">
        <h2 className="addnote-title">📝 Add New Note</h2>

        <input
          type="text"
          placeholder="Note Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="addnote-input"
        />

        <textarea
          placeholder="Note Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="addnote-textarea"
        />

        <button onClick={handleSave} className="addnote-button">
          💾 Save Note
        </button>
      </div>
    </div>
  );
}
