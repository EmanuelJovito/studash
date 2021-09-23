import NextLink from "next/link";
import { Box, Button, Flex, Heading, Icon, Link, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { RiAddLine } from "react-icons/ri";
import { format } from "date-fns"

import { Header } from "../../components/Header";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useNotify } from "../../hooks/useNotify";

export default function UserList() {
  const [students, setStudents] = useState([])
  const { notify } = useNotify()

  useEffect(() => {
    async function loadData() {
      try {
        const { data } = await api.get("/users");
        setStudents(data)
      } catch (error) {
        notify({
          title: "Erro ao carregar os alunos.",
          message: error.response?.data.message || error.message,
          type: "error",
        })
      }
    }
     
    loadData()
  }, [])

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal" >
              Alunos
            </Heading>

            <NextLink href="/users/create" passHref>
              <Button 
                as="a" 
                size="sm" 
                fontSize="sm" 
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="20"/>}
              >
                Criar novo
              </Button>
            </NextLink>
          </Flex>
        
          <>
            <Table colorScheme='whiteAlpha'>
              <Thead>
                <Tr>
                  <Th>Usuário</Th>
                  <Th>Data de cadastro</Th>
                  <Th>CPF</Th>
                  <Th>Endereço</Th>
                  <Th>CEP</Th>
                  <Th>Telefone</Th>
                  <Th>Curso</Th>
                </Tr>
              </Thead>
              <Tbody>
                {students.map(student => (
                  <Tr key={student.id}>
                    <Td>
                      <Box>
                        <Link color="purple.400" >
                            <Text fontWeight="bold">{student.student_name}</Text>
                        </Link>
                        <Text fontSize="sm" color="gray.300">{student.student_email}</Text>
                      </Box>
                    </Td>
                    <Td>{format(new Date(student.created_at), "dd/MM/yyyy")}</Td>
                    <Td>{student.student_CPF}</Td>
                    <Td>{student.student_address}</Td>
                    <Td>{student.student_CEP}</Td>
                    <Td>{student.student_number}</Td>
                    <Td>{student.course_id}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </>
        </Box>
      </Flex>
    </Box>
  )
}
