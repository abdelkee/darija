import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Box, SimpleGrid, Spinner, useDisclosure } from "@chakra-ui/react";

import CategoryForm from "../components/Vocab/CategoryForm";
import { setAppBarHeading, setItemToMutate } from "../redux/reducers/globalReducer";
import { useQuery } from "@apollo/client";
import { GET_VOCAB_CATEGORIES } from "../graphql/queries";
import FAB from "./Vocab/FAB";
import DataFiltered from "./DataFiltered";


export default function Body() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const dispatch = useDispatch()
  const { loading, error, data } = useQuery(GET_VOCAB_CATEGORIES)
  useEffect(() => {
    dispatch(setAppBarHeading('Vocabulario'))
  }, [dispatch])

  useEffect(() => {
    if (!isOpen) {
      dispatch(setItemToMutate(null))
    }
  }, [dispatch, isOpen])

  return (
    <Box
        pt={20} 
        minH='100vh'
        width='100%' 
        >
            {loading ?
              <Spinner size={"xl"}/>
              :
              <SimpleGrid columns={2} spacingY={10} spacingX={6} pt={14} pb={24} alignItems={'center'} >
                  <DataFiltered data={data.categories} onOpen={onOpen} />
                  <FAB onOpen={onOpen}/>
              </SimpleGrid>}
            <CategoryForm isOpen={isOpen} onClose={onClose} />
    </Box>
  )
}