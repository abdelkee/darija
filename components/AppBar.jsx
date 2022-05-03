import { Box, Heading, HStack } from "@chakra-ui/react";
import { HiMenuAlt2, HiOutlineSearch } from 'react-icons/hi'
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

import SearchBar from "../components/Vocab/SearchBar";
import { setSearchBarOpen } from "../redux/reducers/globalReducer";
import { colors } from "../utils/theme";
import EditButton from "./Vocab/EditButton";

export default function AppBar() {
  const router = useRouter()
  const dispatch = useDispatch()
  const { appBarHeading } = useSelector(state => state.general)

  return (
    <Box
      bgGradient={`linear(to-r, ${colors.primary}, ${colors.secondary})`} 
      color={colors.text2}
      width={{base: "100%", "sm": "60ch"}}
      height={"14"}
      pos={"fixed"}
      top={0}
      px={4}
      left={'50%'}
      transform={'translateX(-50%)'}
      zIndex={2}
      shadow='md'>
        <HStack justify='space-between' height={'inherit'}>
              <Heading 
                as={'button'}
                size={'lg'}
                onClick={() => router.push('/')}
                >
                  {appBarHeading}
              </Heading>
              <HStack spacing={4}>
                <Box
                  onClick={() => dispatch(setSearchBarOpen(true))}
                  as="button">
                    <HiOutlineSearch size={24}/>
                </Box>
                <Box as="button">
                    <HiMenuAlt2 size={24}/>
                </Box>
              </HStack>
        </HStack>
        <SearchBar/>
        {/* {appBarHeading === 'Vocabulario' && <EditButton/>} */}
        <EditButton/>
    </Box>
  )
}
