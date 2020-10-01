import React from 'react';
// import './App.css';

import { Box, Text, Link, Flex, Badge } from "@chakra-ui/core";

import Home from './pages/Home.jsx';
import About from './pages/About';

import { Route, Switch, Link as RLink, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Box w="100%" bg="green.700" minH="100vh">
      <Router>
        <Box alignItems="center" p="5">
          <Box d="block">
            <Text 
              m="0"
              textAlign="center" 
              fontSize="3xl" 
              fontWeight="bold"
              color="white"
            >
              Chat Whatsapp
            </Text>
          </Box>
          <Box d="block">
            <Box textAlign="center">
              <Link as={RLink} to="/about" color="#f8fffb8f">
                About
              </Link>
            </Box>
          </Box>

          <Box w="100%">
            <Flex align="center" bg="green.900" w="70%" borderRadius="md" m="5" mx="auto" boxShadow="md" p="5">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
              </Switch>
            </Flex>
          </Box>

        </Box>
      </Router>
      <Box p="6" color="white" textAlign="center">
        <Box>
          <Text fontSize="xs">
            A product by &nbsp;
            <Link href="https://kusiaga.com" isExternal>
              <Badge variantColor="green">Burhannahm</Badge>  
            </Link>
          </Text>
        </Box>
        <Box>
          <Text fontSize="xs">
            Built with &nbsp;
            <Link href="https://chakra-ui.com" isExternal>Chakra UI</Link>, &nbsp;
            <Link href="https://reactjs.org/" isExternal>React.js</Link>. 
            Deployed on <Link href="https://vercel.com" isExternal>Vercel</Link>
          </Text>
        </Box>
        <Box>
          <Text fontSize="xs">
            Source code on <Link href="https://github.com/burhanahmeed/chat-whatsapp" isExternal>Github</Link>
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
