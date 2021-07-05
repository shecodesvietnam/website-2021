import { useContext } from "react";

import { configLanguage, languageBasedDisplay } from "./../../utils/language";
import LanguageContext from "../../contexts/Language";

function Footer() {
  const languageContext = useContext(LanguageContext);

  return (
    <footer className="bg-gray-200 py-2 px-2">
      <p className="text-center">
        &copy;{" "}
        {languageBasedDisplay(
          configLanguage(
            "Thiết kế và phát triển với 💖 bởi SheCodes Việt Nam",
            "Design and Develop with 💖 by SheCodes Vietnam"
          ),
          languageContext.lang
        )}
      </p>
    </footer>
  );
}

export default Footer;
