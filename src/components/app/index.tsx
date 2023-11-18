import React from "react"

import { Flex, useMultiStyleConfig } from "@chakra-ui/react"

import Header from "../layouts/header"

const App: React.FC<{
  children?: React.ReactNode | Array<React.ReactNode>
}> = props => {
    const { children } = props

    const style = useMultiStyleConfig("App", {})

    return (
        <Flex h="100%" w="100%" minH="100vh" flexDir="column" __css={style.container}>
            <Flex layerStyle="page-section" page-component="section" bg="base.main">
                <Flex layerStyle="page-segment" page-component="section-segment">
                    <Header />
                </Flex>
            </Flex>

            {children}
        </Flex>
    )
}

export default App
