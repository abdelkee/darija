import client from "../../graphql/gqlClient"
import { GET_VOCAB_CARDS, GET_VOCAB_CATEGORY } from "../../graphql/queries"

import { Center, Container, Spinner, Text, useDisclosure, VStack } from "@chakra-ui/react"

import WordDetails from "../../components/Vocab/WordDetails"
import WordForm from "../../components/Vocab/WordForm"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setAppBarHeading } from "../../redux/reducers/globalReducer"
import { useQuery } from "@apollo/client"
import FAB from "../../components/Vocab/FAB"
import EditButton from "../../components/Vocab/EditButton"

export const getServerSideProps = async({params}) => {
    const response = await client.query({
        query: GET_VOCAB_CATEGORY,
        variables: {
            slug: params.slug
        }
    })
    if(!response) {
        return {
            notFound: true
        }
    }
    return {
        props: {
            category: response.data.category
        }
    }
}

export default function VocabCategory({category}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { loading, error, data } = useQuery(GET_VOCAB_CARDS, {variables: {slug: category.slug}})
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setAppBarHeading(category.name))
    }, [dispatch, category.name])

  return (
    <Container pt={20} height={'100vh'} width='100%' pos={'relative'} >
        {loading ?
        <Center>
            <Spinner size={'lg'}/>
        </Center>
        : <VStack spacing={4} paddingY={14} justify={'start'}>
            {data.cards.length > 0 ? data.cards.map((card) => (
                <WordDetails key={card.id} card={card}/>
            ))
            : 
            <Center>
                <Text fontWeight={'semibold'} letterSpacing={1} color={'purple.300'} >Añade la primera palabra de {category.name}</Text>
            </Center>}
        </VStack>}
        <FAB onOpen={onOpen}/>
        <WordForm isOpen={isOpen} onClose={onClose} category={category} />
    </Container>
  )
}
