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
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";

const COLORS = {
  bg: "#0F1114",
  border: "rgba(255,255,255,0.10)",
  text: "rgba(255,255,255,0.82)",
  muted: "rgba(255,255,255,0.58)",
};

// ✅ Sezioni della LANDING (non includere Contatti se ora è pagina)
const LANDING_NAV = [
  { label: "Home", id: "home" },
  { label: "Filiera", id: "filiera" },
  { label: "Servizi", id: "servizi" },
  { label: "Perché", id: "perche" },
  { label: "ColdSharing", id: "coldsharing" },
];

// ✅ Link a PAGINA Contatti
const CONTACTS_PAGE = { label: "Contatti", to: "/contatti" };

export default function Footer() {
  const year = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();

  function scrollToId(id) {
    const el = document.getElementById(id);
    if (!el) return false;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    return true;
  }

  // ✅ (Punto 3) Scroll landing affidabile anche se parti da altre pagine
  function goSection(id) {
    // se siamo già in landing -> scroll diretto
    if (location.pathname === "/") {
      scrollToId(id);
      return;
    }

    // vai alla landing con hash
    navigate(`/#${id}`);

    // aspetta che la landing monti e poi scrolla
    let tries = 0;
    const timer = setInterval(() => {
      tries += 1;
      const ok = scrollToId(id);
      if (ok || tries > 30) clearInterval(timer);
    }, 50);
  }

  // ✅ (Punto 2) Contatti deve puntare alla pagina /contatti
  function goContactsPage() {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    navigate("/contatti");
  }

  return (
    <Box
      as="footer"
      bg={COLORS.bg}
      borderTop="1px solid"
      borderColor={COLORS.border}
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
              Marvincla Srl – Soluzioni digitali per aziende agroalimentari.
            </Text>
            <Text fontSize="sm" color={COLORS.muted} maxW="42ch">
              Digitalizzazione, siti web ed e-commerce B2B per aziende
              agroalimentari. Soluzioni digitali per la filiera food.
            </Text>

            <Box>
              <Text fontSize="sm" color={COLORS.text} fontWeight="600">
                Sedi
              </Text>

              <Text fontSize="sm" color={COLORS.muted}>
                Bari, Italia
              </Text>

              <Text fontSize="sm" color={COLORS.muted}>
                Roma, Italia
              </Text>
            </Box>
          </VStack>

          {/* ✅ Link: sezioni landing + Contatti pagina */}
          <HStack spacing={5} flexWrap="wrap">
            {LANDING_NAV.map((item) => (
              <ChakraLink
                key={item.id}
                as="button"
                onClick={() => goSection(item.id)}
                fontSize="sm"
                color={COLORS.text}
                _hover={{ color: "white" }}
                style={{
                  background: "none",
                  border: 0,
                  padding: 0,
                  cursor: "pointer",
                }}
              >
                {item.label}
              </ChakraLink>
            ))}

            {/* ✅ Contatti -> PAGINA */}
            <ChakraLink
              as="button"
              onClick={goContactsPage}
              fontSize="sm"
              color={COLORS.text}
              _hover={{ color: "white" }}
              style={{
                background: "none",
                border: 0,
                padding: 0,
                cursor: "pointer",
              }}
            >
              {CONTACTS_PAGE.label}
            </ChakraLink>
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
            © {year} Marvincla SRL — Tutti i diritti riservati | P.IVA
            08760160724 – REA BA 648160 – C.S. €10.000 i.v.
          </Text>

          <HStack spacing={4} flexWrap="wrap">
            <ChakraLink
              as={RouterLink}
              to="/privacy"
              onClick={() =>
                window.scrollTo({ top: 0, left: 0, behavior: "auto" })
              }
              fontSize="sm"
              color={COLORS.muted}
              _hover={{ color: "white" }}
            >
              Privacy
            </ChakraLink>

            <ChakraLink
              as={RouterLink}
              to="/cookies"
              onClick={() =>
                window.scrollTo({ top: 0, left: 0, behavior: "auto" })
              }
              fontSize="sm"
              color={COLORS.muted}
              _hover={{ color: "white" }}
            >
              Cookie
            </ChakraLink>

            <ChakraLink
              as={RouterLink}
              to="/blog"
              onClick={() =>
                window.scrollTo({ top: 0, left: 0, behavior: "auto" })
              }
              fontSize="sm"
              color={COLORS.muted}
              _hover={{ color: "white" }}
            >
              Blog
            </ChakraLink>

            <ChakraLink
              as={RouterLink}
              to="/coldsharing/perche-e-nata"
              onClick={() =>
                window.scrollTo({ top: 0, left: 0, behavior: "auto" })
              }
              fontSize="sm"
              color={COLORS.muted}
              _hover={{ color: "white" }}
            >
              Perché è nata ColdSharing
            </ChakraLink>

            <ChakraLink
              as={RouterLink}
              to="/digitalizzazione-agroalimentare"
              onClick={() =>
                window.scrollTo({ top: 0, left: 0, behavior: "auto" })
              }
              fontSize="sm"
              color={COLORS.muted}
              _hover={{ color: "white" }}
            >
              Soluzioni digitali per aziende agroalimentari
            </ChakraLink>

            {/* ✅ opzionale: link Contatti anche qui sotto */}
            <ChakraLink
              as={RouterLink}
              to="/contatti"
              onClick={() =>
                window.scrollTo({ top: 0, left: 0, behavior: "auto" })
              }
              fontSize="sm"
              color={COLORS.muted}
              _hover={{ color: "white" }}
            >
              Contatti
            </ChakraLink>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}
