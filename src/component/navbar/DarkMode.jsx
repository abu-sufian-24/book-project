import { useEffect, useState } from "react";
import { LuSun, LuMoon } from "react-icons/lu"; // Import sun and moon icons

function DarkMode() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  let element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <div onClick={() => setTheme(theme === "light" ? "dark" : "light")} className="cursor-pointer">
      {theme === "light" ? (
        <LuMoon className="text-divineGreen text-xl md:text-2xl" /> // Moon icon for dark mode
      ) : (
        <LuSun className="text-divineGreen text-xl md:text-2xl" /> // Sun icon for light mode
      )}
    </div>
  );
}

export default DarkMode;
