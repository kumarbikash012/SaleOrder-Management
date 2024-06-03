/*
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { ChakraProvider, Box, Flex, Spacer } from '@chakra-ui/react';
import LoginPage from './components/LoginPage';
import SaleOrders from './components/SaleOrders';
import ActiveSaleOrders from './pages/ActiveSaleOrders';
import CompletedSaleOrders from './pages/CompletedSaleOrders';
import ThemeToggle from './components/ThemeToggle'; // Import ThemeToggle component

function App() {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <ChakraProvider>
      <Router>
        <Box p={4}>
          <Flex alignItems="center">
            <Spacer />
            <ThemeToggle isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} /> {}
          </Flex>
          <Routes>
            <Route path="/" element={isAuthenticated ? <Navigate to="/sale-orders" /> : <LoginPage />} />
            <Route path="/sale-orders" element={isAuthenticated ? <SaleOrders /> : <Navigate to="/" />} />
            <Route path="/active-sale-orders" element={isAuthenticated ? <ActiveSaleOrders /> : <Navigate to="/" />} />
            <Route path="/completed-sale-orders" element={isAuthenticated ? <CompletedSaleOrders /> : <Navigate to="/" />} />
          </Routes>
        </Box>
      </Router>
    </ChakraProvider>
  );
}

export default App;
*/

/*
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import LoginPage from './components/LoginPage';
import SaleOrders from './components/SaleOrders';
import ThemeToggle from './components/ThemeToggle';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('isAuthenticated') === 'true');
  const [isDarkTheme, setIsDarkTheme] = useState(localStorage.getItem('isDarkTheme') === 'true');

  const theme = extendTheme({
    config: {
      initialColorMode: isDarkTheme ? 'dark' : 'light',
      useSystemColorMode: false,
    },
  });

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true');
  };

  useEffect(() => {
    localStorage.setItem('isDarkTheme', isDarkTheme);
  }, [isDarkTheme]);

  return (
    <ChakraProvider theme={theme}>
      <Router>
        <ThemeToggle isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
        <Routes>
          <Route path="/" element={isAuthenticated ? <Navigate to="/sale-orders" /> : <LoginPage onLogin={handleLogin} />} />
          <Route path="/sale-orders" element={isAuthenticated ? <SaleOrders /> : <Navigate to="/" />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
*/
/*
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import LoginPage from './components/LoginPage';
import SaleOrders from './components/SaleOrders';
import ThemeToggle from './components/ThemeToggle';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('isAuthenticated') === 'true');
  const [isDarkTheme, setIsDarkTheme] = useState(localStorage.getItem('isDarkTheme') === 'true');

  const theme = extendTheme({
    config: {
      initialColorMode: isDarkTheme ? 'dark' : 'light',
      useSystemColorMode: false,
    },
  });

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true');
  };

  useEffect(() => {
    localStorage.setItem('isDarkTheme', isDarkTheme);
  }, [isDarkTheme]);

  return (
    <ChakraProvider theme={theme}>
      <Router>
        <ThemeToggle isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
        <Routes>
          <Route path="/" element={isAuthenticated ? <Navigate to="/sale-orders" /> : <LoginPage onLogin={handleLogin} />} />
          <Route path="/sale-orders" element={isAuthenticated ? <SaleOrders /> : <Navigate to="/" />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
*/

/*
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import SaleOrders from './components/SaleOrders';
import LoginForm from './components/LoginForm';

function App() {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={isAuthenticated ? <Navigate to="/sale-orders" /> : <LoginForm />} />
          <Route path="/sale-orders" element={isAuthenticated ? <SaleOrders /> : <Navigate to="/" />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
*/