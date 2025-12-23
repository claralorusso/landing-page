import {
  Container,
  Heading,
  Text,
  VStack,
  Divider,
  List,
  ListItem,
  Box,
  Alert,
  AlertIcon,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Badge,
  HStack,
  Link,
} from "@chakra-ui/react";

const COLORS = {
  bg: "#0F1114",
  card: "#141820", // più scuro (niente bianco), stacca meglio dal bg
  border: "rgba(255,255,255,0.08)",
  heading: "#E6EDF3", // quasi bianco
  text: "#C9D1D9", // body leggibile
  muted: "#8B949E", // secondario
  subtle: "#6E7681", // meta/footer
  accent: "#7DD3FC", // accento soft (info)
};

const badgeStyles = {
  green: {
    bg: "rgba(34,197,94,0.14)",
    color: "#4ADE80",
    border: "1px solid rgba(34,197,94,0.35)",
  },
  blue: {
    bg: "rgba(59,130,246,0.14)",
    color: "#93C5FD",
    border: "1px solid rgba(59,130,246,0.35)",
  },
  purple: {
    bg: "rgba(168,85,247,0.14)",
    color: "#D8B4FE",
    border: "1px solid rgba(168,85,247,0.35)",
  },
};

export default function Cookies() {
  return (
    <Box bg={COLORS.bg} color={COLORS.text} minH="100vh">
      <Container maxW="6xl" py={[10, 16]}>
        <VStack align="start" spacing={6}>
          <Heading size="lg" color={COLORS.heading}>
            Cookie Policy
          </Heading>

          <Text fontSize="md" color={COLORS.text}>
            Questo sito utilizza <b>cookie tecnici</b> e, previo consenso, cookie
            <b> analitici</b> o <b>di terze parti</b> per migliorare l’esperienza di
            navigazione, analizzare il traffico e offrire funzionalità aggiuntive.
          </Text>

          <Alert
            status="info"
            borderRadius="lg"
            bg="rgba(125,211,252,0.12)"
            border="1px solid rgba(125,211,252,0.35)"
            color={COLORS.text}
          >
            <AlertIcon />
            Puoi modificare le tue preferenze in qualunque momento dal banner cookie (se presente)
            o dalle impostazioni del browser.
          </Alert>

          <Divider borderColor={COLORS.border} />

          <Heading size="md" color={COLORS.heading}>
            Tipologie di cookie utilizzati
          </Heading>

          <VStack align="start" spacing={4} fontSize="md" w="full">
            <Box
              p={5}
              bg={COLORS.card}
              borderRadius="xl"
              border="1px solid"
              borderColor={COLORS.border}
              w="full"
            >
              <HStack spacing={3} mb={2}>
                <Badge
                  {...badgeStyles.green}
                  px={2}
                  py={0.5}
                  borderRadius="md"
                  letterSpacing="0.2px"
                >
                  INDISPENSABILI
                </Badge>
                <Text as="b" color={COLORS.heading}>
                  Cookie tecnici
                </Text>
              </HStack>
              <Text color={COLORS.muted}>
                Questi cookies sono essenziali al fine di consentire di spostarsi in tutto il sito ed utilizzare
                appieno le sue caratteristiche. Senza questi cookies alcuni servizi necessari non possono
                essere fruiti.
              </Text>
            </Box>

            <Box
              p={5}
              bg={COLORS.card}
              borderRadius="xl"
              border="1px solid"
              borderColor={COLORS.border}
              w="full"
            >
              <HStack spacing={3} mb={2}>
                <Badge
                  {...badgeStyles.blue}
                  px={2}
                  py={0.5}
                  borderRadius="md"
                  letterSpacing="0.2px"
                >
                  FUNZIONALI
                </Badge>
                <Text as="b" color={COLORS.heading}>
                  Cookie funzionali
                </Text>
              </HStack>
              <Text color={COLORS.muted}>
                Consentono di offrire funzionalità avanzate come la visualizzazione di contenuti esterni
                o la condivisione sui social network.
              </Text>
            </Box>

            <Box
              p={5}
              bg={COLORS.card}
              borderRadius="xl"
              border="1px solid"
              borderColor={COLORS.border}
              w="full"
            >
              <HStack spacing={3} mb={2}>
                <Badge
                  {...badgeStyles.purple}
                  px={2}
                  py={0.5}
                  borderRadius="md"
                  letterSpacing="0.2px"
                >
                  TERZE PARTI
                </Badge>
                <Text as="b" color={COLORS.heading}>
                  Cookie di terze parti
                </Text>
              </HStack>
              <Text color={COLORS.muted}>
                Possono includere servizi di analisi come Google Analytics o plugin social per la
                condivisione dei contenuti.
              </Text>
            </Box>
          </VStack>

          <Divider borderColor={COLORS.border} />

          <Heading size="md" color={COLORS.heading}>
            Approfondimenti
          </Heading>

          <Accordion
            allowToggle
            w="full"
            border="1px solid"
            borderColor={COLORS.border}
            borderRadius="xl"
            overflow="hidden"
            bg={COLORS.card}
          >
            <AccordionItem border="none">
              <AccordionButton
                _hover={{ bg: "rgba(255,255,255,0.03)" }}
                _expanded={{ bg: "rgba(255,255,255,0.03)" }}
                _focusVisible={{ boxShadow: `0 0 0 3px rgba(125,211,252,0.25)` }}
              >
                <Box flex="1" textAlign="left" fontWeight="semibold" color={COLORS.heading}>
                  Google Analytics (terza parte)
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel color={COLORS.muted}>
                Google Analytics utilizza cookie per analizzare l’utilizzo del sito e generare report
                anonimi sulle attività.
              </AccordionPanel>
            </AccordionItem>

            <Divider borderColor={COLORS.border} />

            <AccordionItem border="none">
              <AccordionButton
                _hover={{ bg: "rgba(255,255,255,0.03)" }}
                _expanded={{ bg: "rgba(255,255,255,0.03)" }}
                _focusVisible={{ boxShadow: `0 0 0 3px rgba(125,211,252,0.25)` }}
              >
                <Box flex="1" textAlign="left" fontWeight="semibold" color={COLORS.heading}>
                  Social plugin
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel color={COLORS.muted}>
                I plugin social consentono la condivisione dei contenuti. L’utilizzo è facoltativo.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

          <Divider borderColor={COLORS.border} />

          <Heading size="md" color={COLORS.heading}>
            Gestione dei cookie
          </Heading>

          <Text fontSize="md" color={COLORS.text}>
            Puoi gestire i cookie dalle impostazioni del browser:
          </Text>

          <List spacing={1} fontSize="sm" color={COLORS.subtle}>
            <ListItem>• Chrome</ListItem>
            <ListItem>• Safari</ListItem>
            <ListItem>• Firefox</ListItem>
            <ListItem>• Edge</ListItem>
          </List>

          <Divider borderColor={COLORS.border} />

          <Text fontSize="sm" color={COLORS.subtle}>
            Contatti:{" "}
            <Link
              href="mailto:marvinclasrl@gmail.com"
              color={COLORS.heading}
              _hover={{ color: "white", textDecoration: "underline" }}
            >
              marvinclasrl@gmail.com
            </Link>
          </Text>

          <Text fontSize="sm" color={COLORS.subtle}>
            Ultimo aggiornamento: {new Date().toLocaleDateString("it-IT")}
          </Text>
        </VStack>
      </Container>
    </Box>
  );
}
