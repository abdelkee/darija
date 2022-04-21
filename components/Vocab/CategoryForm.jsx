import { Circle, HStack, Input, Modal, ModalContent, ModalOverlay } from "@chakra-ui/react"
import { useState } from "react"
import { HiPlus } from 'react-icons/hi'
import { GET_VOCAB_CATEGORIES } from "../../graphql/queries"
import { ADD_NEW_VOCAB_CATEGORY, PUBLISH_NEW_CATEGORY } from "../../graphql/mutations"
import { colors } from "../../utils/theme"
import client from "../../graphql/gqlClient"
import AlertBox from "./AlertBox"

export default function CategoryForm({isOpen, onClose}) {
    const [inputVal, setInputVal] = useState('')             
        
    const submit = async() => {
        const { data }  = await client.mutate({
            mutation: ADD_NEW_VOCAB_CATEGORY,
            variables: {
                data: {name: inputVal, slug: inputVal.toLowerCase().split(' ').join('-')}
            }
        })
        if (!data) return <AlertBox />
        await client.mutate({
            mutation: PUBLISH_NEW_CATEGORY,
            variables: {
                id: data.createCategory.id
            },
            refetchQueries: [{query: GET_VOCAB_CATEGORIES}],
        })
        setInputVal('')
        onClose()
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose} size={"xs"}>
            <ModalOverlay />
            <ModalContent p={8}>
                <HStack spacing={4}>
                    <Input
                        value={inputVal}
                        placeholder="Nombre" 
                        onChange={(e) => {
                            setInputVal(e.target.value)
                        }}/>
                    <Circle
                        disabled={!inputVal && true}
                        onClick={submit} 
                        as={'button'}
                        size={'40px'} 
                        color={colors.text2} 
                        bgColor={colors.primary}>
                            <HiPlus size={24}/>
                    </Circle>
                </HStack>
            </ModalContent>
        </Modal>
    )
  }
