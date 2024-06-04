import { ChakraProvider, Container, Text, VStack, Box, Heading, Link, HStack, IconButton, Image } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { BrowserRouter as Router, Route, Routes, Link as RouterLink } from "react-router-dom";

const Home = () => (
  <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
    <VStack spacing={4}>
      <Heading as="h1" size="2xl" color="purple.700">
        Deborah's Holistic Therapies
      </Heading>
      <Text fontSize="lg">Welcome to a place of healing and relaxation.</Text>
      <HStack spacing={4}>
        <Link as={RouterLink} to="/reflexology" color="purple.500">
          Reflexology
        </Link>
        <Link as={RouterLink} to="/reiki" color="purple.500">
          Reiki
        </Link>
        <Link as={RouterLink} to="/healing" color="purple.500">
          Healing
        </Link>
      </HStack>
      <HStack spacing={4} mt={4}>
        <IconButton aria-label="Facebook" icon={<FaFacebook />} size="lg" colorScheme="purple" />
        <IconButton aria-label="Instagram" icon={<FaInstagram />} size="lg" colorScheme="purple" />
        <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" colorScheme="purple" />
      </HStack>
    </VStack>
  </Container>
);

const Reflexology = () => (
  <Container centerContent maxW="container.md" py={8}>
    <VStack spacing={4}>
      <Heading as="h2" size="xl" color="purple.700">
        Reflexology
      </Heading>
      <Image src="https://images.unsplash.com/photo-1542848284-8afa78a08ccb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyZWZsZXhvbG9neSUyMHRoZXJhcHl8ZW58MHx8fHwxNzE3NDk1ODA1fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Reflexology" />
      <Text fontSize="md">Reflexology is a type of massage that involves applying different amounts of pressure to the feet, hands, and ears. It's based on a theory that these body parts are connected to certain organs and body systems.</Text>
      <Link as={RouterLink} to="/" color="purple.500">
        Back to Home
      </Link>
    </VStack>
  </Container>
);

const Reiki = () => (
  <Container centerContent maxW="container.md" py={8}>
    <VStack spacing={4}>
      <Heading as="h2" size="xl" color="purple.700">
        Reiki
      </Heading>
      <Image src="https://images.unsplash.com/photo-1619234103666-54785fa47540?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyZWlraSUyMHRoZXJhcHl8ZW58MHx8fHwxNzE3NDk1ODA1fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Reiki" />
      <Text fontSize="md">Reiki is a form of energy healing that originated in Japan. It involves the transfer of energy by laying on hands and can help reduce stress and promote relaxation and healing.</Text>
      <Link as={RouterLink} to="/" color="purple.500">
        Back to Home
      </Link>
    </VStack>
  </Container>
);

const Healing = () => (
  <Container centerContent maxW="container.md" py={8}>
    <VStack spacing={4}>
      <Heading as="h2" size="xl" color="purple.700">
        Healing
      </Heading>
      <Image src="https://images.unsplash.com/photo-1483691278019-cb7253bee49f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxoZWFsaW5nJTIwdGhlcmFweXxlbnwwfHx8fDE3MTc0OTU4MDZ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Healing" />
      <Text fontSize="md">Holistic healing is a form of healing that considers the whole person -- body, mind, spirit, and emotions -- in the quest for optimal health and wellness.</Text>
      <Link as={RouterLink} to="/" color="purple.500">
        Back to Home
      </Link>
    </VStack>
  </Container>
);

const Index = () => {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reflexology" element={<Reflexology />} />
          <Route path="/reiki" element={<Reiki />} />
          <Route path="/healing" element={<Healing />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
};

export default Index;
