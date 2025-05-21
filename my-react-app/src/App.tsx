// App.tsx
import React, { useState, useEffect } from 'react';
import Layout from './components/Layout/Layout';
import { HomePage } from './pages/HomePage/HomePage';
import Preloader from './components/Preloader/Preloader';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  return (
    <div className="app">
      {isLoading ? (
        <Preloader />
      ) : (
        <Layout>
          <HomePage />
        </Layout>
      )}
    </div>
  );
};

export default App;