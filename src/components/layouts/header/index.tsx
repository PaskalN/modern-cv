import React from "react"

import { Flex, FlexProps, Text } from "@chakra-ui/react"

const Header: React.FC<Record<string, unknown> & FlexProps> = props => {
    const { ...rest } = props

    return (
        <Flex as="header" w="100%" {...rest} gap="1rem">
            <Text>Hello</Text>
            <Text>Experience</Text>
            <Text>Skills</Text>
            <Text>Projects</Text>
            <Text>Free Time</Text>
            <Text>{"<code />"}</Text>
            <Text>{"Favourite Books"}</Text>
        </Flex>
    )
}

export default Header
