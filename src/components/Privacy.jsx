import {
  Container,
  Heading,
  Text,
  VStack,
  Divider,
  List,
  ListItem,
  Box,
  Link as ChakraLink,
} from "@chakra-ui/react";

const COLORS = {
  bg: "#0F1114",
  card: "#141820",
  border: "rgba(255,255,255,0.08)",
  heading: "#E6EDF3",
  text: "#C9D1D9",
  muted: "#8B949E",
  subtle: "#6E7681",
  accent: "#7DD3FC",
};

export default function Privacy() {
  return (
    <Box bg={COLORS.bg} color={COLORS.text} minH="100vh">
      <Container maxW="6xl" py={[10, 16]} lineHeight="tall">
        <VStack align="start" spacing={6}>
          <Heading size="lg" color={COLORS.heading}>
            Informativa sulla Privacy
          </Heading>

          <Text fontSize="md" color={COLORS.text}>
            Questa informativa descrive come <b>Marvincla S.r.l.</b> tratta i dati
            personali degli utenti nel rispetto del Regolamento (UE) 2016/679 (“<b>GDPR</b>”)
            e della normativa nazionale applicabile.
          </Text>

          <Divider borderColor={COLORS.border} />

          <Heading size="md" color={COLORS.heading}>
            Titolare del Trattamento
          </Heading>

          <Box
            w="full"
            bg={COLORS.card}
            border="1px solid"
            borderColor={COLORS.border}
            borderRadius="xl"
            p={5}
          >
            <Text fontSize="md" color={COLORS.text}>
              <b>Marvincla S.r.l.</b>
              <br />
              Via Giuseppe Semerari, 7, 70132 Bari (BA) - Italia
              <br />
              <b>Email:</b>{" "}
              <ChakraLink
                href="mailto:marvinclasrl@gmail.com"
                color={COLORS.heading}
                _hover={{ color: "white", textDecoration: "underline" }}
              >
                marvinclasrl@gmail.com
              </ChakraLink>
            </Text>
          </Box>

          <Divider borderColor={COLORS.border} />

          <Heading size="md" color={COLORS.heading}>
            Tipologie di dati trattati
          </Heading>
          <Text fontSize="md" color={COLORS.text}>
            Trattiamo, a seconda dei casi, le seguenti categorie di dati: dati anagrafici
            (nome, cognome, data di nascita), dati di contatto (email, telefono, indirizzo),
            dati professionali/aziendali (ragione sociale, P.IVA/C.F., ruolo), dati di
            navigazione e <i>Strumenti di Tracciamento</i> (cookie, dati di utilizzo),
            credenziali/account (username/ID) e ulteriori informazioni che decidi di
            fornirci attraverso form o contatti diretti.
          </Text>

          <Divider borderColor={COLORS.border} />

          <Heading size="md" color={COLORS.heading}>
            Finalità e basi giuridiche
          </Heading>
          <List spacing={2} fontSize="md" color={COLORS.text}>
            <ListItem>
              • <b>Erogazione dei servizi</b> e gestione di richieste/ordini (misure
              precontrattuali/contratto).
            </ListItem>
            <ListItem>
              • <b>Adempimenti di legge</b> (obblighi amministrativi, fiscali, contabili).
            </ListItem>
            <ListItem>
              • <b>Assistenza e supporto</b> su prodotti/servizi, gestione ticket e
              comunicazioni operative (legittimo interesse/contratto).
            </ListItem>
            <ListItem>
              • <b>Comunicazioni commerciali</b> su servizi e iniziative del Titolare
              (consenso o legittimo interesse nei limiti di legge).
            </ListItem>
            <ListItem>
              • <b>Analisi e sicurezza</b> del sito/applicazione, prevenzione di abusi e frodi
              (legittimo interesse/obbligo di legge).
            </ListItem>
          </List>

          <Divider borderColor={COLORS.border} />

          <Heading size="md" color={COLORS.heading}>
            Modalità del trattamento
          </Heading>
          <Text fontSize="md" color={COLORS.text}>
            I dati sono trattati con strumenti informatici e/o telematici secondo principi di
            liceità, trasparenza, minimizzazione e sicurezza. L’accesso ai dati è consentito
            a personale autorizzato e a soggetti terzi che forniscono servizi al Titolare
            (es. hosting, IT, consulenza, logistica, amministrazione), nominati se necessario
            <i> Responsabili del Trattamento</i>. I dati non sono diffusi.
          </Text>

          <Divider borderColor={COLORS.border} />

          <Heading size="md" color={COLORS.heading}>
            Conferimento dei dati
          </Heading>
          <Text fontSize="md" color={COLORS.text}>
            Il conferimento dei dati contrassegnati come <b>obbligatori</b> è necessario per
            fornire i servizi richiesti o adempiere a obblighi di legge: il mancato conferimento
            può impedire l’erogazione del servizio. Il conferimento per finalità promozionali è
            facoltativo (puoi revocare il consenso in ogni momento).
          </Text>

          <Divider borderColor={COLORS.border} />

          <Heading size="md" color={COLORS.heading}>
            Ambito di comunicazione
          </Heading>
          <Text fontSize="md" color={COLORS.text}>
            I dati possono essere comunicati a fornitori e partner che supportano l’erogazione
            dei servizi (es. IT, posta elettronica, pagamenti, consulenti, logistica), nonché
            ad autorità competenti ove richiesto dalla legge. L’elenco aggiornato dei
            Responsabili è disponibile su richiesta.
          </Text>

          <Divider borderColor={COLORS.border} />

          <Heading size="md" color={COLORS.heading}>
            Trasferimenti extra-UE
          </Heading>
          <Text fontSize="md" color={COLORS.text}>
            Qualora alcuni fornitori abbiano sedi extra-UE, il trasferimento avverrà nel rispetto
            del Capo V del GDPR (decisioni di adeguatezza, Clausole Contrattuali Standard o altre
            garanzie adeguate).
          </Text>

          <Divider borderColor={COLORS.border} />

          <Heading size="md" color={COLORS.heading}>
            Periodo di conservazione
          </Heading>
          <Text fontSize="md" color={COLORS.text}>
            Conserviamo i dati per il tempo strettamente necessario alle finalità indicate.
            I termini possono prolungarsi per obblighi di legge (es. contabili/fiscali) o
            fino a revoca del consenso per finalità basate su consenso. Al termine, i dati
            sono cancellati o anonimizzati.
          </Text>

          <Divider borderColor={COLORS.border} />

          <Heading size="md" color={COLORS.heading}>
            Diritti degli interessati
          </Heading>
          <List spacing={2} fontSize="md" color={COLORS.text}>
            <ListItem>• accesso, rettifica, aggiornamento;</ListItem>
            <ListItem>• cancellazione e limitazione del trattamento;</ListItem>
            <ListItem>• portabilità dei dati;</ListItem>
            <ListItem>• opposizione al trattamento (incluse comunicazioni di marketing);</ListItem>
            <ListItem>• revoca del consenso, ove il trattamento si basi sul consenso.</ListItem>
          </List>

          <Text fontSize="md" color={COLORS.text}>
            Per esercitare i diritti: scrivi a <b>marvinclasrl@gmail.com</b>. Hai inoltre
            il diritto di proporre reclamo al Garante per la protezione dei dati personali.
          </Text>

          <Divider borderColor={COLORS.border} />

          <Heading size="md" color={COLORS.heading}>
            Cookie e strumenti di tracciamento
          </Heading>
          <Text fontSize="md" color={COLORS.text}>
            Il sito utilizza cookie tecnici e, previo consenso, eventuali cookie analitici/di terze
            parti. Per maggiori dettagli e per gestire le preferenze consulta la{" "}
            <ChakraLink
              href="/cookies"
              color={COLORS.heading}
              textDecoration="underline"
              _hover={{ color: "white" }}
            >
              Cookie Policy
            </ChakraLink>
            .
          </Text>

          <Divider borderColor={COLORS.border} />

          <Heading size="md" color={COLORS.heading}>
            Modifiche all’informativa
          </Heading>
          <Text fontSize="md" color={COLORS.text}>
            Potremmo aggiornare periodicamente questa informativa. Ti invitiamo a consultare
            questa pagina per eventuali aggiornamenti rilevanti.
          </Text>

          <Text fontSize="sm" color={COLORS.subtle}>
            Ultimo aggiornamento: {new Date().toLocaleDateString("it-IT")}.
          </Text>
        </VStack>
      </Container>
    </Box>
  );
}
