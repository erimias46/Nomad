import React, { useEffect } from 'react'
import { useState } from 'react'

import axios from 'axios'
import { Button ,Box,Text,Flex,Spacer, Link,Card,CardHeader,Heading,CardFooter,CardBody,SimpleGrid} from '@chakra-ui/react'

const Home = () => {
    const [search, setSearch] = useState('lord')
    const [data,setData]=useState([])
    
    const url = `https://openlibrary.org/search.json?title=${search}`;

    useEffect(() => {
        handleSearch()
    },[])

  const handleSearch = async (event) => {
    
    event.preventDefault()
    console.log(search)
       
        try {
            const response = await axios.get(url)
          setData(response.data.docs)    
          console.log(response)
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
      <h1>Search Books</h1>

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
                <Text>here</Text>
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