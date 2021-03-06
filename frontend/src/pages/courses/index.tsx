import NextLink from "next/link";
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
  Button,
  Icon,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { format } from "date-fns";

import { Header } from "../../components/Header";
import { api } from "../../services/api";
import { useNotify } from "../../hooks/useNotify";
import { RiAddLine } from "react-icons/ri";
import { FiEdit2, FiX } from "react-icons/fi";
import { useRouter } from "next/router";

export default function Dashboard() {
  const Router = useRouter()
  const [courses, setCourses] = useState([]);
  const { notify } = useNotify();

  useEffect(() => {
    async function loadData() {
      try {
        const { data } = await api.get("/courses");
        setCourses(data);
      } catch (error) {
        notify({
          title: "Erro ao carregar cursos.",
          message: error.response?.data.message || error.message,
          type: "error",
        });
      }
    }

    loadData();
  }, [courses, setCourses]);

  async function handleDeleteCourse(id: string) {
    try {
      await api.delete("/courses/" + id)
      notify({
        title: "Curso deletado com sucesso.",
        message: "Success",
        type: "success",
      });
    } catch (error) {
      notify({
        title: "Erro ao deletar curso.",
        message: error.response?.data.message || error.message,
        type: "error",
      });
    }
  }

  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Cursos
            </Heading>

            <NextLink href="/courses/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="blue"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Criar novo
              </Button>
            </NextLink>
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
                    <Th>Data de cria????o</Th>
                    <Th>Carga horaria</Th>
                    <Th></Th>
                    <Th></Th>
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
                      <Td maxWidth="10">
                        <Button colorScheme="blue" onClick={() => Router.push(`/courses/${course.id}`)}>
                          <Icon as={FiEdit2} />
                        </Button>
                      </Td>
                      <Td maxWidth="10">
                        <Button
                          colorScheme="red"
                          onClick={() => handleDeleteCourse(course.id)}
                        >
                          <Icon as={FiX} />
                        </Button>
                      </Td>
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
