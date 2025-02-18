import { Home, Info, Globe } from "lucide-react";
import Index from "./pages/Index.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import PlanetarySystem from "./components/PlanetarySystem.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "About Us",
    to: "/about",
    icon: <Info className="h-4 w-4" />,
    page: <AboutUs />,
  },
  {
    title: "Planetary System",
    to: "/planetary-system",
    icon: <Globe className="h-4 w-4" />,
    page: <PlanetarySystem />,
  },
];
