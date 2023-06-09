
import React, { useState } from 'react'
import { Box, Button, Divider, Flex, Heading } from '@chakra-ui/react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,Input
} from "@chakra-ui/react";
import axios from 'axios';
import { useCookies } from 'react-cookie'
import { Navigate, useNavigate } from 'react-router-dom';


const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState("");
  const [cookie, setCookies] = useCookies(["access_token"])
  const navigate=useNavigate()

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
  const handleLogin = async () => {
    
    try {
     const response = await axios.post("http://localhost:3001/auth/login", {
       email: email,
       password: password,
     });
      
      setCookies("access_token", response.data.token); 
      window.localStorage.setItem("userID", response.data.userID);
      navigate('/')
    } catch (err) {
      console.log(err);
    }
  };
  
    
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
              id="reg1"
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
            <Input
              type="email"
              id="reg3"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
            <FormLabel>Password</FormLabel>
            <Input
              id="reg4"
              type="password"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
            <Button bg="gray.700" m={3} onClick={handleLogin}>
              Login
            </Button>
          </FormControl>
        </Box>
      </Flex>
    </div>
  );
}

export default Login