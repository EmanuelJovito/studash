import { HStack } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine } from "react-icons/ri";
import { NavLink } from "./NavLink";

export function Navbar() {
  return ( 
    <HStack spacing="12" >
      <NavLink icon={RiContactsLine} href="/users">Alunos</NavLink>
      <NavLink icon={RiDashboardLine} href="/courses">Cursos</NavLink>
    </HStack>
  )
}