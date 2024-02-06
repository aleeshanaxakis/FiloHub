import React from 'react';
import { Box, Flex, Button, Spacer } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';

function NavBar() {
  // Check if the user is logged in
  const isLoggedIn = Auth.loggedIn();

  return (
    <Flex bg="#5f931d" p={4} color="white">
      <Box>FiloHub</Box>
      <Spacer />
      <Box>
         {/* If user is logged in, show links to My Challenges and Log Out */}
         {isLoggedIn ? (
          <>
            <Button as={Link} to="/dashboard" colorScheme="teal" variant="ghost" mr={3}>
              My Challenges
            </Button>
            <Button colorScheme="teal" variant="ghost" onClick={Auth.logout} mr={3}>
              Log Out
            </Button>
          </>
         ) : (
          // If user is not logged in, show links to Log In and Sign Up
          <>
            <Button as={Link} to="/login" colorScheme="teal" variant="ghost" mr={3}>
              Log In
            </Button>
            <Button as={Link} to="/signup" colorScheme="teal" variant="ghost" mr={3}>
              Sign Up
            </Button>
          </>
        )}
      </Box>
    </Flex>
  );
}

export default NavBar;