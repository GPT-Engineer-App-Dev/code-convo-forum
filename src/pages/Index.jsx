import { Box, Container, Flex, Heading, HStack, Link, Text, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading size="md">Tech Forum</Heading>
        <HStack spacing={4}>
          <Link as={RouterLink} to="/" _hover={{ textDecoration: "none", color: "gray.400" }}>Home</Link>
          <Link as={RouterLink} to="/categories" _hover={{ textDecoration: "none", color: "gray.400" }}>Categories</Link>
          <Link as={RouterLink} to="/profile" _hover={{ textDecoration: "none", color: "gray.400" }}>My Profile</Link>
          <Link as={RouterLink} to="/login" _hover={{ textDecoration: "none", color: "gray.400" }}>Login</Link>
          <Link as={RouterLink} to="/register" _hover={{ textDecoration: "none", color: "gray.400" }}>Register</Link>
          <Link as={RouterLink} to="/create-post" _hover={{ textDecoration: "none", color: "gray.400" }}>Create Post</Link>
        </HStack>
      </Flex>

      {/* Main Content */}
      <Flex mt={4} direction={{ base: "column", md: "row" }}>

        {/* Sidebar */}
        <Box flex="1" bg="gray.100" p={4} borderRadius="md" mr={{ md: 4 }} mb={{ base: 4, md: 0 }}>
          <Heading size="md" mb={4}>Categories</Heading>
          <VStack align="start" spacing={2}>
            <Link as={RouterLink} to="/category/programming" _hover={{ textDecoration: "none", color: "gray.600" }}>Programming</Link>
            <Link as={RouterLink} to="/category/hardware" _hover={{ textDecoration: "none", color: "gray.600" }}>Hardware</Link>
            <Link as={RouterLink} to="/category/software" _hover={{ textDecoration: "none", color: "gray.600" }}>Software</Link>
            <Link as={RouterLink} to="/category/networking" _hover={{ textDecoration: "none", color: "gray.600" }}>Networking</Link>
          </VStack>

          <Heading size="md" mt={8} mb={4}>Recent Posts</Heading>
          <VStack align="start" spacing={2}>
            <Link as={RouterLink} to="/post/1" _hover={{ textDecoration: "none", color: "gray.600" }}>How to learn React?</Link>
            <Link as={RouterLink} to="/post/2" _hover={{ textDecoration: "none", color: "gray.600" }}>Best programming languages in 2023</Link>
            <Link as={RouterLink} to="/post/3" _hover={{ textDecoration: "none", color: "gray.600" }}>Understanding computer networks</Link>
          </VStack>
        </Box>

        {/* Discussion Threads */}
        <Box flex="3" bg="white" p={4} borderRadius="md" boxShadow="md">
          <Heading size="md" mb={4}>Discussion Threads</Heading>
          <VStack align="start" spacing={4}>
            <Box p={4} bg="gray.50" borderRadius="md" w="full">
              <Text fontSize="lg" fontWeight="bold">How to learn React?</Text>
              <Text fontSize="sm" color="gray.500">by John Doe - 2 hours ago</Text>
            </Box>
            <Box p={4} bg="gray.50" borderRadius="md" w="full">
              <Text fontSize="lg" fontWeight="bold">Best programming languages in 2023</Text>
              <Text fontSize="sm" color="gray.500">by Jane Smith - 5 hours ago</Text>
            </Box>
            <Box p={4} bg="gray.50" borderRadius="md" w="full">
              <Text fontSize="lg" fontWeight="bold">Understanding computer networks</Text>
              <Text fontSize="sm" color="gray.500">by Alice Johnson - 1 day ago</Text>
            </Box>
          </VStack>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;