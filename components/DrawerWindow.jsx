import { Box, Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Image, useDisclosure, VStack } from "@chakra-ui/react"
import { HiMenuAlt2 } from "react-icons/hi"
import MenuItem from "./MenuItem"

export default function DrawerWindow() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
    <Box 
        as="button"
        onClick={onOpen}>
        <HiMenuAlt2 size={24}/>
    </Box>
    <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>Fighting Bebita !!</DrawerHeader>

          <DrawerBody>
              <VStack spacing={4} pt={10}>
                  <MenuItem path={'/vocab'} page={'Vocabulario'} onClose={onClose} />
                  <MenuItem path={'/adject'} page={'Adjectivos'} onClose={onClose} />
                  <MenuItem path={'/conjug'} page={'Conjugacion'} onClose={onClose} />
              </VStack>
          </DrawerBody>
          <DrawerFooter justifyContent={'center'} >
              <Image src="/darijaIcon.png" alt="logo" w={20} h={20} />
          </DrawerFooter>

        </DrawerContent>
      </Drawer>
    </>
  )
}
