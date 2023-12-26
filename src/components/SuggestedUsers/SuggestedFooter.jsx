import { Box, Link } from "@chakra-ui/react";

function SuggestedFooter() {
  return (
    <Box alignSelf={"start"} fontSize={12} color={"gray.500"} mt={5}>
      © 2023 Built By{" "}
      <Link href="https://github.com/crav99" target="_blank" color={"blue.500"}>
        Allan Vargas
      </Link>
    </Box>
  );
}

export default SuggestedFooter;
