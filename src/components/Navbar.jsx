import React from "react";
import logo from "../assets/logoM.png";
import {
  Box,
  Container,
  HStack,
  Flex,
  Text,
  IconButton,
  Link as ChakraLink,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  VStack,
  Spacer,
  Image,
  Button,
  Divider,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useLocation, useNavigate } from "react-router-dom";

const COLORS = {
  bgDark: "#0F1114",
  border: "rgba(230,234,238,0.14)",
  text: "#FFFFFF",
  muted: "rgba(255,255,255,0.72)",
};

const LANDING_NAV = [
  { id: "home", label: "Home" },
  { id: "filiera", label: "Filiera" },
  { id: "servizi", label: "Servizi" },
  { id: "perche", label: "Perché" },
  { id: "coldsharing", label: "ColdSharing" },
  { id: "ceo", label: "CEO" },
];
const PAGES_NAV = [
  { to: "/digitalizzazione-agroalimentare", label: "Soluzioni digitali per aziende agroalimentari" },
  { to: "/coldsharing/perche-e-nata", label: "Perché è nata ColdSharing" },
  { to: "/blog", label: "Blog" },
  { to: "/contatti", label: "Contatti" },
];

const NAV = [
  ...LANDING_NAV.map((x) => ({ type: x.to ? "page" : "section", ...x })),
  ...PAGES_NAV.map((x) => ({ type: "page", ...x })),
];

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [scrolled, setScrolled] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return false;
  const yOffset = -72;
  const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
  window.scrollTo({ top: y, behavior: "smooth" });
  return true;
}

function goSection(id) {
  onClose();
  if (location.pathname === "/") {
    scrollToId(id);
    return;
  }
  navigate(`/#${id}`);
}

function goPage(to) {
  onClose();
  navigate(to);
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
}


function goPage(to) {
  onClose();
  navigate(to);
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
}

  function goItem(item) {
    if (item.type === "page") return goPage(item.to);
    return goSection(item.id);
  }

  return (
    <Box
      position="sticky"
      top="0"
      zIndex="1000"
      bg={COLORS.bgDark}
      color={COLORS.text}
      borderBottom="1px solid"
      borderColor={COLORS.border}
      transition="box-shadow .2s ease, background .2s ease"
      boxShadow={scrolled ? "0 8px 24px rgba(0,0,0,0.25)" : "none"}
      backdropFilter="blur(12px)"
    >
      <Container maxW="7xl" py={3}>
        <Flex align="center" gap={4}>
          {/* Brand */}
          <ChakraLink
            href="/"
            onClick={(e) => {
              e.preventDefault();
              // Sempre home top
              if (location.pathname === "/") {
                const el = document.getElementById("home");
                el?.scrollIntoView({ behavior: "smooth", block: "start" });
              } else {
                window.location.href = "/#home";
              }
              onClose();
            }}
            _hover={{ textDecoration: "none" }}
          >
            <HStack spacing={3}>
              <Box
                w="40px"
                h="40px"
                borderRadius="999px"
                bg="rgba(255,255,255,0.08)"
                border="1px solid rgba(255,255,255,0.12)"
                display="grid"
                placeItems="center"
                overflow="hidden"
              >
                <Image
                  src={logo}
                  alt="Marvincla"
                  w="100%"
                  h="100%"
                  p="6px"
                  objectFit="contain"
                  loading="eager"
                  draggable={false}
                />
              </Box>

              <Text fontWeight="900" letterSpacing="-0.3px">
                Marvincla
              </Text>
            </HStack>
          </ChakraLink>

          <Spacer />

          {/* ✅ Hamburger sempre visibile */}
          <IconButton
            aria-label="Apri menu"
            onClick={onOpen}
            icon={<HamburgerIcon boxSize={6} color="rgba(255,255,255,0.92)" />}
            borderRadius="999px"
            bg="rgba(255,255,255,0.08)"
            border="1px solid rgba(255,255,255,0.12)"
            _hover={{ bg: "rgba(255,255,255,0.12)" }}
            _active={{ bg: "rgba(255,255,255,0.14)" }}
          />
        </Flex>
      </Container>

      {/* DRAWER MENU */}
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bg={COLORS.bgDark} color={COLORS.text}>
          <DrawerHeader borderBottomWidth="1px" borderColor={COLORS.border}>
            <HStack spacing={3}>
              <Box
                w="38px"
                h="38px"
                borderRadius="999px"
                bg="rgba(255,255,255,0.08)"
                border="1px solid rgba(255,255,255,0.12)"
                display="grid"
                placeItems="center"
                overflow="hidden"
              >
                <Image
                  src={logo}
                  alt="Marvincla"
                  w="100%"
                  h="100%"
                  p="6px"
                  objectFit="contain"
                  loading="eager"
                  draggable={false}
                />
              </Box>
              <Text fontWeight="900">Menu</Text>
            </HStack>
          </DrawerHeader>

          <DrawerBody py={6}>
            <VStack align="stretch" spacing={3}>
              {/* Sezione: Landing */}
          <VStack align="stretch" spacing={2}>
            {LANDING_NAV.map((l) => (
              <Button
                key={l.id}
                variant="ghost"
                justifyContent="flex-start"
                borderRadius="14px"
                color={COLORS.text}
                _hover={{ bg: "rgba(255,255,255,0.06)" }}
                onClick={() => goSection(l.id)}
              >
                {l.label}
              </Button>
            ))}
          </VStack>

              {/* Sezione: Pagine */}
              <Text fontSize="sm" color={COLORS.muted} fontWeight="800" letterSpacing="0.4px">
                PAGINE
              </Text>

              <VStack align="stretch" spacing={2}>
                {PAGES_NAV.map((p) => (
                  <Button
                    key={p.to}
                    variant="ghost"
                    justifyContent="flex-start"
                    borderRadius="14px"
                    color={COLORS.text}
                    _hover={{ bg: "rgba(255,255,255,0.06)" }}
                    onClick={() => goPage(p.to)}
                  >
                    {p.label}
                  </Button>
                ))}
              </VStack>

              {/* CTA in fondo */}
              <Button
                w="100%"
                bg="#B7FF2A"
                color="#061006"
                borderRadius="999px"
                fontWeight="900"
                _hover={{ filter: "brightness(1.05)" }}
                onClick={() => goPage("/contatti")}
              >
                Parliamone
              </Button>


              <Text color="rgba(255,255,255,0.55)" fontSize="xs" pt={2}>
                Suggerimento: usa “Pagine” per approfondimenti, “Sezioni” per tornare alla landing.
              </Text>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
