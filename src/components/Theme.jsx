import { useEffect, useState } from 'react';

export default function App() {
  const [isDark, setIsDark] = useState(false);

  const toggleDarkMode = () => {
    console.log(isDark);
    localStorage.setItem('dark-theme', isDark);
    setIsDark(prev => !prev);
  };

  useEffect(() => {
    if (localStorage.getItem('dark-theme')) {
      setIsDark(true);
    }
  }, []);
  return (
    <div className={`App ${isDark ? 'dark-theme' : 'light-theme'}`}>
      <h1>Main Heading!!1</h1>
      <h2>Subheading-1</h2>
      <button onClick={toggleDarkMode}>{isDark ? 'light' : 'dark'}</button>
    </div>
  );
}
