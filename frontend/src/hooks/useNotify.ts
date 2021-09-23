import { useToast } from "@chakra-ui/react"

type UseNotifyProps = {
  type: "error" | "info" | "warning" | "success"
  message: string
  title: string
}

export function useNotify() {
  const toast = useToast()

  
  function notify({message, title, type}: UseNotifyProps) {
    toast({
      title: title,
      description: message,
      status: type,
      position: "top-right",
      duration: 9000,
      isClosable: true,
    }) 
  }

  return {notify}
}