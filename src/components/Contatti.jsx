import React from "react";
import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Text,
  VStack,
  HStack,
  Link as ChakraLink,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Checkbox,
  Button,
  Divider,
  Badge,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const COLORS = {
  bg: "#0F1114",
  panel: "rgba(255,255,255,0.04)",
  border: "rgba(230,234,238,0.14)",
  text: "#FFFFFF",
  muted: "rgba(255,255,255,0.72)",
  lime: "#B7FF2A",
  ctaText: "#061006",
};

export default function Contatti() {
  function onSubmit(e) {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const nome = form.get("nome")?.toString() || "";
    const azienda = form.get("azienda")?.toString() || "";
    const email = form.get("email")?.toString() || "";
    const telefono = form.get("telefono")?.toString() || "";
    const dettagli = form.get("dettagli")?.toString() || "";

    const subject = encodeURIComponent("Richiesta contatto — Marvincla");
    const body = encodeURIComponent(
      `Nome: ${nome}\nAzienda: ${azienda}\nEmail: ${email}\nTelefono: ${telefono}\n\nDettagli:\n${dettagli}`
    );

    window.location.href = `mailto:marvinclasrl@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <Box bg={COLORS.bg} color={COLORS.text} minH="100dvh">
      <Navbar />

      {/* HERO */}
      <Box
        borderBottom="1px solid"
        borderColor={COLORS.border}
        bgGradient="radial(900px 520px at 20% 25%, rgba(183,255,42,0.12), transparent 55%), radial(900px 520px at 85% 75%, rgba(255,138,0,0.10), transparent 55%)"
      >
        <Container maxW="7xl" py={{ base: 10, md: 14 }}>
          <VStack align="start" spacing={3}>
            <Badge
              px={3}
              py={1}
              borderRadius="999px"
              bg="rgba(255,255,255,0.06)"
              border="1px solid rgba(255,255,255,0.12)"
              color="rgba(255,255,255,0.85)"
              fontWeight="800"
              letterSpacing="0.08em"
            >
              CONTATTI
            </Badge>

            <Heading
              as="h1"
              fontSize={{ base: "36px", md: "54px" }}
              lineHeight={{ base: "1.05", md: "1.02" }}
              letterSpacing="-0.02em"
              fontWeight="950"
            >
              Get in touch!
            </Heading>

            <Heading
              as="h2"
              fontSize={{ base: "18px", md: "22px" }}
              fontWeight="800"
              color="rgba(255,255,255,0.88)"
            >
              Contattaci per una consulenza
            </Heading>

            <Text maxW="72ch" color={COLORS.muted} fontSize={{ base: "15px", md: "16px" }} lineHeight="1.7">
              Marvincla aiuta le aziende della filiera agroalimentare a diventare più visibili, più connesse e più solide:
              siti, e-commerce, campagne e dati. Raccontaci dove sei oggi e cosa vuoi ottenere: ti rispondiamo con un primo
              feedback operativo.
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* CONTENT */}
      <Container maxW="7xl" py={{ base: 10, md: 14 }}>
        <Grid templateColumns={{ base: "1fr", lg: "1.15fr 0.85fr" }} gap={{ base: 8, lg: 10 }}>
          {/* FORM */}
          <GridItem>
            <Box
              bg={COLORS.panel}
              border="1px solid"
              borderColor="rgba(255,255,255,0.10)"
              borderRadius="24px"
              p={{ base: 5, md: 7 }}
              boxShadow="0 25px 110px rgba(0,0,0,.45)"
            >
              <VStack align="start" spacing={2} mb={5}>
                <Heading as="h3" fontSize={{ base: "18px", md: "20px" }} fontWeight="950">
                  Contattaci per un preventivo
                </Heading>
              </VStack>

              <form onSubmit={onSubmit}>
                <VStack spacing={4} align="stretch">
                  <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4}>
                    <FormControl isRequired>
                      <FormLabel color="rgba(255,255,255,0.78)" fontSize="13px">
                        Nome
                      </FormLabel>
                      <Input
                        name="nome"
                        placeholder="Es. Mario Rossi"
                        borderRadius="16px"
                        borderColor="rgba(255,255,255,0.12)"
                        bg="rgba(0,0,0,0.25)"
                        _focus={{ borderColor: "rgba(183,255,42,0.45)" }}
                      />
                    </FormControl>

                    <FormControl>
                      <FormLabel color="rgba(255,255,255,0.78)" fontSize="13px">
                        Nome attività
                      </FormLabel>
                      <Input
                        name="azienda"
                        placeholder="Es. Azienda Agricola XYZ"
                        borderRadius="16px"
                        borderColor="rgba(255,255,255,0.12)"
                        bg="rgba(0,0,0,0.25)"
                        _focus={{ borderColor: "rgba(183,255,42,0.45)" }}
                      />
                    </FormControl>
                  </Grid>

                  <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4}>
                    <FormControl isRequired>
                      <FormLabel color="rgba(255,255,255,0.78)" fontSize="13px">
                        Email
                      </FormLabel>
                      <Input
                        type="email"
                        name="email"
                        placeholder="nome@azienda.it"
                        borderRadius="16px"
                        borderColor="rgba(255,255,255,0.12)"
                        bg="rgba(0,0,0,0.25)"
                        _focus={{ borderColor: "rgba(183,255,42,0.45)" }}
                      />
                    </FormControl>

                    <FormControl>
                      <FormLabel color="rgba(255,255,255,0.78)" fontSize="13px">
                        Telefono
                      </FormLabel>
                      <Input
                        name="telefono"
                        placeholder="+39 …"
                        borderRadius="16px"
                        borderColor="rgba(255,255,255,0.12)"
                        bg="rgba(0,0,0,0.25)"
                        _focus={{ borderColor: "rgba(183,255,42,0.45)" }}
                      />
                    </FormControl>
                  </Grid>

                  <FormControl isRequired>
                    <FormLabel color="rgba(255,255,255,0.78)" fontSize="13px">
                      Dettagli
                    </FormLabel>
                    <Textarea
                      name="dettagli"
                      rows={6}
                      placeholder="Cosa vuoi ottenere? Es. più contatti, e-commerce B2B, campagne Google Ads, dashboard, dati…"
                      borderRadius="16px"
                      borderColor="rgba(255,255,255,0.12)"
                      bg="rgba(0,0,0,0.25)"
                      _focus={{ borderColor: "rgba(183,255,42,0.45)" }}
                    />
                  </FormControl>

                  <Checkbox
                    isRequired
                    colorScheme="green"
                    sx={{
                      ".chakra-checkbox__control": {
                        borderColor: "rgba(255,255,255,0.25)",
                        bg: "rgba(0,0,0,0.25)",
                      },
                    }}
                  >
                    <Text fontSize="13px" color="rgba(255,255,255,0.72)">
                      Dichiaro di aver preso visione dell’{" "}
                      <ChakraLink href="/privacy" textDecoration="underline" color="rgba(255,255,255,0.88)">
                        informativa privacy
                      </ChakraLink>
                      .
                    </Text>
                  </Checkbox>

                  <Button
                    type="submit"
                    bg={COLORS.lime}
                    color={COLORS.ctaText}
                    borderRadius="999px"
                    fontWeight="900"
                    height="46px"
                    _hover={{ filter: "brightness(1.05)" }}
                  >
                    Invia la richiesta
                  </Button>

                  <Text fontSize="12px" color="rgba(255,255,255,0.55)">
                    *Il form apre il tuo client email. In alternativa: <b>marvinclasrl@gmail.com</b>*
                  </Text>
                </VStack>
              </form>
            </Box>
          </GridItem>

          {/* INFO */}
          <GridItem>
            <Box
              bg={COLORS.panel}
              border="1px solid"
              borderColor="rgba(255,255,255,0.10)"
              borderRadius="24px"
              p={{ base: 5, md: 7 }}
              boxShadow="0 25px 110px rgba(0,0,0,.45)"
            >
              <Heading as="h3" fontSize={{ base: "16px", md: "18px" }} fontWeight="950" mb={4}>
                Info
              </Heading>

              <VStack align="stretch" spacing={4}>
                <Box>
                  <Text fontSize="12px" color={COLORS.muted} fontWeight="900" letterSpacing="0.12em">
                    EMAIL
                  </Text>
                  <ChakraLink href="mailto:marvinclasrl@gmail.com" fontWeight="800">
                    marvinclasrl@gmail.com
                  </ChakraLink>
                </Box>

                <Divider borderColor="rgba(255,255,255,0.10)" />

                <Box>
                  <Text fontSize="12px" color={COLORS.muted} fontWeight="900" letterSpacing="0.12em">
                    TELEFONO
                  </Text>
                  <ChakraLink href="tel:+393331800400" fontWeight="800">
                    +39 333 180 0400
                  </ChakraLink>
                </Box>

                <Divider borderColor="rgba(255,255,255,0.10)" />

                <Box>
                  <Text fontSize="12px" color={COLORS.muted} fontWeight="900" letterSpacing="0.12em">
                    WHATSAPP
                  </Text>
                  <ChakraLink
                    href="https://wa.me/393331800400?text=Ciao%20Marvincla%2C%20vorrei%20informazioni%20su%20servizi%20digitali%20per%20il%20settore%20agroalimentare."
                    isExternal
                    fontWeight="800"
                  >
                    Messaggio veloce
                  </ChakraLink>
                </Box>

                <Divider borderColor="rgba(255,255,255,0.10)" />

                <Box>
                  <Text fontSize="12px" color={COLORS.muted} fontWeight="900" letterSpacing="0.12em">
                    NOTE
                  </Text>
                  <Text fontSize="14px" color="rgba(255,255,255,0.72)" lineHeight="1.6">
                    Se vuoi, indicaci: obiettivo, prodotti, area geografica e canali attuali. Ti rispondiamo con priorità e
                    prossimi step.
                  </Text>
                </Box>
              </VStack>
            </Box>
          </GridItem>
        </Grid>
      </Container>

      <Footer />
    </Box>
  );
}
