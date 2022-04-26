import { Circle, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { BiPencil, BiTrash } from "react-icons/bi";
import { colors } from "../../utils/theme";


export default function WordDetails({card}) {
  const MotionStack = motion(HStack)

  return (
      <Stack pos={'relative'} w={'full'}>
        <VStack zIndex={-1} w={'inherit'} p={4} align={'start'}>
          <Circle 
              as={'button'}
              bg={'teal.500'}
              size={8}
              color={'white'}>
            <BiPencil size={'20px'} />
          </Circle>
          <Circle 
              as={'button'}
              bg={'red.500'}
              size={8}
              color={'white'}>
            <BiTrash size={'20px'} />
          </Circle>
        </VStack>
    <MotionStack
        drag="x"
        dragConstraints={{ left: 80, right: 0 }}
        pos={'absolute'}
        width={'100%'}
        bgColor={colors.accent2}
        paddingY={4}
        paddingX={4}
        justify={"space-between"}
        fontWeight='bold'
        rounded='md'
        border={'1px'}
        borderBottom={'4px'}
        borderColor={colors.secondary}
        letterSpacing={1}> 
                <VStack align={'start'}>
                  <Text color={colors.secondary} noOfLines={1} fontSize={'lg'}>{card.arName}</Text>
                  <Text color={'gray.500'} fontSize={'xs'}>{card.spName}</Text>
                </VStack>
                  <Text color={colors.shade3} fontSize={'md'}>{card.arLetters}</Text>
                  
    </MotionStack>
    </Stack>
  )
}
