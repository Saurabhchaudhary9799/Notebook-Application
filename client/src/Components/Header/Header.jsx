import React from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  ListItem,
  Show,
  Spacer,
  UnorderedList,
} from "@chakra-ui/react";
import "./Header.css";
import { Link } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";
const Header = () => {
  return (
    <Box padding={"5px 20px"}>
      <Flex minWidth="max-content" alignItems="center" gap="4">
        <Box p="2">
          <Flex gap={"20px"}>
            <Heading size="md">NoteBook</Heading>
            <Show breakpoint="(min-width: 700px)">
              <UnorderedList
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "20px",
                  listStyleType: "none",
                }}
              >
                <ListItem className="navbar-list-item">
                  <Link to={"/"}>Home</Link>
                </ListItem>
                <ListItem className="navbar-list-item">
                  <Link to={"/about"}>About</Link>
                </ListItem>
                <ListItem className="navbar-list-item">
                  <Link to={"/notes"}>Notes</Link>
                </ListItem>
                <ListItem className="navbar-list-item">
                  <Link to={"/todos"}>Todos</Link>
                </ListItem>
              </UnorderedList>
            </Show>
          </Flex>
        </Box>
        <Spacer />
        <Box
          sx={{
            width: "200px",
            display: "flex",
            justifyContent: "center",
            padding: "5px 0",
          }}
        >
          <Button
            className="button"
            sx={{ width: "80%", background: "blueviolet", color: "white" }}
          >
            <Link to="/register" style={{ color: "white" }}>
              Get Started{" "}
            </Link>
          </Button>
        </Box>
        <Show breakpoint="(max-width: 700px)">
          <HamburgerIcon />
        </Show>
      </Flex>
    </Box>
  );
};

export default Header;
