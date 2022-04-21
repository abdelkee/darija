import { Alert, AlertDescription, AlertIcon, AlertTitle, CloseButton } from "@chakra-ui/react";

export default function AlertBox() {
  return (
    <Alert status='error' zIndex={10}>
        <AlertIcon />
        <AlertTitle mr={2}>Algo esta mal ':(' </AlertTitle>
        <AlertDescription>Intenta de nuevo</AlertDescription>
        <CloseButton position='absolute' right='8px' top='8px' />
    </Alert>
  )
}
