import { Circle, HStack } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { BiPencil, BiTrashAlt } from "react-icons/bi";
import { useSelector } from "react-redux";

export default function CategoryOptions() {
    const { isEditMode } = useSelector(state => state.general)
    const MotionStack = motion(HStack)
  return (
    <AnimatePresence>
        {isEditMode && 
        <MotionStack
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0}}
          exit={{ opacity: 0, y: 8 }}
          justify={'space-between'} 
          color={'white'} 
          pos={'absolute'} 
          top={-8} 
          px={4}
          py={2}
          w={'full'} >
            <Circle 
                onClick={() => console.log('edit')}
                as={'button'} 
                bg={'white'} 
                size={10} 
                shadow={'dark-lg'} 
                color={'teal.500'}>
              <BiPencil size={'24px'} />
            </Circle>
            <Circle 
                onClick={() => console.log('delete')}
                as={'button'} 
                bg={'white'} 
                size={10} 
                shadow={'dark-lg'} 
                color={'red.500'}>
              <BiTrashAlt size={'24px'} />
            </Circle>
        </MotionStack>}
      </AnimatePresence>
  )
}
