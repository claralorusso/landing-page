import React from "react";
import {
  Box,
  Container,
  Flex,
  Text,
  HStack,
  Link as ChakraLink,
  VStack,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const COLORS = {
  bg: "#0F1114",
  border: "rgba(255,255,255,0.10)",
  text: "rgba(255,255,255,0.82)",
  muted: "rgba(255,255,255,0.58)",
};

const NAV = [
  { label: "Home", href: "/#home" },
  { label: "Filiera", href: "/#filiera" },
  { label: "Servizi", href: "/#servizi" },
  { label: "Perché", href: "/#perche" },
  { label: "ColdSharing", href: "/#coldsharing" },
  { label: "Contatti", href: "/#contatti" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <Box
      as="footer"
      bg={COLORS.bg}
      borderTop="1px solid"
      borderColor={COLORS.border}
      mt={24}
    >
      <Container maxW="6xl" px={[4, 6, 8]} py={[8, 10]}>
        <Flex
          direction={["column", "column", "row"]}
          align={["flex-start", "flex-start", "center"]}
          justify="space-between"
          gap={6}
        >
          <VStack align="flex-start" spacing={3}>
            <Text fontWeight="900" letterSpacing="-0.4px">
              Marvincla
            </Text>

            <Text fontSize="sm" color={COLORS.muted} maxW="42ch">
              Dalla terra al digitale. Strategia, prodotto e filiera prima della tecnologia.
            </Text>

            <Box>
              <Text fontSize="sm" color={COLORS.text} fontWeight="600">
                Sedi
              </Text>

              <Text fontSize="sm" color={COLORS.muted}>
                Bari
              </Text>

              <Text fontSize="sm" color={COLORS.muted}>
                Roma
              </Text>
            </Box>
          </VStack>

          <HStack spacing={5} flexWrap="wrap">
            {NAV.map((item) => (
              <ChakraLink
                key={item.href}
                href={item.href}
                fontSize="sm"
                color={COLORS.text}
                _hover={{ color: "white" }}
              >
                {item.label}
              </ChakraLink>
            ))}
          </HStack>
        </Flex>

        <Flex
          mt={6}
          pt={4}
          borderTop="1px solid"
          borderColor="rgba(255,255,255,0.06)"
          direction={["column", "column", "row"]}
          align={["flex-start", "flex-start", "center"]}
          justify="space-between"
          gap={3}
        >
          <Text fontSize="sm" color={COLORS.muted}>
            © {year} Marvincla SRL — Tutti i diritti riservati | P.IVA 08760160724 – REA BA 648160 – C.S. €10.000 i.v.
          </Text>

          <HStack spacing={4} flexWrap="wrap">
            <ChakraLink
              as={RouterLink}
              to="/privacy"
              fontSize="sm"
              color={COLORS.muted}
              _hover={{ color: "white" }}
            >
              Privacy
            </ChakraLink>

            <ChakraLink
              as={RouterLink}
              to="/cookies"
              fontSize="sm"
              color={COLORS.muted}
              _hover={{ color: "white" }}
            >
              Cookie
            </ChakraLink>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}
