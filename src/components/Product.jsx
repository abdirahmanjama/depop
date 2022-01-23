import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/layout";
import React, { useState } from "react";
import { Image, IconButton, LinkBox } from "@chakra-ui/react";
import { MdThumbUpOffAlt } from "react-icons/md";
import fallback from "./fallback.png";

function Product({ brand, size, price, img, sold }) {
  const [toggleLikeButton, setToggleLikeButton] = useState(false);

  const handleLikeButton = () => {
    setToggleLikeButton(!toggleLikeButton);
  };

  const homogeniseSizeValue = (size) => {
    if (size.toLowerCase().startsWith("size")) {
      return size.charAt(0).toUpperCase() + size.slice(1);
    } else {
      return "Size " + size;
    }
  };

  return (
    <LinkBox>
      <Flex
        flexDirection="column"
        gap="0"
        mb={0}
        border="2px"
        borderColor="gray.300"
        bgColor="white"
      >
        <Box zIndex="1" position="relative">
          <Image
            src={img}
            fallbackSrc={fallback}
            alt="image"
            htmlHeight={100}
            htmlWidth={350}
            filter={sold == true ? "brightness(35%)" : "brightness(100%)"}
          />
          {sold == true ? (
            <Heading
              position="absolute"
              textAlign="center"
              top="50%"
              left="25%"
              right="25%"
              textColor="white"
              fontSize="3xl"
            >
              Sold
            </Heading>
          ) : (
            ""
          )}

          {toggleLikeButton === false ? (
            <IconButton
              position="absolute"
              size="sm"
              top="6px"
              right="5px"
              icon={<MdThumbUpOffAlt />}
              backgroundColor="white"
              onClick={handleLikeButton}
            />
          ) : (
            <IconButton
              position="absolute"
              size="sm"
              top="6px"
              right="5px"
              icon={<MdThumbUpOffAlt />}
              backgroundColor="red"
              color="white"
              onClick={handleLikeButton}
            />
          )}
        </Box>
        <Stack gap={0} padding={2}>
          <Text fontSize="sm">{brand}</Text>
          <Flex justifyContent="space-between" paddingRight="5">
            <Text fontWeight="bold" fontSize="sm">
              £{price}
            </Text>
            <Text fontSize="sm">{homogeniseSizeValue(size)}</Text>
          </Flex>
        </Stack>
      </Flex>
    </LinkBox>
  );
}

export default Product;
