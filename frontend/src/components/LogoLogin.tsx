import { Text } from "@chakra-ui/react"

export function LogoLogin() {
  return (
    <Text
      fontSize={["2xl", "8xl"]} 
      fontWeight="bold"
      letterSpacing="tight"
      w="100"
    >
      Studash
      <Text as="span" color="blue.500">.</Text>
    </Text>
  )
}