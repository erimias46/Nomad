import React, { useEffect } from 'react'
import { useState } from 'react'

import axios from 'axios'
import { createSearchParams, Link,useNavigate } from 'react-router-dom'
import { Button ,Box,Text,Flex,Spacer,Card,CardHeader,Heading,CardFooter,CardBody,SimpleGrid,Image} from '@chakra-ui/react'


const Home = () => {
  
    const [search, setSearch] = useState('lord')
    const [data,setData]=useState([])
    
  const url = `https://api.themoviedb.org/3/search/movie?api_key=034535d00ec4b451057f7e2991109a65&language=en-US&query=${search}&page=1&include_adult=false`;


  useEffect(() => {
      
      handleSearch()
      
    },[search])

  const handleSearch = async (event) => {

       
        try {
          const response = await axios.get(url)
          setData(response.data.results)
         
             
          console.log(response.data.results)
          
        }
        catch (err) {
            console.log(err)
    }
   
      
  }
  const navigate = useNavigate();
  const details = (id) => {
    navigate({
      pathname: "/details",
      search: createSearchParams({
        id: id,
      }).toString(),
    });
  };
    
  return (
    <div>
      
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
                  src={`https://image.tmdb.org/t/p/w500/${book.poster_path}`}
                  width="200"
                  height="200"
                />
              </CardBody>
              <CardFooter>
                {book.id}
                <Button onClick={() => { details(book.id) }}>
                  Details
                 
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </SimpleGrid>
    </div>
  );
}

export default Home