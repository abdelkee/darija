import { Button, Circle, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { BiPencil, BiTrashAlt } from 'react-icons/bi';
import { useSelector } from "react-redux";

import { colors } from "../../utils/theme";
import CategoryOptions from "./CategoryOptions";

export default function Category({category, onOpen}) {

  return (
    <VStack pos={'relative'}>
      <Link href={`/categories/${category.slug}`} passHref >
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
                      alt={category.name}
                      />
              </Circle>
          </Circle>
      </Link>
      <Text fontWeight={'bold'} fontSize={'lg'} letterSpacing={2} color={colors.text1}>
          {category.name}
      </Text>
      <CategoryOptions/>
      
    </VStack>
  )
}
