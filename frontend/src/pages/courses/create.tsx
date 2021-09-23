import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { api } from "../../services/api";

type CreateUserFormData = {
  name: string
  email: string
  password: string
}

export default function CreateUser() {
  const router = useRouter()
  const [fields, setFields] = useState({
    course: '',
    workload: ''
  })

  function handleInputChange(event) {
    fields[event.target.name] = event.target.value 
    setFields(fields)
  }

  function handleFormSubmit(event) {
    api.post('/courses', fields)  

    router.push('/courses')
  }

  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Box
          as="form" 
          flex="1" 
          borderRadius={8} 
          bg="gray.800" 
          p={["6", "8"]}
          onSubmit={handleFormSubmit}
        >
          <Heading size="lg" fontWeight="normal">Criar curso</Heading>

          <Divider my="6" borderColor="gray.700"/>

          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input 
                label="Nome do curso"
                name="course" 
                onChange={handleInputChange}
              />
              <Input 
                label="Carga horaria"
                name="workload" 
                onChange={handleInputChange}
              />
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/courses" passHref>
                <Button as="a" colorScheme="whiteAlpha">Cancelar</Button>
              </Link>
              <Button 
                type="submit" 
                colorScheme="blue"
              >
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}

function notify(arg0: { title: string; message: any; type: string; }) {
  throw new Error("Function not implemented.");
}
