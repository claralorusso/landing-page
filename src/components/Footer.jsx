import React from "react";
import { Box, Container, Link as ChakraLink } from "@chakra-ui/react";

const COLORS = {
  bgDark: "#0F1114",
  fgSubtle: "gray.400",
  border: "rgba(230,234,238,0.12)",
  primary: "#137C6A",
  accent: "#00A6A6",
};

export default function Footer() {
  const borderColor = COLORS.border;

  return (
    <Box
      bg={COLORS.bgDark}
      color="white"
      mt={16}
      borderTop="1px solid"
      borderColor={borderColor}
    >
      <Container maxW="6xl" px={[4, 6, 8]} py={[10, 14]}></Container>
    </Box>
  );
}
