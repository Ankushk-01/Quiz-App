import {
    Box,
    Flex,
    Avatar,
    HStack,
    IconButton,
    useDisclosure,
    useColorModeValue,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
  } from "@chakra-ui/react";
  import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
  import logo from "../Assets/logo.png";
  // import Login from '../../Login/Login'
  import { Link } from "react-router-dom";
  import { Link as ReachLink } from "react-router-dom";
  import { useState,useEffect } from "react";
  // import { useState } from 'react';
  export default function AdminBar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    // const [openLink,setOpenLink] = useState(false);
    const [Name,setName] = useState(sessionStorage.getItem("name"));
    // const Name = sessionStorage.getItem("name");
    console.log(Name);//debuging
    useEffect(() => {
      const handleStorageChange = (event) => {
        if (event.key === 'name') {
          setName(event.newValue);
          console.log(event.newValue);
        }
      };
  
      window.addEventListener('storage', handleStorageChange);
  
      return () => {
        window.removeEventListener('storage', handleStorageChange);
      };
    }, []);
    return (
      <>
        <Box bg={useColorModeValue("#171923a8")} px={4}>
          <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
            <IconButton
              bg={useColorModeValue("#2c2c2da8")}
              _hover={{
                bg: useColorModeValue("#2c2c2d"),
              }}
              cursor={"pointer"}
              size={"md"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={"Open Menu"}
              display={{ md: "none" }}
              onClick={isOpen ? onClose : onOpen}
            />
            <HStack spacing={8} alignItems={"center"}>
              <Avatar size={"sm"} src={logo} w={10} h={10} />
              <HStack
                as={"nav"}
                spacing={4}
                display={{ base: "none", md: "flex" }}
              >
                <ReachLink
                style={{ color: "black", textDecoration: "none", fontSize: "18px" }}
                  px={2}
                  py={1}
                  rounded={"md"}
                  _hover={{ textDecoration: "none" }}
                  to="/admindashboard"
                >
                  Home
                </ReachLink>
                <ReachLink
                style={{ color: "black", textDecoration: "none", fontSize: "18px" }}
                  px={2}
                  py={1}
                  rounded={"md"}
                  _hover={{ textDecoration: "none" }}
                  to="/home"
                >
                  Quiz
                </ReachLink>
                <ReachLink
                style={{ color: "black", textDecoration: "none", fontSize: "18px" }}
                  px={2}
                  py={1}
                  rounded={"md"}
                  _hover={{ textDecoration: "none" }}
                  to="/admindashboard/Users"
                >
                  Users
                </ReachLink>
                <ReachLink
                  px={2}
                  py={1}
                  rounded={"md"}
                  style={{ color: "black", textDecoration: "none", fontSize: "18px" }}
  
                  _hover={{ textDecoration: "none" }}
                  to="/admindashboard/feedback"
                >
                  Feedbacks
                </ReachLink>
                <ReachLink
                  px={2}
                  py={1}
                  rounded={"md"}
                  style={{ color: "black", textDecoration: "none", fontSize: "18px" }}
  
                  _hover={{ textDecoration: "none" }}
                  to="/admindashboard/about"
                >
                  About
                </ReachLink>
              </HStack>
            </HStack>
            <HStack justifyItems="flex-end" mx={4}>
              <Menu>
                <MenuButton>
                  <Avatar
                    size="sm"
                    alignSelf="flex-end"
                    name = {Name}
                    color="black"
                  ></Avatar>
                </MenuButton>
                {/* <MenuList>
                  <MenuItem color="black"  style={{textDecoration:"none"}}><Link to='/profile'>Profile</Link></MenuItem>
                  <MenuItem color="black"><Link to='/dashboard'>Dashboard</Link></MenuItem>
                  <MenuItem color="black"><Link to='/edit'>Edit</Link></MenuItem>
                  <MenuItem color="black"><Link to='/'>Log-Out</Link></MenuItem>
                </MenuList> */}
                <MenuList>
                  <MenuItem color="black">
                    <Link to="/" className="linkItems">
                      Log-Out
                    </Link>
                  </MenuItem>
                </MenuList>
              </Menu>
            </HStack>
          </Flex>
        </Box>
      </>
    );
  }
  