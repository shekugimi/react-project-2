import React from 'react'
import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.png";

const headingOptions = {
    pos: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    textTransform: 'uppercase',
    p: '4',
    size: '4xl',
};



const Home = () => {
    return (

        <Box>
            <MyCarousel />
            <Container maxW={'container.xl'} minH={'100vh'} p={"16"}>
                <Heading
                    textTransform={"uppercase"}
                    py="2"
                    w={"fit-content"}
                    borderBottom={"2px solid"}
                    m={"auto"}
                ></Heading>
                <Stack
                    h="full"
                    alignItems={'center'}
                    p={"4"}
                    direction={["column", "column", "column", "row"]}

                >
                    <Image
                        src={img5}
                        h={["40", "400"]}
                        filter={"hue-rotate(-130deg)"}
                    />

                    <Text
                        letterSpacing={"widest"}
                        lineHeight={"190%"}
                        p={["4", "16"]}
                        textAlign="center"
                    >
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum provident unde exercitationem. Voluptatibus, expedita quidem provident dolorum minus animi, vitae temporibus voluptatem dolore beatae non eligendi est autem quisquam dolores delectus commodi. Dolor unde quasi placeat minus in, eveniet fuga aliquam illo facere deserunt accusamus. Natus quos nisi at molestiae dolores inventore suscipit recusandae, adipisci dignissimos voluptates beatae, fugit quam perspiciatis quae officiis? Expedita ut facere mollitia laborum necessitatibus autem. Dolor alias facere nemo nulla minima. Voluptas, quibusdam. Voluptas sapiente iste perferendis expedita modi debitis sunt itaque inventore est? Ipsam odit, adipisci quae error consectetur blanditiis asperiores rem! Quisquam, commodi.
                    </Text>

                </Stack>
            </Container>
        </Box>


    )
}

const MyCarousel = () => (
    <Carousel
        autoPlay
        infiniteLoop
        interval={1000}
        showStatus={false}
        showThumbs={false}
        showArrows={false}
    >
        <Box w="full" h={'100vh'} >
            <Image src={img1} h="full" w={'full'} objectFit={'cover'} />
            <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
                Watch The Future
            </Heading>
        </Box>
        <Box w="full" h={'100vh'}>
            <Image src={img2} h="full" w={'full'} objectFit={'cover'} />
            <Heading bgColor={'whiteAlpha.900'} color={'black'} {...headingOptions}>
                Future is Gaming
            </Heading>
        </Box>

        <Box w="full" h={'100vh'}>
            <Image src={img3} h="full" w={'full'} objectFit={'cover'} />
            <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
                Gaming on Console
            </Heading>
        </Box>

        <Box w="full" h={'100vh'}>
            <Image src={img4} h="full" w={'full'} objectFit={'cover'} />
            <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
                Night life is cool
            </Heading>
        </Box>
    </Carousel>
);

export default Home;