import { useLocalStorage } from "./useLocalStorage";
import { useEffect } from "react";

export const useDarkMode = (key, initialState) => {
  const [isDark, setIsDark] = useLocalStorage(key, initialState);

  useEffect(() => {
    isDark
      ? document.body.classList.add("dark-mode")
      : document.body.classList.remove("dark-mode");
  }, [isDark]);

  return [isDark, setIsDark];
};
