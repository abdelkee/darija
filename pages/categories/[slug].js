import client from "../../graphql/gqlClient"
import { GET_VOCAB_CARDS, GET_VOCAB_CATEGORY } from "../../graphql/queries"

import { Container, useDisclosure, VStack } from "@chakra-ui/react"

import AddNewButton from "../../components/Vocab/AddNewButton"
import WordDetails from "../../components/Vocab/WordDetails"
import WordForm from "../../components/Vocab/WordForm"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setAppBarHeading } from "../../redux/reducers/globalReducer"
import { useQuery } from "@apollo/client"

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
    <Container pt={20} height='inherit' width='inherit' pos={'relative'} >
        <VStack spacing={4} paddingY={14} justify={'start'}>
            {data && data.cards.map((card) => (
                <WordDetails key={card.id} card={card}/>
            ))}
            <AddNewButton onOpen={onOpen} isCategory={false}/>
        </VStack>
        <WordForm isOpen={isOpen} onClose={onClose} category={category} />
    </Container>
  )
}
