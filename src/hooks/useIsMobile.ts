import { debounced } from "@utils/index";
import { useEffect, useRef, useState } from "react";

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 960);

  const handleResize = debounced(() => {
    setIsMobile(window.innerWidth < 960);
  }, 100);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};
