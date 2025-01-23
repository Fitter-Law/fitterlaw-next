import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

const useColorMode = () =&gt; {
  const [colorMode, setColorMode] = useLocalStorage("color-theme", "light");

  useEffect(() =&gt; {
    const className = "dark";
    const bodyClass = window.document.body.classList;

    colorMode === "dark"
      ? bodyClass.add(className)
      : bodyClass.remove(className);
  }, [colorMode]);

  return [colorMode, setColorMode];
};

export default useColorMode;