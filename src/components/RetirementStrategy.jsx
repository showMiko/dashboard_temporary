import { Box, Button, Divider, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
} from '@chakra-ui/react'

const RetirementStrategy = () => {
  const [sliderValue, setSliderValue] = useState(50)
  const [sliderValue2, setSliderValue2] = useState(50)
  const labelStyles = {
    mt: '2',
    ml: '-2.5',
    fontSize: 'sm',
  }
  return (
    <Box 
      m={{ md: "40px" ,base:"0px"}} 
      display={"flex"} 
      flexDir={"row"} 
      flexWrap={"wrap"} 
      // ml={{base:"-10px"}}
      width={{ base: "100vw", md: "400px", sm: "100vw" }} 
      pl={{md:"30px"}} 
      // pr={{md:"20px",base:"0px"}} 
      backgroundColor={"gray.200"}
      borderRadius={"20px"}

      
      height={"fit-content"}
      >
      <Box  display={"flexbox"} flexDir={"column"} padding={"20px"} width={{base:"100vw",md:"300px"}}>
        <Text fontWeight={'bold'} fontSize={"20px"}>Retirement Strategy</Text>
        <Text mb={0} mt={5} fontWeight={'bold'} fontSize={"15px"}>Employee Contribution</Text>
        <Box mt={0} display={"flex"} justifyContent={"space-between"}>
        <Slider  size={"lg"} aria-label='slider-ex-6' onChange={(val) => setSliderValue(val)}>
        <SliderTrack bg={"white"}>
          <SliderFilledTrack />
        </SliderTrack >
        <SliderThumb />
      </Slider>
      <Box fontWeight={"semibold"} ml={"30px"} p={2} fontSize={"20px"}>
      {sliderValue}%
      </Box>
        </Box>
        <Text mb={0} mt={5} fontWeight={'bold'} fontSize={"15px"}>Retirement Age</Text>
        <Box mt={0} display={"flex"}>
        <Slider  size={"lg"} aria-label='slider-ex-6' onChange={(val) => setSliderValue2(val)}>
        <SliderTrack bg={"white"}>
          <SliderFilledTrack />
        </SliderTrack >
        <SliderThumb />
      </Slider>
      <Box fontWeight={"semibold"} ml={"30px"} p={2} fontSize={"20px"}>
      {sliderValue2}%
      </Box>
        </Box>
        <Divider border={"0.1px solid"} borderColor={"blackAlpha.300"} borderRadius={"200px"} />
        <Box display={"flex"} justifyContent={"space-between"}>
          <Text mb={0} mt={5} fontWeight={'bold'} fontSize={"15px"}>Employer Contribution</Text>
          <Text mb={0} mt={5} fontWeight={'bold'} fontSize={"15px"}>8.4%</Text>
        </Box>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Text mb={0} mt={5} fontWeight={'bold'} fontSize={"15px"}>Interest rate</Text>
          <Text mb={0} mt={5} fontWeight={'bold'} fontSize={"15px"}>5%</Text>
        </Box>
      </Box>
      <Box mt={10}  width={{base:"100%",md:"90%"}}>
        <Button zIndex={10000} colorScheme='violet.200' width={{base:"100%",md:""}} height={"50px"} borderRadius={"15px"} color={"white"} backgroundColor={"#4935ff"}>Update</Button>
      </Box>
    </Box>
  )
}

export default RetirementStrategy