import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Center, Container, SimpleGrid, useDisclosure } from "@chakra-ui/react";

import Category from "../components/Vocab/Category";
import AddNewButton from "../components/Vocab/AddNewButton";
import CategoryForm from "../components/Vocab/CategoryForm";
import { setAppBarHeading } from "../redux/reducers/globalReducer";
import { useQuery } from "@apollo/client";
import { GET_VOCAB_CATEGORIES } from "../graphql/queries";


export default function Body() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const dispatch = useDispatch()
  const { loading, error, data } = useQuery(GET_VOCAB_CATEGORIES)
  
  useEffect(() => {
    dispatch(setAppBarHeading('Vocabulario'))
  }, [])

    
  return (
    <Container 
        pt={20} 
        height='inherit' 
        width='inherit' 
        pos={'relative'}>
            <Center>
              <SimpleGrid columns={2} spacingY={10} spacingX={6} paddingY={14} alignItems={'center'}>
                  {data && data.categories.map((category) => (
                    <Category key={category.id} category={category}/>
                    ))}
                  <AddNewButton onOpen={onOpen} isCategory={true}/>
              </SimpleGrid>
            </Center>
            {<CategoryForm isOpen={isOpen} onClose={onClose}/>}
    </Container>
  )
}