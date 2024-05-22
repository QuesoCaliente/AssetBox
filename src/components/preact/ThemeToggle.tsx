import { useEffect, useState } from "preact/hooks";
import { MdiShieldSunOutline } from "./ShieldSun";
import { MdiShieldMoonOutline } from "./ShieldMoon";

export function ThemeToggle() {
  const [isMounted, setIsMounted] = useState(false);

  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "light");
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      class={"text-brand-white-500  dark:text-brand-white-200 text-4xl"}
      onClick={handleClick}
    >
      {theme === "light" ? <MdiShieldMoonOutline /> : <MdiShieldSunOutline />}
    </button>
  );
}
