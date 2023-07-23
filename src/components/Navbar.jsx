import { Box, Image, useMediaQuery } from '@chakra-ui/react';
import React from 'react';
import logo from "../assets/logo.png";
import { AiOutlineSearch } from 'react-icons/ai';
import { AiOutlineHome } from 'react-icons/ai';
import { BsCardChecklist, BsCardList } from 'react-icons/bs';
import { BiUser } from 'react-icons/bi';
import { IoMdNotificationsOutline} from 'react-icons/io';
import { HiOutlineLogout} from 'react-icons/hi';

const Navbar = () => {
  const [isMobile] = useMediaQuery("(max-width: 767px)");
  const styles = {
    container: {
      position: 'fixed',
      bottom: 0,
      left: 0,
      width: '100%',
      zIndex: 9999,
      margin: 0, 
      padding: 0,
    },
    navbar: {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      width: '100%',
      backgroundColor: '#ffffff',
      boxShadow: '0px -1px 10px rgba(0, 0, 0, 0.1)',
      height: '60px',
      margin: 0,
      padding: 0, 
    },
    iconWrapper: {
      cursor: 'pointer',
      padding: '8px',
    },
  };
  if (isMobile) {
    return (
        <Box style={styles.container}>
    <Box display={{md:"none",base:"flex"}} style={styles.navbar}>
      <div style={styles.iconWrapper}>
      <Box borderRadius={"10px"} padding={"5px"} className='icon-hover'>
                <AiOutlineHome  className='icon-hover' onMouseOver={({target})=>target.style.color="white"} onMouseOut={({target})=>target.style.color="gray"} cursor={"pointer"} size={"24px"} color='gray' />
            </Box>
      </div>
      <div style={styles.iconWrapper}>
      <Box borderRadius={"10px"} padding={"5px"} className='icon-hover'>
                <BsCardList  className='icon-hover' onMouseOver={({target})=>target.style.color="white"} onMouseOut={({target})=>target.style.color="gray"} cursor={"pointer"} size={"24px"} color='gray' />
            </Box>
      </div>
      <div style={styles.iconWrapper}>
      <Box borderRadius={"10px"} padding={"5px"} className='icon-hover'>
                <BsCardChecklist  className='icon-hover' onMouseOver={({target})=>target.style.color="white"} onMouseOut={({target})=>target.style.color="gray"} cursor={"pointer"} size={"24px"} color='gray' />
            </Box>
      </div>
      <div style={styles.iconWrapper}>
      <Box borderRadius={"10px"} padding={"5px"} className='icon-hover'>
                <BiUser  className='icon-hover' onMouseOver={({target})=>target.style.color="white"} onMouseOut={({target})=>target.style.color="gray"} cursor={"pointer"} size={"24px"} color='gray' />
            </Box>
      </div>
      <div style={styles.iconWrapper}>
      <Box borderRadius={"10px"} padding={"5px"} className='icon-hover'>
                <AiOutlineSearch  onMouseOver={({target})=>target.style.color="white"} onMouseOut={({target})=>target.style.color="gray"} cursor={"pointer"} size={"24px"} color='gray' />
        </Box>
      </div>
    </Box>
    </Box>
  );
  }


  return (
    <Box backgroundColor={"white"} width={"80px"} display={{ md: "flex", base: "none" }} flexDir={{ md: "column" }} justifyContent={"space-between"} alignItems={"center"}>
      <Box display={"flex"} flexDir={{ md: "column" }} justifyContent={"center"} alignItems={"center"}>
        <Image src={logo} />
        <Box mt={"20px"}>
        <Box borderRadius={"10px"} padding={"5px"} className='icon-hover'>
                <AiOutlineSearch  onMouseOver={({target})=>target.style.color="white"} onMouseOut={({target})=>target.style.color="gray"} cursor={"pointer"} size={"20px"} color='gray' />
        </Box>
        </Box>
      </Box>
      <Box display={"flex"} flexDir={{ md: "column" }} justifyContent={"space-between"} height={"80%"}>
        <Box display={"flex"} flexDir={{ md: "column" }} justifyContent={"space-between"} height={"170px"} alignItems={"center"}>
            <Box borderRadius={"10px"} padding={"5px"} className='icon-hover'>
                <AiOutlineHome  className='icon-hover' onMouseOver={({target})=>target.style.color="white"} onMouseOut={({target})=>target.style.color="gray"} cursor={"pointer"} size={"20px"} color='gray' />
            </Box>
            <Box borderRadius={"10px"} padding={"5px"} className='icon-hover'>
                <BsCardList  className='icon-hover' onMouseOver={({target})=>target.style.color="white"} onMouseOut={({target})=>target.style.color="gray"} cursor={"pointer"} size={"20px"} color='gray' />
            </Box>
            <Box borderRadius={"10px"} padding={"5px"} className='icon-hover'>
                <BsCardChecklist  className='icon-hover' onMouseOver={({target})=>target.style.color="white"} onMouseOut={({target})=>target.style.color="gray"} cursor={"pointer"} size={"20px"} color='gray' />
            </Box>
            <Box borderRadius={"10px"} padding={"5px"} className='icon-hover'>
                <BiUser  className='icon-hover' onMouseOver={({target})=>target.style.color="white"} onMouseOut={({target})=>target.style.color="gray"} cursor={"pointer"} size={"20px"} color='gray' />
            </Box>
        </Box>
        <Box mb={"10px"} display={"flex"} flexDir={{ md: "column" }} justifyContent={"space-between"} height={"100px"} alignItems={"center"}>
        <Box borderRadius={"10px"} padding={"5px"} className='icon-hover'>
                <IoMdNotificationsOutline  className='icon-hover' onMouseOver={({target})=>target.style.color="white"} onMouseOut={({target})=>target.style.color="gray"} cursor={"pointer"} size={"20px"} color='gray' />
            </Box>
        <Box borderRadius={"10px"} padding={"5px"} className='icon-hover'>
                <HiOutlineLogout  className='icon-hover' onMouseOver={({target})=>target.style.color="white"} onMouseOut={({target})=>target.style.color="gray"} cursor={"pointer"} size={"20px"} color='gray' />
            </Box>
          {/* <IoMdNotificationsOutline className='icon-hover' cursor={"pointer"} size={"20px"} color='gray' /> */}
          {/* <HiOutlineLogout className='icon-hover' cursor={"pointer"} size={"20px"} color='gray' /> */}
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;