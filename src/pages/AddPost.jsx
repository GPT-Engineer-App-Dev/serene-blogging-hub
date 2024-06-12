import { useState } from "react";
import { Box, Button, Container, Flex, FormControl, FormLabel, Heading, Input, Textarea, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = { title, content };
    const existingPosts = JSON.parse(localStorage.getItem("posts")) || [];
    localStorage.setItem("posts", JSON.stringify([...existingPosts, newPost]));
    navigate("/");
  };

  return (
    <Container maxW="container.md">
      <Box as="header" bg="brand.800" color="white" py={4} mb={8}>
        <Flex justify="space-between" align="center">
          <Heading as="h1" size="lg">Add New Post</Heading>
        </Flex>
      </Box>
      <Box as="main">
        <form onSubmit={handleSubmit}>
          <VStack spacing={4} align="start">
            <FormControl id="title" isRequired>
              <FormLabel>Title</FormLabel>
              <Input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </FormControl>
            <FormControl id="content" isRequired>
              <FormLabel>Content</FormLabel>
              <Textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </FormControl>
            <Button type="submit" colorScheme="blue">Add Post</Button>
          </VStack>
        </form>
      </Box>
    </Container>
  );
};

export default AddPost;