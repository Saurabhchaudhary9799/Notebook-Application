import React from "react";
import { Box, Image, Text, VStack } from "@chakra-ui/react";
import "./Benefits.css";
const Benefits = () => {
  return (
    <>
      <VStack margin={"20px 0"} gap={"20px"}>
        <Text as={"h1"} fontSize={"3vw"}>
          The Benefits Of Note Making
        </Text>
        <Box className="Benefit-box ">
          <Image
            className="Benefit-box-left"
            borderRadius={"10px"}
            border={"none"}
            outline={"none"}
            src="/src/assets/productivity.jpg"
            maxWidth={"400px"}
            maxHeight={"400px"}
          />

          <Text
            className="Benefit-box-right"
            fontSize={"20px"}
            fontWeight={"500 "}
          >
            Note making allow you to quickly capture and organize your thoughts,
            ideas, and tasks, helping you stay on top of your workload and be
            more productive. With the ability to set reminders and create to-do
            lists, note making can also help you prioritize your tasks and stay
            focused on what’s important.
          </Text>
        </Box>
        <Box className="Benefit-box reverse">
          <Text
            className="Benefit-box-left"
            fontSize={"20px"}
            fontWeight={"500 "}
          >
            Some note making allow you to add photos, videos, and other
            multimedia content to your notes, making it easier to capture and
            share information. This can be especially helpful if you need to
            include visual aids in your notes or want to capture information in
            a more immersive way.
          </Text>
          <Image
            className="Benefit-box-right"
            borderRadius={"10px"}
            border={"none"}
            outline={"none"}
            src="/src/assets/multimedia.jpg"
            maxWidth={"400px"}
            maxHeight={"400px"}
          />
        </Box>
        <Box className="Benefit-box ">
          <Image
            className="Benefit-box-left"
            borderRadius={"10px"}
            border={"none"}
            outline={"none"}
            src="/src/assets/accessibility.jpg"
            maxWidth={"400px"}
            maxHeight={"400px"}
          />

          <Text
            className="Benefit-box-right"
            fontSize={"20px"}
            fontWeight={"500 "}
          >
            With note taking apps, you can access your notes from anywhere, as
            long as you have an internet connection. This can be especially
            helpful if you work remotely or need to access your notes on-the-go.
          </Text>
        </Box>
      </VStack>
    </>
  );
};

export default Benefits;
