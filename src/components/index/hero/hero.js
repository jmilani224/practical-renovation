import React from 'react'
import { Flex } from '@chakra-ui/core'
import BackgroundImage from 'gatsby-background-image'
import { useStaticQuery, graphql } from "gatsby"
import ContactForm from '../../contact-form'
import HeroCopy from './hero-copy.js'
import theme from '../../../themes/theme.js'

const Hero = () => {
    const bgImage = useStaticQuery(graphql`
    {
      file(relativePath: {eq: "hero/stair-hero-rt.jpg"}) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const fluidImage = bgImage.file.childImageSharp.fluid

  return (
    <>
            <BackgroundImage
            Tag="div"
            fluid={fluidImage}
            >
                <Flex
                h="auto"
                w="100vw"
                minH="100vh"
                pt={{base: 0, lg: 16}}
                pb={{base: 0, md: 4}}
                px={{base: 0, lg: 4}}
                direction={{base: "column", lg: "row"}}
                alignItems={{base: "center", lg: "start"}}
                justifyContent={{base: "flex-end", md: "flex-start", lg: "space-evenly"}}
                >
                  <HeroCopy />
                  <HeroForm display={{base: "none", md: "flex"}} />
                </Flex>
            </BackgroundImage>
            <HeroForm display={{base: "flex", md: "none"}} />
          
      </>
    )
}

export default Hero


const HeroForm = ({ display }) => (
  <Flex
            display={display}
            w={{base: "100vw", md: "35rem", lg: "28rem"}}
            h="auto"
            borderTop="8px solid"
            borderColor="#fff"
            borderTopColor={theme.mainColor}
            backgroundColor="#fff"
            justifyContent="center"
            pb={10}
            >
              <ContactForm />
            </Flex>
)