import { Box, Center, Input, Modal, ModalContent, ModalOverlay, Spinner, Text, useToast, VStack } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { HiPlus } from 'react-icons/hi'
import { useSelector } from "react-redux"

import client from "../../graphql/gqlClient"
import { ADD_NEW_VOCAB_CARD, PUBLISH_NEW_CARD, UPDATE_VOCAB_CARD } from "../../graphql/mutations"
import { GET_VOCAB_CARDS } from "../../graphql/queries"
import { stringCap } from "../../utils/stringCap"
import { colors } from "../../utils/theme"
import AlertBox from "./AlertBox"


export default function WordForm({isOpen, onClose, category}) {
    const { itemToMutate } = useSelector(state => state.vocabSlice)
    const [arNameVal, setArNameVal] = useState('')
    const [spNameVal, setSpNameVal] = useState('')
    const [pluralVal, setPluralVal] = useState('')
    const [loading, setLoading] = useState(false)
    const toast = useToast()    
        
    useEffect(() => {
        if(itemToMutate !== null) {
            setArNameVal(itemToMutate.arName)
            setSpNameVal(itemToMutate.spName)
            setPluralVal(itemToMutate.plural || '')
        } else {
            setArNameVal('')
            setSpNameVal('')
            setPluralVal('')
        }
    }, [itemToMutate])

    const submit = async() => {
        setLoading(true)
        const response = await client.mutate({
            mutation: itemToMutate === null ? ADD_NEW_VOCAB_CARD : UPDATE_VOCAB_CARD,
            variables: itemToMutate === null ? { 
                data: {
                    arName: arNameVal,
                    spName: spNameVal,
                    plural: pluralVal,
                    category: {connect: {name: category.name}}}} 
                : 
                { 
                    data: {
                        arName: arNameVal,
                        spName: spNameVal,
                        plural: pluralVal,
                        category: {connect: {name: category.name}}},
                    where: {id: itemToMutate.id}}
        })
        if (!response.data) return <AlertBox />
        await client.mutate({
            mutation: PUBLISH_NEW_CARD,
            variables: {
                id: itemToMutate === null ? response.data.createCard.id : response.data.updateCard.id
            },
            refetchQueries: [{query: GET_VOCAB_CARDS, variables: {slug: category.slug}}]
        })
        setArNameVal('')
        setSpNameVal('')
        setPluralVal('')
        onClose()
        setLoading(false)
        toast({
            title: 'Palabra actualizada',
            status: 'success',
            duration: 3000,
            isClosable: true,
          })
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose} size={"xs"}>
            <ModalOverlay />
            <ModalContent p={4}>
                <VStack spacing={4}>
                    <Text color={colors.primary} fontSize={'lg'} fontWeight={'bold'} letterSpacing={1} mb={2}>{itemToMutate === null ? 'Nueva Palabra' : 'Actualizar ' + itemToMutate.arName}</Text>
                    <Input
                        textTransform={'capitalize'}
                        value={arNameVal}
                        placeholder="En arabe" 
                        onChange={(e) => {
                            setArNameVal(stringCap(e.target.value))
                        }}/>
                    <Input
                        textTransform={'capitalize'}
                        value={spNameVal}
                        placeholder="En español" 
                        onChange={(e) => {
                            setSpNameVal(stringCap(e.target.value))
                        }}/>
                    <Input
                        textTransform={'capitalize'}
                        value={pluralVal}
                        placeholder="En plural"
                        onChange={(e) => {
                            setPluralVal(stringCap(e.target.value))
                        }}/>
                    <Box
                        as="button"
                        p={2}
                        borderRadius={'md'}
                        disabled={!arNameVal || !spNameVal || loading && true}
                        onClick={submit} 
                        w='full'
                        color={colors.text2} 
                        bgColor={!arNameVal || !spNameVal || loading ? 'gray.400' : colors.primary}>
                            <Center>{loading ? <Spinner/> : <HiPlus size={24}/>}</Center>
                    </Box>
                </VStack>
            </ModalContent>
        </Modal>
    )
  }
