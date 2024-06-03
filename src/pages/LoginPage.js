import React, { useState } from 'react';
import { Box, Button, Input, Heading, VStack } from '@chakra-ui/react';

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'user' && password === 'password') {
      onLogin();
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <Box display="flex" alignItems="center" justifyContent="center" height="100vh">
      <VStack spacing={4}>
        <Heading>Login</Heading>
        <Input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleLogin}>Login</Button>
      </VStack>
    </Box>
  );
};

export default LoginPage;

/*
import React, { useState } from 'react';
import { Box, Button, Input, Heading, VStack } from '@chakra-ui/react';

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'user' && password === 'password') {
      onLogin();
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <Box display="flex" alignItems="center" justifyContent="center" height="100vh">
      <VStack spacing={4}>
        <Heading>Login</Heading>
        <Input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleLogin}>Login</Button>
      </VStack>
    </Box>
  );
};

export default LoginPage;
*/
/*
import React from 'react';
import { Box, Heading, useColorMode, useColorModeValue } from '@chakra-ui/react';
import LoginForm from './LoginForm';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue('white', 'gray.800');
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem('isAuthenticated', 'true');
    navigate('/sale-orders');
  };

  return (
    <Box bg={bg} minH="100vh" display="flex" justifyContent="center" alignItems="center" p={4}>
      <Box maxW="md" w="full" boxShadow="lg" rounded="md" p={6} bg={bg}>
        <Heading as="h1" mb={6} textAlign="center">
          Login
        </Heading>
        <LoginForm onLogin={handleLogin} />
        <Button mt={4} onClick={toggleColorMode} width="full">
          Toggle {colorMode === 'light' ? 'Dark' : 'Light'} Mode
        </Button>
      </Box>
    </Box>
  );
};

export default LoginPage;
*/
