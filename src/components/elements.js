import React from 'react'
import { Button, Heading, Flex } from '@chakra-ui/core'
import theme from '../themes/theme.js'
import { RichText } from 'prismic-reactjs'
import { BackgroundImageHandler } from '../utils/imageHandlers.js'

export const PrimaryButton = ({ CTA, ref, onClick }) => {
    return (
        <Button
        h={10}
        color="#fff"
        backgroundColor={theme.buttonColor}
        _hover={{ bg: theme.buttonColorDark }}
        type="submit"
        ref={ref}
        onClick={onClick}
        m={3}
        >
            {CTA}
        </Button>
    )
}

export const Heading1 = ({ children }) => {
    return (
        <Heading
          as="h1"
          fontWeight="400"
          fontSize="3.3rem"
          textAlign="center"
          color={theme.darkGray}
          mt={6}
          >
          {children}
          </Heading>
    )
}

export const FullWidthImage = ({ headline, fontSize, headingTag, fluid, fallbackImage, height, accordianIconProp }) => {
    
    return (
        <>
        <BackgroundImageHandler
        fluid={fluid}
        fallbackImage={fallbackImage}
        >

            <Flex
            h={height}
            alignItems="center"
            justifyContent="center"
            color="#fff"
            w="100vw"
            >
                <Heading
                as={headingTag}
                fontSize={fontSize}
                fontWeight="400"
                >
                    {headline && RichText.asText(headline)}
                        {accordianIconProp}
                </Heading>
            </Flex>
            </BackgroundImageHandler>
        </>

    )
}