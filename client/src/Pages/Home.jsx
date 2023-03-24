import React, { useEffect } from 'react'
import { useState } from 'react'

import axios from 'axios'
import { Button ,Box,Text,Flex,Spacer, Link,Card,CardHeader,Heading,CardFooter,CardBody,SimpleGrid,Image} from '@chakra-ui/react'

const Home = () => {
    const [search, setSearch] = useState('lord')
    const [data,setData]=useState([])
    
  const url2 = `https://api.themoviedb.org/3/search/movie?api_key=034535d00ec4b451057f7e2991109a65&language=en-US&query=${search}&page=1&include_adult=false`;


  useEffect(() => {
      console.log(process.env.REACT_APP_APIKEY)
      handleSearch()
      
    },[search])

  const handleSearch = async (event) => {

       
        try {
          const response = await axios.get(url2)
          setData(response.data.results)
          console.log(process.env)
             
          console.log(response.data.results)
          
        }
        catch (err) {
            console.log(err)
    }
   
      
    }
    
  return (
    <div>
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
      <h1>Search Movies</h1>

      <form action="">
        <input
          type="text"
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
        <Button
          onClick={() => {
            handleSearch;
          }}
        >
          Search
        </Button>
      </form>
      <h1>Founded</h1>

      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(150px, 1fr))"
        flex={1}
      >
        {data.map((book, index) => {
          return (
            <Card key={index}>
              <CardHeader>
                <Heading size="md"> {book.title}</Heading>
              </CardHeader>
              <CardBody>
                <Image
                  src={`https://image.tmdb.org/t/p/w500/${book.poster_path}`} width="100" height="100"
                />
              </CardBody>
              <CardFooter>
                <Button>View here</Button>
              </CardFooter>
            </Card>
          );
        })}
      </SimpleGrid>
    </div>
  );
}

export default Home