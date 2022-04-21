import { Button, Input, Modal, ModalContent, ModalOverlay, VStack } from "@chakra-ui/react"
import { useState } from "react"
import { HiPlus } from 'react-icons/hi'
import { useDispatch } from "react-redux"
import client from "../../graphql/gqlClient"
import { ADD_NEW_VOCAB_CARD, PUBLISH_NEW_CARD } from "../../graphql/mutations"
import { GET_VOCAB_CARDS } from "../../graphql/queries"
import { setIsChanged } from "../../redux/reducers/globalReducer"
import { colors } from "../../utils/theme"
import AlertBox from "./AlertBox"


export default function WordForm({isOpen, onClose, category}) {
    const [arNameVal, setArNameVal] = useState('')
    const [spNameVal, setSpNameVal] = useState('')
    const [arLettersVal, setArLettersVal] = useState('')
    const dispatch = useDispatch()
        
    const submit = async() => {
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
                id: data.createCard.id
            },
            refetchQueries: [{query: GET_VOCAB_CARDS, variables: {slug: category.slug}}]
        })
        dispatch(setIsChanged())
        setArNameVal('')
        setSpNameVal('')
        setArLettersVal('')
        onClose()
    }

    const capitaliaze = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1)
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose} size={"xs"}>
            <ModalOverlay />
            <ModalContent p={8}>
                <VStack spacing={4}>
                    <Input
                        textTransform={'capitalize'}
                        value={arNameVal}
                        placeholder="Smiya" 
                        onChange={(e) => {
                            setArNameVal(capitaliaze(e.target.value))
                        }}/>
                    <Input
                        textTransform={'capitalize'}
                        value={spNameVal}
                        placeholder="Nombre" 
                        onChange={(e) => {
                            setSpNameVal(capitaliaze(e.target.value))
                        }}/>
                    <Input
                        value={arLettersVal}
                        placeholder="سميا"
                        dir="rtl"
                        onChange={(e) => {
                            setArLettersVal(e.target.value)
                        }}/>
                    <Button
                        disabled={!arNameVal || !spNameVal || !arLettersVal && true}
                        onClick={submit} 
                        w='full'
                        color={colors.text2} 
                        bgColor={colors.primary}>
                            <HiPlus size={24}/>
                    </Button>
                </VStack>
            </ModalContent>
        </Modal>
    )
  }
