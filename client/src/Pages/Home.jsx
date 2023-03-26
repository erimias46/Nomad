import React, { useEffect } from 'react'
import { useState } from 'react'

import axios from 'axios'
import { createSearchParams, Link,useNavigate } from 'react-router-dom'
import { Button ,Box,Text,Flex,Spacer,Card,CardHeader,Heading,CardFooter,CardBody,SimpleGrid,Image} from '@chakra-ui/react'


const Home = () => {
  
    const [search, setSearch] = useState('lord')
    const [data,setData]=useState([])
    
  const url = `https://api.themoviedb.org/3/search/movie?api_key=034535d00ec4b451057f7e2991109a65&language=en-US&query=${search}&page=1&include_adult=true`;


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
    <div style={{ backgroundColor: "#111111" }}>
      <h1 style={{ color: 'blueviolet' }}>Search Movies</h1>

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
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
        flex={1}
      >
        {data.map((book, index) => {
          return (
            <Card key={index} bg="blackAlpha.900">
              <CardHeader>
                <Heading size="md" color="whiteAlpha.900">
                  {" "}
                  {book.title}
                </Heading>
              </CardHeader>
              <CardBody>
                <Image
                  src={`https://image.tmdb.org/t/p/w500/${book.poster_path}`}
                  width="200"
                  height="200"
                />
              </CardBody>
              <CardFooter
                display={"flex"}
                alignContent={"center"}
                justifyContent="center"
              >
                <Button
                  onClick={() => {
                    details(book.id);
                  }}
                >
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