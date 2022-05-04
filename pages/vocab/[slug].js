import { Center, Container, Spinner, useDisclosure, VStack } from "@chakra-ui/react"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useQuery } from "@apollo/client"

import client from "../../graphql/gqlClient"
import { GET_VOCAB_CARDS, GET_VOCAB_CATEGORY } from "../../graphql/queries"
import WordForm from "../../components/Vocab/WordForm"
import { setAppBarHeading, setItemToMutate, setKeywordSearched, setSearchBarOpen } from "../../redux/reducers/vocabReducer"
import FAB from "../../components/Vocab/FAB"
import DataFiltered from "../../components/Vocab/DataFiltered"

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
        dispatch(setKeywordSearched(''))
        dispatch(setSearchBarOpen(false))
    }, [dispatch, category.name])

    useEffect(() => {
        if (!isOpen) {
          dispatch(setItemToMutate(null))
        }
    }, [dispatch, isOpen])

  return (
    <Container pt={20} height={'100vh'} width='100%' pos={'relative'} >
        {loading ?
        <Center>
            <Spinner size={'lg'}/>
        </Center>
        : <VStack spacing={4} pt={14} pb={28} justify={'start'}>
            <DataFiltered data={data.cards} onOpen={onOpen}/>
        </VStack>}
        <FAB onOpen={onOpen}/>
        <WordForm isOpen={isOpen} onClose={onClose} category={category} />
    </Container>
  )
}