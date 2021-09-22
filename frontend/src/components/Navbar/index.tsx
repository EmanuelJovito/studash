import { HStack } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine } from "react-icons/ri";
import { NavLink } from "./NavLink";

export function Navbar() {
  return ( 
    <HStack spacing="12" >
      <NavLink icon={RiDashboardLine} href="/dashboard">Dashboard</NavLink>
      <NavLink icon={RiContactsLine} href="/users">Alunos</NavLink>
    </HStack>
  )
}