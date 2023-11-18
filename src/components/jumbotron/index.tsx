import React from "react"

import { Flex, FlexProps, Heading, Text } from "@chakra-ui/react"

const Jumbotron: React.FC<Record<string, unknown> & FlexProps> = props => {
    const { ...rest } = props

    return (
        <Flex overflow="hidden" padding="1.5rem" w="100%" minH="50rem" gap="1.5rem" bg="bg.base" {...rest}>
            <Flex flexBasis="50%">
                <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad sequi nobis sit eius quo voluptatum sint, impedit
          amet et! Sapiente, architecto. Accusamus, maxime! Harum esse numquam, atque iure nostrum natus?
                </Text>
            </Flex>
            <Flex flexBasis="50%" justifyContent="center" flexDir="column" gap="1rem">
                <Heading size="lg" colorScheme="base">
          Be my Guest
                </Heading>

                <Text color="color.secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad sequi nobis sit eius quo voluptatum sint, impedit
          amet et! Sapiente, architecto. Accusamus, maxime! Harum esse numquam, atque iure nostrum natus?
                </Text>
            </Flex>
        </Flex>
    )
}

export default Jumbotron
