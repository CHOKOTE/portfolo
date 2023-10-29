import React, { useEffect, useState } from "react";

const useThemeSwitcher = () => {
  const [mode, setMode] = useState("");
  const preferDarkQuery = "(prefer-color-scheme: dark)";
  
  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);
    const userPref = window.localStorage.getItem("theme");
    console.log(userPref)

    const handleChange = () => {
      if (userPref) {
        let check = userPref === "dark" ? "dark" : "light";
        console.log(check)
        setMode(check);
        if (check) {
          document.documentElement.classList.add = "dark";
        } else document.documentElement.classList.remove = "dark";
      } else {
        console.log("hello world")
        let check = mediaQuery.matches ? "dark" : "light";
        setMode(check);
        console.log(check)
        if (check) {
          document.documentElement.classList.add = "dark";
        } else document.documentElement.classList.remove = "dark";
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange );
  }, []);

  useEffect(() => {
    if (mode === "dark") {
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add = "dark";
    } else {
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove = "dark";
    }
  }, [mode]);

  return [mode, setMode];
};

export default useThemeSwitcher;
