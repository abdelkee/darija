import { HStack, Text, VStack } from "@chakra-ui/react";
import { colors } from "../../utils/theme";



export default function WordDetails({card}) {
  return (
    <HStack
        width={'100%'}
        bgColor={colors.accent2}
        paddingY={4}
        paddingX={4}
        justify={"space-between"}
        fontWeight='bold'
        rounded='md'
        border={'1px'}
        borderColor={colors.secondary}
        shadow={'md'}
        letterSpacing={1}> 
                <VStack align={'start'}>
                  <Text color={colors.secondary} noOfLines={1} fontSize={'lg'}>{card.arName}</Text>
                  <Text color={'gray.500'} fontSize={'xs'}>{card.spName}</Text>
                </VStack>
                  <Text color={colors.shade3} fontSize={'md'}>{card.arLetters}</Text>
    </HStack>
  )
}
