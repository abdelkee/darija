import { HStack, Text, VStack } from "@chakra-ui/react";

import Actions from "./Actions";


export default function WordDetails({card, onOpen}) {

  const genderColor = card.gender === 'Masculino' ? 'purple.600' : 'pink.600'

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
              shadow={'xs'}
              borderBottom={'2px'}
              borderLeft={card.gender === 'Masculino' ? '2px' : 0 }
              borderRight={card.gender === 'Masculino' ? 0 : '2px' }
              borderColor={genderColor}
              letterSpacing={1}
              overflow={'hidden'}>
                      <VStack align={'start'} >
                          <Text 
                            rounded={'full'}
                            color={genderColor}
                            fontSize={'md'}
                            letterSpacing={2}>
                              {card.arName}
                          </Text>
                          {card.plural && 
                          <Text 
                            rounded={'full'} 
                            color={genderColor} 
                            fontSize={'md'}
                            letterSpacing={2}>
                              {card.plural}
                          </Text>}
                      </VStack>
                      <Text color={'gray.500'} fontSize={'xs'}>{card.spName}</Text>
                      <Actions onOpen={onOpen} trigger={card}/>  
          </HStack>
  )
}
