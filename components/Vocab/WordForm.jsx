import { Box, Button, Center, Input, Modal, ModalContent, ModalOverlay, Spinner, Text, VStack } from "@chakra-ui/react"
import { useState } from "react"
import { HiPlus } from 'react-icons/hi'
import { useDispatch } from "react-redux"

import client from "../../graphql/gqlClient"
import { ADD_NEW_VOCAB_CARD, PUBLISH_NEW_CARD } from "../../graphql/mutations"
import { GET_VOCAB_CARDS } from "../../graphql/queries"
import { setIsChanged } from "../../redux/reducers/globalReducer"
import { stringCap } from "../../utils/stringCap"
import { colors } from "../../utils/theme"
import AlertBox from "./AlertBox"


export default function WordForm({isOpen, onClose, category}) {
    const [arNameVal, setArNameVal] = useState('')
    const [spNameVal, setSpNameVal] = useState('')
    const [arLettersVal, setArLettersVal] = useState('')
    const [loading, setLoading] = useState(false)      

    const dispatch = useDispatch()
        
    const submit = async() => {
        setLoading(true)
        const response = await client.mutate({
            mutation: ADD_NEW_VOCAB_CARD,
            variables: { data: {
                arName: arNameVal,
                spName: spNameVal,
                arLetters: arLettersVal,
                category: {connect: {name: category.name}}
            }}
        })
        if (!response.data) return <AlertBox />
        await client.mutate({
            mutation: PUBLISH_NEW_CARD,
            variables: {
                id: response.data.createCard.id
            },
            refetchQueries: [{query: GET_VOCAB_CARDS, variables: {slug: category.slug}}]
        })
        dispatch(setIsChanged())
        setArNameVal('')
        setSpNameVal('')
        setArLettersVal('')
        onClose()
        setLoading(false)
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose} size={"xs"}>
            <ModalOverlay />
            <ModalContent p={4}>
                <VStack spacing={4}>
                    <Text color={colors.text1} fontSize={'lg'} fontWeight={'bold'} letterSpacing={1} mb={2}>Nueva Palabra</Text>
                    <Input
                        textTransform={'capitalize'}
                        value={arNameVal}
                        placeholder="Smiya" 
                        onChange={(e) => {
                            setArNameVal(stringCap(e.target.value))
                        }}/>
                    <Input
                        textTransform={'capitalize'}
                        value={spNameVal}
                        placeholder="Nombre" 
                        onChange={(e) => {
                            setSpNameVal(stringCap(e.target.value))
                        }}/>
                    <Input
                        value={arLettersVal}
                        placeholder="سميا"
                        dir="rtl"
                        onChange={(e) => {
                            setArLettersVal(e.target.value)
                        }}/>
                    <Box
                        as="button"
                        p={2}
                        borderRadius={'md'}
                        disabled={!arNameVal || !spNameVal || !arLettersVal || loading && true}
                        onClick={submit} 
                        w='full'
                        color={colors.text2} 
                        bgColor={!arNameVal || !spNameVal || !arLettersVal || loading ? 'gray.400' : colors.primary}>
                            <Center>{loading ? <Spinner/> : <HiPlus size={24}/>}</Center>
                    </Box>
                </VStack>
            </ModalContent>
        </Modal>
    )
  }
