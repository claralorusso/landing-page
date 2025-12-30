import * as React from "react";
import { IconButton } from "@chakra-ui/react";
import { LuMoon, LuSun } from "react-icons/lu";

const STORAGE_KEY = "marvincla-color-mode";

// ✅ Cookiebot: persistiamo solo dopo consenso "Preferenze".
// Se Cookiebot non c'è (dev/local), consentiamo la persistenza.
function hasPreferencesConsent() {
  try {
    if (typeof window === "undefined") return false;
    if (!window.Cookiebot || !window.Cookiebot.consent) return true;
    return !!window.Cookiebot.consent.preferences;
  } catch {
    return false;
  }
}

const ColorModeContext = React.createContext(null);

function getInitialMode() {
  const canPersist = hasPreferencesConsent();

  try {
    if (!canPersist) throw new Error("no-preferences-consent");
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "dark" || saved === "light") return saved;
  } catch {
    // niente storage prima del consenso: OK
  }

  // fallback: preferenza di sistema
  if (typeof window !== "undefined" && window.matchMedia) {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  return "dark";
}

export function ColorModeProvider({ children }) {
  const [colorMode, setColorMode] = React.useState(getInitialMode);

  React.useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("dark", "light");
    root.classList.add(colorMode);

    // ✅ salva SOLO se consentito
    try {
      if (hasPreferencesConsent()) {
        localStorage.setItem(STORAGE_KEY, colorMode);
      }
    } catch {}
  }, [colorMode]);

  // ✅ Se l'utente accetta preferenze dopo, salva la scelta corrente
  React.useEffect(() => {
    function persistNow() {
      try {
        if (hasPreferencesConsent()) {
          localStorage.setItem(STORAGE_KEY, colorMode);
        }
      } catch {}
    }

    window.addEventListener?.("CookiebotOnAccept", persistNow);
    window.addEventListener?.("CookiebotOnLoad", persistNow);

    return () => {
      window.removeEventListener?.("CookiebotOnAccept", persistNow);
      window.removeEventListener?.("CookiebotOnLoad", persistNow);
    };
  }, [colorMode]);

  const toggleColorMode = React.useCallback(() => {
    setColorMode((m) => (m === "dark" ? "light" : "dark"));
  }, []);

  const value = React.useMemo(
    () => ({ colorMode, setColorMode, toggleColorMode }),
    [colorMode, toggleColorMode]
  );

  return <ColorModeContext.Provider value={value}>{children}</ColorModeContext.Provider>;
}

export function useColorMode() {
  const ctx = React.useContext(ColorModeContext);
  if (!ctx) {
    return { colorMode: "dark", setColorMode: () => {}, toggleColorMode: () => {} };
  }
  return ctx;
}

export function useColorModeValue(light, dark) {
  const { colorMode } = useColorMode();
  return colorMode === "dark" ? dark : light;
}

export function ColorModeIcon() {
  const { colorMode } = useColorMode();
  return colorMode === "dark" ? <LuMoon /> : <LuSun />;
}

export const ColorModeButton = React.forwardRef(function ColorModeButton(props, ref) {
  const { toggleColorMode } = useColorMode();
  return (
    <IconButton
      onClick={toggleColorMode}
      variant="ghost"
      aria-label="Toggle color mode"
      size="sm"
      ref={ref}
      {...props}
    >
      <ColorModeIcon />
    </IconButton>
  );
});

export const LightMode = ({ children }) => <>{children}</>;
export const DarkMode = ({ children }) => <>{children}</>;
