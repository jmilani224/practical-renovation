import React, { useState } from 'react'
import { ListItem } from '@chakra-ui/core';
import { Link } from 'gatsby'

import Dropdown from './dropdown.js'
import MenuArrow from './menu-arrow.js';

import theme from '../../themes/theme.js'

const NavSection = ({ name, href, menuItems}) => {
    const [drop, setDrop] = useState(false)

    const toggleDrop = () => {
      setDrop(!drop)
    }
    return (
        <ListItem
            display="inline-block"
            fontWeight="500"
            py={4}
            px={12}
            onMouseEnter={toggleDrop}
            onMouseLeave={toggleDrop}
            >
              <Link to={href}>
                  {name}

                  {menuItems[0] && <MenuArrow drop={drop} />}
              </Link>
                {menuItems[0] && drop && <Dropdown menuItems={menuItems} /> /*if menuItems array is not empty (has dropdown items) and 'drop' is true, show Dropdown*/}
            </ListItem>
    )
}

export const MobileNavSection = ({ name, href, menuItems }) => {

  return (
    <ListItem
            display="flex"
            flexDirection="column"
            alignItems="center"
            fontSize="xl"
            mb={6}
            >
              <Link to={href}>
                  {name}
              </Link>
                {menuItems[0] && menuItems.map((item, i, arr) => (
                  <ListItem
                  display="flex"
                  justifyContent="center"
                  w="100%"
                  fontSize="lg"
                  m={3}
                  mb={i == arr.length - 1 && 3}
                  color={theme.darkGray}
                  >
                    <Link to={item.href}>
                          {item.page}
                    </Link>
          
                  </ListItem>
                ))}
            </ListItem>
  )
}

export default NavSection
