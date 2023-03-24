import React from 'react'
import { Flex,Box,Text,Spacer,Link,Button } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <>
      <Flex bg="cyan.600">
        <Box p="5" bg="red.400">
          <Text fontSize="3xl">Nomad</Text>
        </Box>
        <Spacer />
        <Box flex="end" p="4" bg="cyan.600">
          <Button m="4">
            <Link>About</Link>
          </Button>

          <Button>Login</Button>
        </Box>
      </Flex>
    </>
  );
}

export default Navbar