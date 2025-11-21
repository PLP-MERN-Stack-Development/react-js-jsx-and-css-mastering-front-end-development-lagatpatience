import useTheme from '../hooks/useTheme.jsx';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="flex justify-between p-4 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <h1 className="font-bold text-lg">Task Manager</h1>
      <button
        onClick={toggleTheme}
        className="px-3 py-1 rounded bg-blue-500 text-white hover:bg-blue-600"
      >
        {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
      </button>
    </nav>
  );
}

