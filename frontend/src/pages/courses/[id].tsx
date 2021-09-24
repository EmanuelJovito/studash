import { Box, Button, Divider, Flex, Heading, HStack, IdProvider, SimpleGrid, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FormEvent, useEffect, useState } from "react";

import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { useNotify } from "../../hooks/useNotify";
import { api } from "../../services/api";

export default function UpdateCourse() {
  const [course, setCourse] = useState([])
  const router = useRouter()
  const { notify } = useNotify();
  const { id } = router.query
  
  const [fields, setFields] = useState({
    course: '',
    workload: ''
  })

  useEffect(() => {
    async () => {
      try {
        const { data } = await api.get(`/courses/${id}`);

        setCourse(data);
      } catch (error) {
        notify({
          title: "Erro ao carregar informações do curso.",
          message: error.response?.data.message || error.message,
          type: "error",
        });
      }
    }
  }, [course])

  console.log(id)

  function handleInputChange(event) {
    fields[event.target.name] = event.target.value 
    setFields(fields)
  }

  async function handleFormSubmit(event: FormEvent) {
    event.preventDefault()

    try {
      await api.put(`/courses/${id}`, fields)  
      
      router.push('/courses')
    } catch (error) {
      notify({
        title: "Erro ao atualizar curso.",
        message: error.response?.data.message || error.message,
        type: "error",
      });
    }
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
          <Heading size="lg" fontWeight="normal">Alterar informações do curso</Heading>

          <Divider my="6" borderColor="gray.700"/>

          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input 
                label="Nome do curso"
                name="course"
                value={fields.course}
                onChange={handleInputChange}
              />
              <Input 
                label="Carga horaria"
                name="workload" 
                value={fields.workload}
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