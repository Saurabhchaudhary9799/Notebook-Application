import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { ViewIcon } from "@chakra-ui/icons";

import "./Signup.css";
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [view, setView] = useState("show");
  const [view1, setView1] = useState("show1");
  const handleView = () => {
    view === "show" ? setView("hide") : setView("show");
    view === "show1" ? setView("hide1") : setView("show1");
  };
  return (
    <>
      <VStack gap={"20px"} padding={"20px 0"}>
        <FormControl isRequired gap={"10px"}>
          <FormLabel sx={{ fontsize: "20px", fontWeight: "700" }}>
            Your Name
          </FormLabel>
          <Input
            className="inputDetails"
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormControl>
        <FormControl isRequired gap={"10px"}>
          <FormLabel sx={{ fontsize: "20px", fontWeight: "700" }}>
            Email Address
          </FormLabel>
          <Input
            className="inputDetails"
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel sx={{ fontsize: "20px", fontWeight: "700" }}>
            Password
          </FormLabel>
          <InputGroup>
            <Input
              className="inputDetails"
              type={view === "show" ? "text" : "password"}
              placeholder="Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <InputRightElement>
              <Button className="show-hide" onClick={handleView}>
                {view === "show" ? "show" : "hide"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <FormControl isRequired>
          <FormLabel sx={{ fontsize: "20px", fontWeight: "700" }}>
            Confirm Password
          </FormLabel>
          <InputGroup>
            <Input
              className="inputDetails"
              type={view === "show1" ? "text" : "password"}
              placeholder="Your Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <InputRightElement>
              <Button className="show-hide" onClick={handleView}>
                {view === "show1" ? "show" : "hide"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>

        <Button className="signup-button"> Signup</Button>
      </VStack>
    </>
  );
};

export default Signup;
