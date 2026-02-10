import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToSection() {
  const { pathname } = useLocation();

  useEffect(() => {
    // "/" means home
    const sectionId = pathname === "/" ? "home" : pathname.slice(1);

    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [pathname]);

  return null;
}
