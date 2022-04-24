import { Circle } from "@chakra-ui/react";
import { HiPlus } from "react-icons/hi";
import { colors } from "../../utils/theme";

export default function FAB({onOpen}) {
  return (
    <Circle
        pos={'fixed'}
        bottom={8}
        right={8}
        size={16}
        as="button"
        bgGradient={`linear(to-b, ${colors.primary}, ${colors.secondary})`}
        border={'1px'}
        borderColor={colors.primary}
        shadow={'md'}
        paddingY={4} 
        paddingX={4}
        color={colors.shade}
        zIndex={2}
        onClick={onOpen}>
            <HiPlus size={24}/>
    </Circle>
  )
}
