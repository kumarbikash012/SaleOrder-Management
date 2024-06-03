import React from 'react';
import { Box, Button, FormControl, FormLabel, Input, FormErrorMessage } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

const LoginForm = ({ onLogin }) => {
  const { handleSubmit, register, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    const { username, password } = data;
    // Perform authentication (this is a dummy example, replace with actual auth logic)
    if (username === 'user' && password === 'password') {
      onLogin();
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)} maxW="md" mx="auto">
      <FormControl mb={3} isInvalid={errors.username}>
        <FormLabel>Username</FormLabel>
        <Input {...register("username", { required: "Username is required" })} />
        <FormErrorMessage>{errors.username && errors.username.message}</FormErrorMessage>
      </FormControl>

      <FormControl mb={3} isInvalid={errors.password}>
        <FormLabel>Password</FormLabel>
        <Input type="password" {...register("password", { required: "Password is required" })} />
        <FormErrorMessage>{errors.password && errors.password.message}</FormErrorMessage>
      </FormControl>

      <Button type="submit" colorScheme="blue" width="full">
        Login
      </Button>
    </Box>
  );
};

export default LoginForm;
