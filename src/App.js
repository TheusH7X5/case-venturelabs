import { ChakraProvider } from '@chakra-ui/react';
import React from 'react'
import './App.css';
import InputGlobalStateProvider from './Context/InputGlobalContext';
import { Router } from './Router/Route';
import { Box } from '@chakra-ui/layout';




function App() {
  return (
    <ChakraProvider>
    <Box 
      minH="150vh"
      bgGradient={[
        "linear(to-b, #000001, #010D38)",
      ]}
      width={[
        "100%",
        "100%",
        "100%",
        "100%",
      ]}>
      <InputGlobalStateProvider>
        <Router/>
      </InputGlobalStateProvider>
      </Box>
      </ChakraProvider>
  )
}

export default App;
