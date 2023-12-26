import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import SuggestedUser from "./SuggestedUser";
import SuggestedHeader from "./SuggestedHeader";
import SuggestedFooter from "./SuggestedFooter";

function SuggestedUsers() {
  return (
    <VStack py={8} px={6} gap={4}>
      <SuggestedHeader />
      <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
        <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
          Suggested for you
        </Text>
        <Text fontSize={12} fontWeight={"bold"} _hover={{ color: "gray.400" }} cursor={"pointer"}>
          See all
        </Text>
      </Flex>
      <SuggestedUser name="Dan Abrahmov" followers={1392} avatar="https://bit.ly/dan-abramov" />
      <SuggestedUser name="Ryan Florence" followers={1392} avatar="https://bit.ly/ryan-florence" />
      <SuggestedUser name="Christian Nwamba" followers={1392} avatar="https://bit.ly/code-beast" />

      <SuggestedFooter />
    </VStack>
  );
}

export default SuggestedUsers;
