import { Circle, Image, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { colors } from "../../utils/theme";

export default function Category({category}) {
  return (
    <VStack>
      <Link href={`/${category.slug}`}>
          <Circle
            bgGradient={`linear(to-b, purple.300, pink.400)`}
            size={"32"}>
              <Circle 
                size={'28'} 
                bgColor={'white'}
                overflow={'hidden'}>
                    <Image 
                      src={category.image === null ? '/darijaIcon.png' : category.image.url }
                      width={'20'}
                      height={'20'} 
                      objectFit={'cover'}
                      />
              </Circle>
          </Circle>
      </Link>
      <Text fontWeight={'bold'} fontSize={'lg'} letterSpacing={2} color={colors.text1}>
          {category.name}
      </Text>
    </VStack>
  )
}
