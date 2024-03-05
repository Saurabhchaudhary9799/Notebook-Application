import {
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import "./Login.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <VStack gap={"20px"} padding={"20px 0"}>
        <FormControl isRequired gap={"10px"}>
          <FormLabel sx={{ fontsize: "20px", fontWeight: "700" }}>
            Email Address
          </FormLabel>
          <Input
            className="inputDetails"
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              
            }}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel sx={{ fontsize: "20px", fontWeight: "700" }}>
            Password
          </FormLabel>
          <Input
            className="inputDetails"
            type="password"
            placeholder="Your Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
          
            }}
          />
        </FormControl>
        <Button className="login-button"> Login</Button>
      </VStack>
    </>
  );
};

export default Login;
