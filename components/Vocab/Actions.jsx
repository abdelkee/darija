import { gql } from "@apollo/client";
import { AlertDialog, Circle, HStack, useToast } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { BiPencil, BiTrash } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import client from "../../graphql/gqlClient";
import { DELETE_CARD } from "../../graphql/mutations";
import { GET_VOCAB_CARDS } from "../../graphql/queries";
import { setItemToMutate } from "../../redux/reducers/globalReducer";

export default function Actions({onOpen, trigger}) {
    const { isEditMode, appBarHeading } = useSelector(state => state.general)
    const MotionStack = motion(HStack)
    const dispatch = useDispatch()
    const toast = useToast()
    const isCategory = appBarHeading === 'Vocabulario'

    const edit = () => {
        dispatch(setItemToMutate(trigger))
        onOpen()
    }
    
    const showAlert = async() => {
      if(confirm('Quieres eliminar esta palabra?')) {      
        await client.mutate({
          mutation: DELETE_CARD,
          variables: { where: {id: trigger.id} },
          refetchQueries: [{query: GET_VOCAB_CARDS, variables: {slug: trigger.category.slug}}]
        })
        toast({
          title: 'Palabra eliminada',
          status: 'success',
          duration: 3000,
          isClosable: true,
        })
      } 
    }
  return (
    <AnimatePresence>
        {isEditMode && 
        <MotionStack
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0}}
          exit={{ opacity: 0, y: 8 }}
          justify={'space-evenly'} 
          color={'white'}
          pos={'absolute'} 
          top={isCategory ? -8 : 0}
          w={'full'}
          h={!isCategory && 'full'}
          left={isCategory ? 0 : -2} 
          px={4}
          py={2} >
            <Circle 
                onClick={edit}
                as={'button'}
                bg={'white'}
                size={10}
                border={'1px'}
                borderColor={'gray.200'}
                shadow={'lg'}
                color={'teal.500'}>
              <BiPencil size={'24px'} />
            </Circle>
            { !isCategory && <Circle 
                onClick={showAlert}
                as={'button'}
                bg={'white'}
                size={10}
                border={'1px'}
                borderColor={'gray.200'}
                shadow={'lg'}
                color={'red.500'}>
              <BiTrash size={'24px'} />
            </Circle>}
        </MotionStack>}
      </AnimatePresence>
  )
}
