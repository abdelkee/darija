import { Button, Circle, HStack, Input, Modal, ModalContent, ModalOverlay, Spinner, Text, VStack } from "@chakra-ui/react"
import { useState } from "react"
import { HiPlus } from 'react-icons/hi'
import { GET_VOCAB_CATEGORIES } from "../../graphql/queries"
import { ADD_NEW_VOCAB_CATEGORY, PUBLISH_NEW_CATEGORY } from "../../graphql/mutations"
import { colors } from "../../utils/theme"
import client from "../../graphql/gqlClient"
import AlertBox from "./AlertBox"

export default function CategoryForm({isOpen, onClose}) {
    const [inputVal, setInputVal] = useState('')          
    const [loading, setLoading] = useState(false)      
        
    const submit = async() => {
        setLoading(true)
        const response  = await client.mutate({
            mutation: ADD_NEW_VOCAB_CATEGORY,
            variables: {
                data: {name: inputVal, slug: inputVal.toLowerCase().split(' ').join('-')}
            }
        })
        if (!response.data) return <AlertBox />
        await client.mutate({
            mutation: PUBLISH_NEW_CATEGORY,
            variables: {
                id: response.data.createCategory.id
            },
            refetchQueries: [{query: GET_VOCAB_CATEGORIES}],
        })
        setInputVal('')
        onClose()
        setLoading(false)
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose} size={"xs"}>
            <ModalOverlay />
            <ModalContent p={6}>
                <VStack spacing={6} align={'center'}>
                <Text color={colors.text1} fontSize={'lg'} fontWeight={'bold'} letterSpacing={1} mb={2}>Nueva Categoria</Text>
                <HStack spacing={4}>
                    <Input
                        value={inputVal}
                        placeholder="Nombre" 
                        onChange={(e) => {
                            setInputVal(e.target.value)
                        }}/>
                    <Circle
                        disabled={!inputVal || loading && true}
                        onClick={submit}
                        as={'button'}
                        size={'40px'} 
                        color={colors.text2} 
                        bgColor={!inputVal ? "gray.400" : colors.primary}>
                            {loading ? <Spinner/> : <HiPlus size={24}/>}
                    </Circle>
                </HStack>
                </VStack>
            </ModalContent>
        </Modal>
    )
  }
