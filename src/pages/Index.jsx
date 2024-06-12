import { Box, Container, Flex, Heading, Link, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Index = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(storedPosts);
  }, []);

  return (
    <Container maxW="container.xl">
      {/* Header */}
      <Box as="header" bg="brand.800" color="white" py={4} mb={8}>
        <Flex justify="space-between" align="center">
          <Heading as="h1" size="lg">My Personal Blog</Heading>
          <Flex>
            <Link href="/" mx={2} color="white">Home</Link>
            <Link href="/about" mx={2} color="white">About</Link>
            <Link href="/blog" mx={2} color="white">Blog</Link>
            <Link href="/add-post" mx={2} color="white">Add Post</Link>
          </Flex>
        </Flex>
      </Box>

      {/* Main Content */}
      <Box as="main" flex="1">
        <VStack spacing={4} align="start">
          <Heading as="h2" size="md">Welcome to My Blog</Heading>
          {posts.length === 0 ? (
            <Text>No blog posts yet. Be the first to add one!</Text>
          ) : (
            posts.map((post, index) => (
              <Box key={index} p={4} borderWidth="1px" borderRadius="md" w="100%">
                <Heading as="h3" size="md">{post.title}</Heading>
                <Text mt={2}>{post.content}</Text>
              </Box>
            ))
          )}
        </VStack>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="brand.900" color="white" py={4} mt={8}>
        <Text textAlign="center">© 2023 My Personal Blog. All rights reserved.</Text>
      </Box>
    </Container>
  );
};

export default Index;