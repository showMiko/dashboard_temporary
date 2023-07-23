import { Box, Button, Divider, Image, Text } from '@chakra-ui/react'
import React from 'react'
import prof from "../assets/Profileimg.png"
import { CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle } from '@coreui/react'

const Profile = () => {
    return (
        <Box borderRadius={{base:"30px",md:"0px"}} pl={"30px"} pr={"30px"} display={"flex"} alignItems={"flex-start"} width={{base:"100vw",md:"20em",sm:"100vw"}}
            backgroundColor={{base:"white",md:"gray.200"}} flexDir={"column"}
        >
            <Box display={"flex"} height={"15vh"} width={"100%"} justifyContent={"flex-start"} alignItems={"center"} >
                <Image src={prof} width={"3rem"} height={"3rem"} borderRadius={"50%"} />
                <Box ml={"5px"}>
                    <Text mb={0} fontWeight={'bold'} fontSize={"25px"}>Hi Mike,</Text>
                    <Text fontSize={"10px"}>Welcome Back</Text>
                </Box>
            </Box>
            <Box borderRadius={"20px"} padding={{base:"15px",sm:"15px"}} backgroundColor="gray.200"  width={{base:"100%",sm:"100%"}} display={"flex"} flexDir={"column"}>
                <Box mb={"15px"}>
                    <Text mb={"10px"} fontWeight={"medium"}>Today</Text>
                    <Text mb={0} fontWeight={"bold"} fontSize={"35px"}>$19,892</Text>
                    <Text color={"gray"} fontSize={"10px"}>Account Balance</Text>
                </Box>
                <Box mb={"15px"}>
                    <Text mb={0} fontWeight={"bold"} fontSize={"15px"}>$4,000</Text>
                    <Text mb={0} color={"gray"} fontSize={"10px"}>Year-to-Date Contributions</Text>
                </Box>
                <Box>
                    <Text mb={0} fontWeight={"bold"} fontSize={"15px"}>$1,892</Text>
                    <Text color={"gray"} fontSize={"10px"}>Total Interest</Text>
                </Box>
                <CDropdown >
                    <CDropdownToggle style={{borderRadius:"10px"}} color="primary">I want to</CDropdownToggle>
                    <CDropdownMenu>
                        <CDropdownItem href="#">Action 1</CDropdownItem>
                        <CDropdownItem href="#">Action 2</CDropdownItem>
                        <CDropdownItem href="#">Action 3</CDropdownItem>
                    </CDropdownMenu>
                </CDropdown>
            </Box>
            <Box mt={{base:"40px"}} borderRadius={"20px"} padding={{base:"15px",sm:"15px"}} backgroundColor="gray.200" width={{base:"100%",sm:"100%"}} display={"flex"} flexDir={"column"}>
                <Text fontWeight={"bold"} fontSize={"15px"}>Recent Transactions</Text>
                <Text mb={0} color={"gray"} fontSize={"10px"}>2020-08-07</Text>
                <Text fontWeight={"semibold"} fontSize={"12px"}>Withdrawal Transfer to Bank-XXX11</Text>
                <Divider mt={0} border={"0.1px solid"} borderColor={"blackAlpha.300"} borderRadius={"200px"} />
                <Text mb={0} color={"gray"} fontSize={"10px"}>2020-07-21</Text>
                <Text fontWeight={"semibold"} fontSize={"12px"}>Withdrawal Transfer to Bank-XXX11</Text>
                <Divider mt={0} border={"0.1px solid"} borderColor={"blackAlpha.300"} borderRadius={"200px"} />
                <Text mb={0} color={"gray"} fontSize={"10px"}>2020-07-16</Text>
                <Text fontWeight={"semibold"} fontSize={"12px"}>Withdrawal Transfer to Bank-XXX11</Text>
                <Divider mt={0} border={"0.1px solid"} borderColor={"blackAlpha.300"} borderRadius={"200px"} />
            </Box>
            <Box width={"100%"}>
            </Box>
        </Box>
    )
}

export default Profile