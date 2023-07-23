import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
import { Box, Divider, Text } from '@chakra-ui/react';
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
Chart.register(CategoryScale);
const Charts = () => {
  const [selectedAge, setSelectedAge] = useState('');
  const [selectedSalary,setSelectedSalary] = useState('');
  const [gender,setGender] = useState('');

  const handleAge = (event) => {
    setSelectedAge(event.target.value);
  };
  const handleSalary = (event) => {
    setSelectedSalary(event.target.value);
  };
  const handlGender = (event) => {
    setGender(event.target.value);
  };

  const data = {
    labels: Array.from({ length: 10 }, (_, index) => 20 + index * 5),
    datasets: [
      {
        label: 'Employer',
        backgroundColor: 'rgb(8, 0, 163)',
        data: [45, 90, 140, 250, 180, 110, 60, 80, 140, 200, 150],
      },
      {
        label: 'Employee',
        backgroundColor: 'rgb(73, 53, 255)',
        data: [20, 60, 100, 150, 200, 100, 40, 80, 120, 100, 100],
      },
      {
        label: 'Total Interest',
        backgroundColor: 'rgb(133, 175, 255)',
        data: [35, 70, 120, 180, 50, 20, 140, 130, 150, 190, 50],
      },
    ],
  };


  const options = {
    scales: {
      x: {
        stacked: true,
        ticks: {
          stepSize: 5,
        },
      },
      y: {
        stacked: true,
        ticks: {
          stepSize: 50,
          callback: (value) => `$${value}`,
        },
      },
    },
  };

  return (
    <Box m={{ md: "40px" }} display={"flex"} flexDir={"row"} flexWrap={"wrap"} width={{ base: "100vw", md: "50em", sm: "100vw" }} pl={"30px"} pr={"30px"}>
      <Box display={"flex"} flexDir={"column"} width={"100%"}>
        <Box>
          <Text color={"#4935ff"} mb={0} fontWeight={"semibold"}>Retirement Income</Text>
          <Text fontWeight={"bold"} fontSize={"20px"}>Starting Year 2056</Text>
        </Box>
        <Box display={"flex"} flexDir={"row"} width={"100%"} flexWrap={"wrap"}>
          <Box width={{ md: "30%", base: "100%" }} pr={"20px"}>
            <Text mb={0} fontWeight={"bold"} fontSize={"25px"}>$300,000</Text>
            <Text mb={0} color={"gray"} fontSize={"10px"}>My Goal</Text>
            <Divider mt={0} border={"0.1px solid"} borderColor={"#4935ff"} borderRadius={"200px"} />
          </Box>
          <Box width={{ md: "30%", base: "46%" }} pr={"20px"}>
            <Text mb={0} fontWeight={"bold"} fontSize={"25px"}>59%</Text>
            <Text mb={0} color={"gray"} fontSize={"10px"}>Goal Achieved</Text>
            <Divider mt={0} border={"0.1px solid"} borderColor={"#4935ff"} borderRadius={"200px"} />
          </Box>
          <Box width={{ md: "30%", base: "46%" }} pr={"20px"}>
            <Text mb={0} fontWeight={"bold"} fontSize={"25px"}>$300</Text>
            <Text mb={0} color={"gray"} fontSize={"10px"}>Est. Monthly Income</Text>
            <Divider mt={0} border={"0.1px solid"} borderColor={"#4935ff"} borderRadius={"200px"} />
          </Box>
        </Box>
        <Box>
          <Text fontWeight={'bold'} fontSize={"25px"}>Contributions OverTime</Text>
          <Bar width={"100%"} height={"70%"} data={data} options={options} />
        </Box>

        <Box mt={{ base: "30px", md: "20px" }}>
          <Text mb={0} fontWeight={"bold"} fontSize={"20px"}>How do I compare to my peers?</Text>
          <Text mb={0} color={"gray"} fontSize={"15px"}>These numbers represent current goal achievement</Text>
          <Box display={"flex"} justifyContent={"space-between"} flexDir={{ base: "column", md: "row" }}>
            <Box display={"flex"} flexDir={"column"} justifyContent={"space-between"}>
              <Box>
                <label style={{fontWeight:"bold"}} htmlFor='age'>Age:</label>
                <select style={{background:"transparent"}} id="age" value={selectedAge} onChange={handleAge}>
                 <option value="">Select an Option</option> 
                 <option value="above30">Above 30</option> 
                 <option value="below30">Below 30</option> 
                </select>
              <Divider mt={2} border={"0.1px solid"} borderColor={"#4935ff"} borderRadius={"200px"} />
              </Box>
              <Box>
              <label style={{fontWeight:"bold"}} htmlFor='age'>Salary:</label>
                <select style={{background:"transparent"}} id="age" value={selectedSalary} onChange={handleSalary}>
                 <option value="">Select an Option</option> 
                 <option value="above30">K 10-K 20</option> 
                 <option value="above30">K 20-K 30</option> 
                 <option value="above30">K 30-K 40</option> 
                 <option value="above30">K 40-K 50</option> 
                </select>
              <Divider mt={2} border={"0.1px solid"} borderColor={"#4935ff"} borderRadius={"200px"} />
              </Box>
              <Box>
              <label style={{fontWeight:"bold"}} htmlFor='age'>Gender:</label>
                <select style={{background:"transparent"}} id="age" value={gender} onChange={handlGender}>
                 <option value="">Select an Option</option> 
                 <option value="above30">Male</option> 
                 <option value="above30">Female</option> 
                 <option value="above30">Others</option> 
                </select>
              <Divider mt={2} border={"0.1px solid"} borderColor={"#4935ff"} borderRadius={"200px"} />
              </Box>
            </Box>
            <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
              <CircularProgress p={{md:"20px",base:"auto"}} fontWeight={"bold"} size={"2.5em"} value={78} color='#25d6aa' > 
                <CircularProgressLabel fontSize={"20px"}>78%</CircularProgressLabel>
              </CircularProgress>

              <CircularProgress  p={{md:"20px",base:"auto"}} fontWeight={"bold"} size={"2.5em"} value={95} color='#25d6aa' > 
                <CircularProgressLabel fontSize={"20px"}>95%</CircularProgressLabel>
              </CircularProgress>

              <CircularProgress  p={{md:"20px",base:"auto"}} fontWeight={"bold"} size={"2.5em"} value={59} color='#25d6aa' > 
                <CircularProgressLabel fontSize={"20px"}>59%</CircularProgressLabel>
              </CircularProgress>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Charts;