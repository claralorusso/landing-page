import React from "react";
import {
  Box,
  Container,
  Link as ChakraLink,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
} from "@chakra-ui/react";
import { Link as RouterLink, NavLink } from "react-router-dom";

const COLORS = {
  bgDark: "#0F1114",
  border: "rgba(230,234,238,0.14)", // #E6EAEE con alpha
  primary: "#137C6A",
  accent: "#00A6A6",
  text: "#FFFFFF",
};

export default function Navbar() {
  const { isOpen, onClose } = useDisclosure();
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const LinkItem = ({ to, children }) => (
    <ChakraLink
      as={NavLink}
      to={to}
      px={3}
      py={2}
      borderRadius="8px"
      _hover={{ bg: "rgba(255,255,255,0.06)" }}
      style={({ isActive }) => ({
        background: isActive ? "rgba(0,166,166,0.18)" : "transparent",
        color: COLORS.text,
      })}
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
      transition="box-shadow .2s ease"
      boxShadow={scrolled ? "0 8px 24px rgba(0,0,0,0.25)" : "none"}
    >
      <Container maxW="7xl" py={3}></Container>

      {/* Drawer Mobile */}
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bg={COLORS.bgDark} color={COLORS.text}>
          <DrawerHeader
            borderBottomWidth="1px"
            borderColor={COLORS.border}
          ></DrawerHeader>
          <DrawerBody></DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
