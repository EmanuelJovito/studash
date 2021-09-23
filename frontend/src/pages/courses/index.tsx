import {
  Flex,
  SimpleGrid,
  Box,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Text,
  Link,
  Heading,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { format } from "date-fns";

import { Header } from "../../components/Header";
import { api } from "../../services/api";
import { useNotify } from "../../hooks/useNotify";

export default function Dashboard() {
  const [courses, setCourses] = useState([]);
  const { notify } = useNotify()

  useEffect(() => {
    async function loadData() {
      try {
        const { data } = await api.get("/courses");
        setCourses(data)
      } catch (error) {
        notify({
          title: "Erro ao carregar cursos.",
          message: error.response?.data.message || error.message,
          type: "error",
        })
      }
    }
     
    loadData()
  }, []);

  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Cursos
            </Heading>
          </Flex>

          <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
            <SimpleGrid
              flex="1"
              gap="4"
              minChildWidth="320px"
              align="flex-start"
            >
              <Table colorScheme="whiteAlpha">
                <Thead>
                  <Tr>
                    <Th>Id</Th>
                    <Th>Curso</Th>
                    <Th>Data de criação</Th>
                    <Th>Carga horaria</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {courses?.map((course) => (
                    <Tr key={course.id}>
                      <Td>{course.id}</Td>
                      <Td>
                        <Box>
                          <Link color="purple.400">
                            <Text fontWeight="bold">{course.course}</Text>
                          </Link>
                        </Box>
                      </Td>
                      <Td>
                        {format(new Date(course.created_at), "dd/MM/yyyy")}
                      </Td>
                      <Td>{course.workload}</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </SimpleGrid>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
}
