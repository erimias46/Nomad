
import React, { useState } from 'react'
import { Box, Button, Divider, Flex, Heading } from '@chakra-ui/react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,Input
} from "@chakra-ui/react";
import axios from 'axios';


const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
       await axios.post("http://localhost:3001/auth/register", {
         email: email,
         password: password,
       });
      
    }
    catch (err) {
      console.log(err)
    }
   

    
  }
  
    
  return (
    <div>
      <Flex flexDirection={"row"}>
        <Box
          bg="facebook.900"
          w="100%"
          p={4}
          color="white"
          display="flex"
          alignItems={"center"}
          height={500}
        >
          <Heading m={20}>Register</Heading>
          <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input
              id='reg1'
              type="email"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
            <FormLabel>Password</FormLabel>
            <Input
              id="reg2"
              type="password"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
            <Button bg="lightseagreen" m={3} onClick={handleRegister}>
              SignUp
            </Button>
          </FormControl>
        </Box>
        <Divider orientation="vertical" />
        <Box
          bg="lightseagreen"
          w="100%"
          p={4}
          color="white"
          display="flex"
          alignItems={"center"}
        >
          <Heading m={20}>Login</Heading>
          <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input type="email"
            id='reg3'/>
            <FormLabel>Password</FormLabel>
            <Input
              id="reg4" type="password" />
            <Button bg="gray.700" m={3}>
              Login
            </Button>
          </FormControl>
        </Box>
      </Flex>
    </div>
  );
}

export default Login