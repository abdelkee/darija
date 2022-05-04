import { Circle, HStack, Input, Modal, ModalContent, ModalOverlay, Spinner, Text, useToast, VStack } from "@chakra-ui/react"
import { useState } from "react"
import { HiPlus } from 'react-icons/hi'
import { GET_VOCAB_CATEGORIES } from "../../graphql/queries"
import { ADD_NEW_VOCAB_CATEGORY, PUBLISH_NEW_CATEGORY, UPDATE_CATEGORY } from "../../graphql/mutations"
import { colors } from "../../utils/theme"
import client from "../../graphql/gqlClient"
import AlertBox from "./AlertBox"
import { useSelector } from "react-redux"
import { stringCap } from "../../utils/stringCap"

export default function CategoryForm({isOpen, onClose}) {
    const [inputVal, setInputVal] = useState('')          
    const [loading, setLoading] = useState(false)
    const { itemToMutate } = useSelector(state => state.vocabSlice)
    const toast = useToast()
        
    const submit = async() => {
        setLoading(true)
        const response  = await client.mutate({
            mutation: itemToMutate === null ? ADD_NEW_VOCAB_CATEGORY : UPDATE_CATEGORY,
            variables: itemToMutate === null ? {
                data: {name: inputVal, slug: inputVal.toLowerCase().split(' ').join('-')},
            } :
            {
                data: {name: inputVal, slug: inputVal.toLowerCase().split(' ').join('-')},
                where: {id: itemToMutate.id}
            }
        })
        if (!response.data) return <AlertBox />
        await client.mutate({
            mutation: PUBLISH_NEW_CATEGORY,
            variables: {
                id: itemToMutate === null ? response.data.createCategory.id : response.data.updateCategory.id
            },
            refetchQueries: [{query: GET_VOCAB_CATEGORIES}],
        })
        setInputVal('')
        onClose()
        setLoading(false)
        toast({
            title: 'Categoria actualizada',
            status: 'success',
            duration: 3000,
            isClosable: true,
          })
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose} size={"xs"}>
            <ModalOverlay />
            <ModalContent p={6} bgGradient={itemToMutate !== null && `linear(to-r, purple.100, pink.100 )`} >
                <VStack spacing={6} align={'center'}>
                <Text color={colors.primary} fontSize={'lg'} fontWeight={'bold'} letterSpacing={1} mb={2}>{itemToMutate === null ? 'Nueva Categoria' : 'Actualizar ' + itemToMutate.name}</Text>
                <HStack spacing={4}>
                    <Input
                        variant={itemToMutate !== null ? 'filled' : 'outline'}
                        bgColor={itemToMutate !== null && 'white'}
                        value={inputVal}
                        placeholder="Nombre" 
                        onChange={(e) => {
                            setInputVal(stringCap(e.target.value))
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
