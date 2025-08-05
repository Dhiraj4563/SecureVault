// --- src/components/ThemeToggle.jsx ---
import { useEffect, useState } from 'react';
import './ThemeToggle.css'; // Import custom styles

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('sv_theme');
    if (storedTheme === 'dark') {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  }, []);

  const toggle = () => {
    const html = document.documentElement;
    const newTheme = html.classList.contains('dark') ? 'light' : 'dark';

    if (newTheme === 'dark') {
      html.classList.add('dark');
      setIsDark(true);
    } else {
      html.classList.remove('dark');
      setIsDark(false);
    }

    localStorage.setItem('sv_theme', newTheme);
  };

  return (
    <button className="theme-toggle-btn" onClick={toggle}>
      {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
    </button>
  );
}
