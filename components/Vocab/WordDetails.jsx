import { Box, Center, Circle, HStack, Square, Stack, Text, VStack } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { BiEdit, BiEditAlt, BiPencil, BiTrash } from "react-icons/bi";
import { useSelector } from "react-redux";
import { colors } from "../../utils/theme";
import Actions from "./Actions";


export default function WordDetails({card, onOpen}) {

  return (
        <HStack
              pos={'relative'}
              width={'100%'}
              height={'100%'}
              bg={'white'}
              py={4}
              px={8}
              justify={"space-between"}
              fontWeight='bold'
              rounded='md'
              border={'1px'}
              borderBottom={'4px'}
              borderColor={colors.secondary}
              letterSpacing={1}> 
                      <VStack align={'start'}>
                          <Text rounded={'full'} color={colors.primary} fontSize={'lg'}>{card.arName}</Text>
                          {card.plural && <Text rounded={'full'} color={colors.secondary} fontSize={'lg'}>{card.plural}</Text>}
                      </VStack>
                      <Text color={'gray.500'} fontSize={'xs'}>{card.spName}</Text>
                      <Actions onOpen={onOpen} trigger={card}/>  
          </HStack>
  )
}
