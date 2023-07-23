import { Box } from '@chakra-ui/react'
import React from 'react'
import Profile from './Profile'
import Charts from './Charts'

import RetirementStrategy from './RetirementStrategy'

import Navbar from './Navbar'

const Dashboard = () => {
  return (
    <Box width={"100vw"} minH={"99vh"} height={"auto"} borderRadius={"15px"} backgroundColor={{base:"white",md:"gray.100"}} display={"flex"} justifyContent={"flex-start"} flexDir={{base:"column",md:"row",sm:"column"}} minW={"fit-content"}>
        <Navbar/>
        <Profile/>
        <Charts/>
        <Box ml={{base:"0px"}} width={"100%"}>
         <RetirementStrategy/>
        </Box>
    </Box>
  )
}

export default Dashboard