import { useContext } from "react";
import { Link } from "react-router-dom";

import { configLanguage, languageBasedDisplay } from "./../../utils/language";
import LanguageContext from "../../contexts/Language";

function Footer({ secondaryRouteMapping }) {
  const languageContext = useContext(LanguageContext);
  const routeMappingKeys = Object.keys(secondaryRouteMapping);

  return (
    <footer className="bg-gray-200 py-2 px-2 w-auto sm:flex sm:flex-row-reverse sm:justify-between">
      <nav>
        <ul className="flex justify-center mb-5 sm:mb-0 sm:justify-end">
          {routeMappingKeys.map((key, index) => {
            let className = "";

            if (index !== routeMappingKeys.length - 1) className += "mr-3";

            return (
              <li
                key={index}
                className="transition duration-500 ease-in-out transform hover:scale-110"
              >
                <Link
                  to={secondaryRouteMapping[key].route}
                  className={className}
                >
                  {languageBasedDisplay(
                    secondaryRouteMapping[key].name,
                    languageContext.lang
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
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
