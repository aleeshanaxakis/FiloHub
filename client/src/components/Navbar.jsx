import React from 'react';
import { Box, Flex, Button, Spacer } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

// Add a logo in Navbar 

function NavBar() {
  return (
    <Flex bg="blue.500" p={4} color="white">
      <Box>FiloHub</Box>
      <Spacer />
      <Box>
        <Button as={Link} to="/user-details" colorScheme="teal" variant="ghost" mr={3}>
          Login
        </Button>
        <Button as={Link} to="/upcoming-movies" colorScheme="teal" variant="ghost" mr={3}>
          Sign Up
        </Button>
        <Button as={Link} to="/past-movies" colorScheme="teal" variant="ghost" mr={3}>
          
        </Button>
        <Button as={Link} to="/subscribe" colorScheme="teal" variant="ghost">
          Subscribe
        </Button>
      </Box>
    </Flex>
  );
}

export default NavBar;