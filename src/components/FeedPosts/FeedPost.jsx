import { Box, Image } from "@chakra-ui/react";
import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";

function FeedPost({ username, img, avatar }) {
  return (
    <>
      <PostHeader username={username} img={avatar} />
      <Box my={2}>
        <Image src={img} alt="user profile pic" borderRadius={4} overflow={"hidden"} />
      </Box>
      <PostFooter username={username} />
    </>
  );
}

export default FeedPost;
