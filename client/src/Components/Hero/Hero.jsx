import { Box, Button, Container, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <Container
      sx={{
        height: "80vh",
        // width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        // lineHeight: "2",
        gap: "10px",
        padding: "0 20px",
        backgroundImage: "url('/src/assets/background.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "cover",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "3vw",
          fontWeight: "700",
        }}
      >
        <Text as={"h1"}>Connect Everything.</Text>
        <Text as={"h1"}>Build Anything.</Text>
      </Box>
      <Text sx={{ fontSize: "20px", fontWeight: "500" }}>
        Schedule Your Day and Keep watch on Everything
      </Text>
      <Button
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "200px",
          padding: "10px 30px",
          background: "blueviolet",
          border: "none",
          outline: "none",
          borderRadius: "10px",
          fontSize: "20px",
          fontWeight: "600",
        }}
      >
        <Link to={"/register"} style={{ color: "white" }}>
          Get Started
        </Link>
      </Button>
    </Container>
  );
};

export default Hero;
