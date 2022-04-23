import { Center } from "@chakra-ui/react";
import { HiPlus } from "react-icons/hi";
import { colors } from "../../utils/theme";

export default function AddNewButton({onOpen}) {
  return ( 
      <Center 
        width={'100%'}
        key='addNew'
        as="button"
        bgColor={colors.shade} 
        paddingY={4} 
        paddingX={4}
        color={colors.shade2}
        border={'1px'}
        borderStyle='dashed'
        borderColor={colors.shade2}
        borderRadius={'md'}
        onClick={onOpen}>
          <HiPlus size={24}/>
      </Center>
  )
}
