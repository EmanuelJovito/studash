import { Button, Flex, Grid, Icon, Stack, Text } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form"
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"
import { useRouter } from 'next/router'

import { Input } from "../components/Form/Input";
import { LogoLogin } from "../components/LogoLogin";
import { useEffect } from "react";

type SignInFormData = {
  email: string
  password: string
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup.string().required("Senha obrigatória"),
})

export default function SignIn() {
  const router = useRouter()

  // const { register, handleSubmit, formState } = useForm({
  //   resolver: yupResolver(signInFormSchema)
  // })

  // const { errors } = formState

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000))

    console.log(values)
  }

  return (
    <Flex 
    w="100vw" 
    h="100vh" 
    align='center' 
    justify='center'
    >
      <Grid gridTemplateColumns='repeat(2, 1fr)' columnGap="5rem">
      <Flex flexDirection="column" justify="center">
        <LogoLogin />
        <Text fontSize="2rem" width="24rem" ml="0.5rem" color="gray.400">
          Gerencie seus alunos de maneira fácil e pratica. 
        </Text>
      </Flex>
      <Flex
        as='form'
        width='100%'
        maxWidth={400}
        bg="gray.800"
        p='8'
        borderRadius={8}
        flexDir="column"
        // onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="2">
          <Input 
            name="email" 
            type="email" 
            placeholder="E-mail"
          />
          <Input 
            name="password" 
            type="password" 
            placeholder="Senha"
          />
        </Stack>

        <Button 
          type="submit" 
          mt="6" 
          colorScheme="blue" 
          size="lg"
          // isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>

        <Flex mt="1rem" flexDirection="column" align="center">
        </Flex>
      </Flex>
      </Grid>
    </Flex>
  )
}