import { Circle, HStack } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { BiPencil } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedCategory } from "../../redux/reducers/globalReducer";

export default function CategoryOptions({onOpen, category}) {
    const { isEditMode } = useSelector(state => state.general)
    const MotionStack = motion(HStack)
    const dispatch = useDispatch()

    const edit = () => {
        dispatch(setSelectedCategory(category))
        onOpen()
    }
    
  return (
    <AnimatePresence>
        {isEditMode && 
        <MotionStack
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0}}
          exit={{ opacity: 0, y: 8 }}
          justify={'space-evenly'} 
          color={'white'}
          pos={'absolute'} 
          top={-8}
          left={0} 
          px={4}
          py={2}
          w={'full'} >
            <Circle 
                onClick={edit}
                as={'button'}
                bg={'white'}
                size={10}
                shadow={'dark-lg'}
                color={'teal.500'}>
              <BiPencil size={'24px'} />
            </Circle>
        </MotionStack>}
      </AnimatePresence>
  )
}
