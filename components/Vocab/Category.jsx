import { Circle, Image, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";

import { colors } from "../../utils/theme";
import Actions from "./Actions";

export default function Category({category, onOpen}) {
  return (
    <VStack pos={'relative'}>
      <Link href={`/vocab/${category.slug}`} passHref >
          <Circle
            bgGradient={`linear(to-b, purple.300, pink.400)`}
            size={"32"}>
              <Circle
                as={'button'}
                size={'28'} 
                bgColor={'white'}
                overflow={'hidden'}>
                    <Image 
                      src={category.image === null ? '/darijaIcon.png' : category.image?.url }
                      width={'20'}
                      height={'20'} 
                      objectFit={'cover'}
                      alt={category.name}
                      />
              </Circle>
          </Circle>
      </Link>
      <Text fontWeight={'bold'} fontSize={'lg'} letterSpacing={2} color={colors.text1}>
          {category.name}
      </Text>
      <Actions onOpen={onOpen} trigger={category}/>
      
    </VStack>
  )
}
