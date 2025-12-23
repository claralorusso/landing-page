import * as React from "react";
import { IconButton } from "@chakra-ui/react";
import { LuMoon, LuSun } from "react-icons/lu";

const STORAGE_KEY = "marvincla-color-mode";

const ColorModeContext = React.createContext(null);

function getInitialMode() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "dark" || saved === "light") return saved;
  } catch (_) {}
  // fallback: preferenza sistema
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

    try {
      localStorage.setItem(STORAGE_KEY, colorMode);
    } catch (_) {}
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
    // fallback sicuro se qualcuno usa hook fuori provider
    return {
      colorMode: "dark",
      setColorMode: () => {},
      toggleColorMode: () => {},
    };
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
