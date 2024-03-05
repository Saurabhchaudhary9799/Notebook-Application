import React, { useState } from "react";
import "./Register.css";
import {
  Box,
  Container,
  Image,
  Show,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";

const Register = () => {
  const [type, setType] = useState("login");

  const handleClick = () => {
    type === "login" ? setType("signup") : setType("login");
    console.log(type);
  };

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // padding: "100px 0",
        height: "100vh",
      }}
    >
      <Box
        height={"90vh"}
        width={"70%"}
        border={"1px solid black"}
        borderRadius={"15px"}
        sx={{ display: "flex" }}
      >
        <Show breakpoint="(min-width: 700px)">
          <Box width={"50%"} height={"100%"} borderRadius={"15px 0 0 15px"}>
            <Image
              objectFit="cover"
              width={"100%"}
              height={"100%"}
              src="/src/assets/register.jpg"
              borderRadius={"15px 0 0 15px"}
            />
          </Box>
        </Show>
        <Box
          width={"50%"}
          height={"100%"}
          borderRadius={"15px 0 0 15px"}
          sx={{
            display: "flex",
            justifyContent: "center",
            padding: "20px 5px",
          }}
        >
          <Tabs
            position="relative"
            variant="unstyled"
            sx={{ height: "80%", width: "100%" }}
          >
            <TabList
              sx={{
                borderBottom: "1px solid black",
                justifyContent: "center",
                gap: "20px",
                paddingBottom: "10px",
              }}
            >
              <Tab
                className="button"
                sx={{ width: "40%" }}
                onClick={handleClick}
                style={{
                  background: type === "login" ? "purple" : "white",
                  border: type === "login" ? "none" : "1px solid black",
                  color: type === "login" ? "white" : "black",
                }}
              >
                Login
              </Tab>
              <Tab
                className="button"
                sx={{ width: "40%" }}
                onClick={handleClick}
                style={{
                  background: type === "signup" ? "purple" : "white",
                  border: type === "signup" ? "none" : "1px solid black",
                  color: type === "signup" ? "white" : "black",
                }}
              >
                Signup
              </Tab>
            </TabList>
            <TabIndicator
              mt="-1.5px"
              height="2px"
              bg="blue.500"
              borderRadius="1px"
            />
            <TabPanels>
              <TabPanel>
                <Login />
              </TabPanel>
              <TabPanel>
                <Signup />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Box>
    </Container>
  );
};

export default Register;
