import { Button } from "@chakra-ui/button";
import { Flex } from "@chakra-ui/layout";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import React from "react";
import { MdThumbUpOffAlt } from "react-icons/md";

function Navigation({ likes, likedProducts }) {
  const handleClick = () => {
    console.log("hello");
  };
  return (
    <Flex bgColor="white" justify="flex-end">
      <Menu>
        <MenuButton
          as={Button}
          onClick={handleClick}
          leftIcon={<MdThumbUpOffAlt />}
        >
          {likes}
        </MenuButton>
        <MenuList>
          {likedProducts &&
            likedProducts.map((product) => (
              <MenuItem key={JSON.stringify(product)}>{product}</MenuItem>
            ))}
        </MenuList>
      </Menu>
    </Flex>
  );
}

export default Navigation;
