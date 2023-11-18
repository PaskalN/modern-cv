import React from "react"

import { Flex, Box, Card, CardBody, CardHeader, CardFooter, Text, Heading, Divider, Button } from "@chakra-ui/react"
import { IconSFCC } from "../../components/icons"
import CarouselContextProvider, { Slide, Counter, CarouselSkeleton } from "../../components/carousels/main"

const Home: React.FC<{}> = () => {
    return (
        <>
            <Flex layerStyle="page-section" page-component="section" className="bggr">
                <Flex layerStyle="page-segment" page-component="section-segment" gap="1rem" flexDir="column" minH="80vh" >
                    <CarouselContextProvider>
                        <CarouselSkeleton w="100%">
                            <Slide bg="white">123123</Slide>
                            <Slide bg="white">123123</Slide>
                            <Slide bg="white">123123</Slide>
                        </CarouselSkeleton>

                        <Counter />
                    </CarouselContextProvider>
                    
                    
                    <CarouselContextProvider size="x6">
                        <Flex w="100%" overflow="hidden" justifyContent="center" padding={{
                            base: "0 8px",
                            xl: "0 24px"
                        }}>
                            <Flex flex="0 0 calc(100% + 24px)">
                                <CarouselSkeleton w="100%">
                                    <Slide padding={{
                                        base: "0 4px",
                                        xl: "0 12px"
                                    }}>
                                        <Box minH="300px" bg="red" w="100%"></Box>
                                    </Slide>
                                    <Slide padding={{
                                        base: "0 4px",
                                        xl: "0 12px"
                                    }}>
                                        <Box minH="300px" bg="red" w="100%"></Box>
                                    </Slide>
                                    <Slide padding={{
                                        base: "0 4px",
                                        xl: "0 12px"
                                    }}>
                                        <Box minH="300px" bg="red" w="100%"></Box>
                                    </Slide>
                                    <Slide padding={{
                                        base: "0 4px",
                                        xl: "0 12px"
                                    }}>
                                        <Box minH="300px" bg="red" w="100%"></Box>
                                    </Slide>
                                    <Slide padding={{
                                        base: "0 4px",
                                        xl: "0 12px"
                                    }}>
                                        <Box minH="300px" bg="red" w="100%"></Box>
                                    </Slide>
                                    <Slide padding={{
                                        base: "0 4px",
                                        xl: "0 12px"
                                    }}>
                                        <Box minH="300px" bg="red" w="100%"></Box>
                                    </Slide>
                                    <Slide padding={{
                                        base: "0 4px",
                                        xl: "0 12px"
                                    }}>
                                        <Box minH="300px" bg="red" w="100%"></Box>
                                    </Slide>
                                    <Slide padding={{
                                        base: "0 4px",
                                        xl: "0 12px"
                                    }}>
                                        <Box minH="300px" bg="red" w="100%"></Box>
                                    </Slide>
                                    <Slide padding={{
                                        base: "0 4px",
                                        xl: "0 12px"
                                    }}>
                                        <Box minH="300px" bg="red" w="100%"></Box>
                                    </Slide>
                                    <Slide padding={{
                                        base: "0 4px",
                                        xl: "0 12px"
                                    }}>
                                        <Box minH="300px" bg="red" w="100%"></Box>
                                    </Slide>
                                </CarouselSkeleton>
                            </Flex>
                        </Flex>
                        <Counter />
                    </CarouselContextProvider>
                </Flex>
            </Flex>
      
            <Flex layerStyle="page-section" page-component="section">
                <Flex layerStyle="page-segment" page-component="section-segment" gap="1rem" flexDir="column">
                    <Card variant="thumbnail">
                        <CardHeader>
                            <Heading as="h2" variant="h_heavy" size="xl" >Example Post Title</Heading>
                        </CardHeader>
                        <Text as="span" variant="divider" maxW="6rem" />
                        <CardBody>
                            <Text size="md" data-p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque molestiae accusamus enim eum similique animi voluptatem quibusdam. Iure quam corrupti asperiores sunt reiciendis incidunt quisquam provident impedit consectetur, laborum quos?</Text>
                        </CardBody>
                    </Card>

                    <Card variant="thumbnail">
                        <CardHeader>
                            <Heading as="h2" variant="h_heavy" size="lg" >Example Post Title</Heading>
                        </CardHeader>
                        <CardBody>
                            <Text size="md" data-p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque molestiae accusamus enim eum similique animi voluptatem quibusdam. Iure quam corrupti asperiores sunt reiciendis incidunt quisquam provident impedit consectetur, laborum quos?</Text>
                        </CardBody>
                        <Box>
                            <Button colorScheme="gradient"><Text variant="h_medium" size="md" color="white" maxW="auto">Full Experience Here</Text></Button>
                        </Box>
                        <Divider maxW="6rem" />         
                        <Text>Visit the site here...</Text>         
                    </Card>
                </Flex>
      

                <Flex layerStyle="page-segment" page-component="section-segment" gap="1rem">
                    <Card variant="thumbnail" maxW="30rem">
                        <CardHeader>
                            <Flex gap="0.85rem" alignItems="center">
                                <IconSFCC fontSize="2rem" />
                                <Flex flexDir="column">
                                    <Heading colorScheme="interesting"><Text variant="h_heavy" size="mdx2" color="dark">SFCC Engineer / Architect</Text></Heading>
                                    <Text>Floor&Decor</Text>
                                </Flex>
                            </Flex>
                        </CardHeader>
                        <CardBody>
                            <Text size="md" fontStyle="italic">The main goal was the site to be trasfered from Legacy architecture - Pipelines to Store Front Reference Architecture (SFRA). For that purpouse ...</Text>
                        </CardBody>
                        <Box>
                            <Button><Text variant="h_medium" size="md" color="white" maxW="auto">Full Experience Here</Text></Button>
                        </Box>
                        <Divider/>
                        <CardFooter>
                            <Text color="dark">Visit the site here...</Text>
                        </CardFooter>
                    </Card>

                    <Card variant="thumbnail" maxW="30rem">
                        <CardHeader>
                            <Flex gap="0.85rem" alignItems="center">
                                <IconSFCC fontSize="2rem" />
                                <Flex flexDir="column">
                                    <Heading><Text variant="h_heavy" size="mdx2" color="dark">SFCC Engineer / Architect</Text></Heading>
                                    <Text>Floor&Decor</Text>
                                </Flex>
                            </Flex>
                        </CardHeader>
                        <CardBody>
                            <Text size="md" fontStyle="italic">The main goal was the site to be trasfered from Legacy architecture - Pipelines to Store Front Reference Architecture (SFRA). For that purpouse ...</Text>
                        </CardBody>
                        <Box>
                            <Button><Text variant="h_medium" size="md" color="white" maxW="auto">Full Experience Here</Text></Button>
                        </Box>
                        <Divider/>
                        <CardFooter>
                            <Text color="dark">Visit the site here...</Text>
                        </CardFooter>
                    </Card>
                </Flex>
            </Flex>
        </>
    )
}

export default Home
