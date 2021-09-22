import NextLink from "next/link";
import { Box, Button, Flex, Heading, Icon, Link, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { RiAddLine } from "react-icons/ri";
import { format } from "date-fns"

import { Header } from "../../components/Header";
import { useEffect, useState } from "react";
import axios from "axios";

export default function UserList() {
  const [students, setStudents] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3001/users').then(response => {
      const data = response.data
      
      setStudents(data)
    })
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
                {students.map(studentsInfo => (
                <Tr>
                  <Td>
                    <Box>
                      <Link color="purple.400" >
                          <Text fontWeight="bold">{studentsInfo.student_name}</Text>
                      </Link>
                      <Text fontSize="sm" color="gray.300">{studentsInfo.student_email}</Text>
                    </Box>
                  </Td>
                  <Td>{format(new Date(studentsInfo.created_at), "dd/MM/yyyy")}</Td>
                  <Td>{studentsInfo.student_CPF}</Td>
                  <Td>{studentsInfo.student_address}</Td>
                  <Td>{studentsInfo.student_CEP}</Td>
                  <Td>{studentsInfo.student_number}</Td>
                  <Td>{studentsInfo.course_id}</Td>
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
