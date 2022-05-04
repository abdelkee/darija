import { Circle } from "@chakra-ui/react";
import { BiPencil, BiX } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { setIsEditMode } from "../../redux/reducers/vocabReducer";
import { colors } from "../../utils/theme";

export default function EditButton() {
    const dispatch = useDispatch()
    const { isEditMode } = useSelector(state => state.vocabSlice)
  return (
    <Circle
        onClick={() => dispatch(setIsEditMode())} 
        pos={'absolute'}
        as={'button'}
        right={4} 
        top={16} 
        bg={'white'} 
        color={colors.primary} 
        p={2} 
        zIndex={2}
        shadow={'md'}>
          {isEditMode ? <BiX size={'24px'} /> : <BiPencil size={'24px'} />}
    </Circle>
  )
}
