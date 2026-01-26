import { Outlet } from "react-router-dom";
import { LanguageProvider } from "./contexts/language-context";
import { Toaster } from "./components/ui/toaster/toaster";

import "./styles/reset.css";
import "./styles/global.css";
import "./styles/tokens/keyframes.css";
import "./styles/tokens/animations.css";
import "./styles/tokens/colors.css";
import "./styles/tokens/decorations.css";
import "./styles/tokens/spacings.css";
import "./styles/tokens/typography.css";
import "./styles/theme.css";

export default function RootLayout() {
  return (
    <LanguageProvider>
      <Outlet />
      <Toaster />
    </LanguageProvider>
  );
}
