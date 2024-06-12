import { Box, Container, Flex, Heading, Link, Text, VStack } from "@chakra-ui/react";

const Index = () => {
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
          </Flex>
        </Flex>
      </Box>

      {/* Main Content */}
      <Box as="main" flex="1">
        <VStack spacing={4} align="start">
          <Heading as="h2" size="md">Welcome to My Blog</Heading>
          <Text>This is a placeholder for blog posts. Stay tuned for updates!</Text>
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