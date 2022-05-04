import { Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";
import { HiOutlineChevronRight } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { AnimatePresence, motion } from 'framer-motion';

import { setKeywordSearched, setSearchBarOpen } from "../../redux/reducers/vocabReducer";
import { colors } from "../../utils/theme";

const MotionInputGroup = motion(InputGroup)

export default function SearchBar() {

  const dispatch = useDispatch();
  const { isSearchBarOpen } = useSelector(state => state.vocabSlice)


  return (
    <AnimatePresence>
      {isSearchBarOpen && 
      <MotionInputGroup
          initial={{ opacity: 0, x: '150%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '150%' }}
          transition={{type: 'easInOut', duration: 0.2}}
          pos={'absolute'} 
          bottom={0} 
          right={0} 
          width={'100%'} 
          bgColor={'white'} 
          color={colors.text1}>
              <InputLeftAddon
                  onClick={() => dispatch(setSearchBarOpen(false))}
                  as={'button'}
                  rounded={'none'}
                  bgColor={colors.shade}>
                    <HiOutlineChevronRight size={24}/>
              </InputLeftAddon>
              <Input 
                  onChange={(e) => dispatch(setKeywordSearched(e.target.value.toLowerCase()))}
                  autoFocus={true}
                  bgColor={'white'}
                  rounded={'none'}
                  type='search' 
                  placeholder='Q busca mi bebe?'
                  _focus={false} />
      </MotionInputGroup>}
    </AnimatePresence>
  )
}
