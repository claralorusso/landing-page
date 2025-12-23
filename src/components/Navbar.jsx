import React from "react";
import logo from "../assets/logoM.png";
import {
  Box,
  Container,
  HStack,
  Flex,
  Text,
  Button,
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
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const COLORS = {
  bgDark: "#0F1114",
  border: "rgba(230,234,238,0.14)",
  text: "#FFFFFF",
};

const NAV = [
  { id: "home", label: "Home" },
  { id: "chi-siamo", label: "Chi siamo" },
  { id: "visione", label: "Visione" },
  { id: "cosa-facciamo", label: "Cosa facciamo" },
  { id: "perche", label: "Perché" },
  { id: "coldsharing", label: "ColdSharing" },
  { id: "contatti", label: "Contatti" },
];

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function go(id) {
    const el = document.getElementById(id);
    if (!el) return;

    // chiude drawer se aperto
    onClose();

    // scroll con offset gestito da CSS (scroll-margin-top) o dal tuo layout
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const LinkItem = ({ id, children }) => (
    <ChakraLink
      href={`#${id}`}
      px={3}
      py={2}
      borderRadius="10px"
      _hover={{ bg: "rgba(255,255,255,0.06)", textDecoration: "none" }}
      onClick={(e) => {
        e.preventDefault();
        go(id);
      }}
      fontSize="14px"
      color={COLORS.text}
      opacity={0.82}
      _active={{ opacity: 1 }}
      whiteSpace="nowrap"
    >
      {children}
    </ChakraLink>
  );

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
      {/* DESKTOP */}
      <Container maxW="7xl" py={3}>
        <Flex align="center" gap={4}>
          {/* Brand */}
          <ChakraLink
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              go("home");
            }}
            _hover={{ textDecoration: "none" }}
          >
            <HStack spacing={3}>
              {/* Logo container */}
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

          {/* Link desktop */}
          <HStack spacing={1} display={{ base: "none", md: "flex" }} align="center">
            {NAV.slice(0, 6).map((l) => (
              <LinkItem key={l.id} id={l.id}>
                {l.label}
              </LinkItem>
            ))}
          </HStack>

          {/* CTA + burger */}
          <HStack spacing={3}>
            <Button
              display={{ base: "none", md: "inline-flex" }}
              bg="#B7FF2A"
              color="#061006"
              _hover={{ filter: "brightness(1.05)" }}
              borderRadius="999px"
              fontWeight="900"
              onClick={() => go("contatti")}
            >
              Parliamone
            </Button>

            <IconButton
              aria-label="Apri menu"
              icon={<HamburgerIcon />}
              display={{ base: "inline-flex", md: "none" }}
              onClick={onOpen}
              borderRadius="999px"
              bg="rgba(255,255,255,0.08)"
              border="1px solid rgba(255,255,255,0.12)"
              _hover={{ bg: "rgba(255,255,255,0.12)" }}
            />
          </HStack>
        </Flex>
      </Container>

      {/* DRAWER MOBILE */}
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
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
              <Text fontWeight="900">Marvincla</Text>
            </HStack>
          </DrawerHeader>

          <DrawerBody py={6}>
            <VStack align="stretch" spacing={2}>
              {NAV.map((l) => (
                <Button
                  key={l.id}
                  variant="ghost"
                  justifyContent="flex-start"
                  borderRadius="14px"
                  color={COLORS.text}
                  _hover={{ bg: "rgba(255,255,255,0.06)" }}
                  onClick={() => go(l.id)}
                >
                  {l.label}
                </Button>
              ))}

              <Box pt={3}>
                <Button
                  w="100%"
                  bg="#B7FF2A"
                  color="#061006"
                  borderRadius="999px"
                  fontWeight="900"
                  _hover={{ filter: "brightness(1.05)" }}
                  onClick={() => go("contatti")}
                >
                  Parliamone
                </Button>
              </Box>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
