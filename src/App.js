import logo from './logo.svg';
import './App.css';
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Layout from './Layout/layout';
import LoadingSpinner from './Component/spinner/LoadingSpinner';
import { useState, useEffect } from 'react';

function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for demonstration purposes
    const delay = 5000; // 2 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, delay);
  }, []);

  return (

    <ThemeProvider
        breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
        minBreakpoint="xxs"
      >
          <div className="App">

            {isLoading ? (
              <LoadingSpinner />
            ) : (
              <div className="content">
                {/* Your actual app content */}
                <Layout/>
              </div>
            )}
          </div>
  </ThemeProvider>

  )
}

export default App;
