import React from 'react';
import { Button, useColorMode } from '@chakra-ui/react';

const ThemeToggle = ({ isDarkTheme, setIsDarkTheme }) => {
  const { toggleColorMode } = useColorMode();

  const handleToggle = () => {
    toggleColorMode();
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <Button onClick={handleToggle}>
      Toggle {isDarkTheme ? 'Light' : 'Dark'} Mode
    </Button>
  );
};

export default ThemeToggle;

/*
import React from 'react';
import { Box, Switch, useColorMode } from '@chakra-ui/react';

const ThemeToggle = ({ isDarkTheme, setIsDarkTheme }) => {
  const { toggleColorMode } = useColorMode(); // Ensure toggleColorMode is defined here

  const handleToggle = () => {
    setIsDarkTheme(!isDarkTheme);
    toggleColorMode(); // Use toggleColorMode to switch themes
  };

  return (
    <Box position="absolute" top="1rem" right="1rem">
      <Switch isChecked={isDarkTheme} onChange={handleToggle} />
    </Box>
  );
};

export default ThemeToggle;
*/

/*
import { Switch } from "@chakra-ui/react";
import { useEffect } from "react";

const ThemeToggle = ({ isDarkTheme, setIsDarkTheme }) => {
  useEffect(() => {
    localStorage.setItem("theme", isDarkTheme ? "dark" : "light");
  }, [isDarkTheme]);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkTheme(savedTheme === "dark");
    }
  }, []);

  return (
    <Switch
      isChecked={isDarkTheme}
      onChange={() => setIsDarkTheme(!isDarkTheme)}
      mt={4}
      ml={4}
    />
  );
};

export default ThemeToggle;
*/