// src/App.jsx
import React from 'react';
import Layout from './components/Layout';
import TaskManager from './pages/TaskManager.jsx';
// import Posts from './pages/Posts'; // Uncomment when you create Posts page
import './index.css'; // Tailwind / global styles

function App() {
  return (
    <Layout>
      {/* Task Manager Section */}
      <section className="my-8 max-w-3xl mx-auto">
        <TaskManager />
      </section>

      {/* Posts Section (optional) */}
      {/* <section className="my-8 max-w-3xl mx-auto">
        <Posts />
      </section> */}
    </Layout>
  );
}

export default App;

