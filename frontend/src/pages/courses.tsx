import { Flex, SimpleGrid } from "@chakra-ui/react";

import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar"

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
          
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}
