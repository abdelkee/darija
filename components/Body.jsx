import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Center, Container, SimpleGrid, Spinner, useDisclosure } from "@chakra-ui/react";

import Category from "../components/Vocab/Category";
import CategoryForm from "../components/Vocab/CategoryForm";
import { setAppBarHeading } from "../redux/reducers/globalReducer";
import { useQuery } from "@apollo/client";
import { GET_VOCAB_CATEGORIES } from "../graphql/queries";
import FAB from "./Vocab/FAB";


export default function Body() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const dispatch = useDispatch()
  const { loading, error, data } = useQuery(GET_VOCAB_CATEGORIES)

  useEffect(() => {
    dispatch(setAppBarHeading('Vocabulario'))
  }, [dispatch])

  return (
    <Container 
        pt={20} 
        height='inherit' 
        width='inherit' 
        pos={'relative'}
        >
            <Center>
              {loading ? 
              <Spinner size={"xl"}/>
              :
              <SimpleGrid columns={2} spacingY={10} spacingX={6} paddingY={14} alignItems={'center'}>
                  {data && data.categories.map((category) => (
                    <Category key={category.id} category={category}/>
                    ))}
                  <FAB onOpen={onOpen}/>
              </SimpleGrid>}
            </Center>
            <CategoryForm isOpen={isOpen} onClose={onClose}/>
    </Container>
  )
}