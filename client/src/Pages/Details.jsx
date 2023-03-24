import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { Card,Stack,Button,CardBody,Heading,CardFooter,Text,Image ,Wrap,WrapItem,Avatar, Flex} from '@chakra-ui/react';

const Details = () => {
    const [searchparams] = useSearchParams()
    const movieid = searchparams.get("id");
    const url = `https://api.themoviedb.org/3/movie/${movieid}?api_key=034535d00ec4b451057f7e2991109a65&language=en-US`;
    const url2 = `https://api.themoviedb.org/3/movie/${movieid}/credits?api_key=034535d00ec4b451057f7e2991109a65&language=en-US`;
    const [data, setData] = useState([])
    const[actor,setActors]=useState([])
    

    const search = async () => {
      try {
        const response = await axios.get(url);
          setData(response.data)
      } catch (err) {
        console.log(err);
      }
    };
     const actors = async () => {
       try {
         const response = await axios.get(url2);
         console.log(response.data.cast);
         setActors(response.data.cast);
       } catch (err) {
         console.log(err);
       }
     };
    useEffect(() => {
        
        search()
        actors()

        
    },[])
    
    
  return (
    <div>
      <h1>Details</h1>
      {data.id}
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px" }}
          src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
          alt="Caffe Latte"
        />

        <Stack>
          <CardBody>
            <Heading size="md">{data.title}</Heading>
            <Text py="2">{data.overview}</Text>
          </CardBody>

          <CardFooter>
            <Button variant="solid" colorScheme="blue">
              Buy Latte
            </Button>
          </CardFooter>
        </Stack>
      </Card>
          <hr />
          
          <Wrap>
              {actor.map((act,index) => {
                  return (
                    <WrapItem key={index}>
                      <Flex flexDirection={"column"}>
                        <Avatar
                          size="lg"
                          name="Dan Abrahmov"
                          src={`https://image.tmdb.org/t/p/w500/${act.profile_path}`}
                        />
                        <Text>{act.name}</Text>
                      </Flex>
                    </WrapItem>
                  );
              })}
        
              
      </Wrap>
    </div>
  );
}

export default Details