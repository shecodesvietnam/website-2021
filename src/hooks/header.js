import { useEffect } from "react";

export function useHeader() {
  useEffect(() => {
    const header = document.getElementById("header");
    header.classList.remove("bg-opacity-80");

    function addSticky() {
      header.classList.add("sticky");
      header.classList.add("top-0");
      header.classList.add("z-50");
    }

    function removeSticky() {
      header.classList.remove("sticky");
      header.classList.remove("top-0");
      header.classList.remove("z-50");
    }

    removeSticky();

    function detectScroll() {
      if (window.pageYOffset !== 0) removeSticky();
      else addSticky();
    }

    window.addEventListener("scroll", detectScroll);

    return () => {
      header.classList.add("bg-opacity-80");
      addSticky();
      window.removeEventListener("scroll", detectScroll);
    };
  }, []);
}
