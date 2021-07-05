import { useContext, useCallback, useState } from "react";
import { Link as Href } from "react-router-dom";

import LanguageContext from "../../contexts/Language";
import { languageBasedDisplay } from "../../utils/language";
import { assetsUrl } from "../../config.json";
import menuIcon from "./../../assets/menu.svg";
import closeIcon from "./../../assets/close.svg";

function createLink(key, className, to, content) {
  return (
    <li key={key} className={className}>
      <Href to={to}>{content}</Href>
    </li>
  );
}

function Header({ routeMapping }) {
  const languageContext = useContext(LanguageContext);
  const routeMappingKeys = Object.keys(routeMapping);
  const [menuOpened, setMenuOpened] = useState(false);

  function handleToggleMenu() {
    setMenuOpened(!menuOpened);
  }

  const map = useCallback(
    (obj, index) =>
      createLink(
        index,
        "mx-auto text-black transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110",
        routeMapping[obj].route,
        languageBasedDisplay(routeMapping[obj].name, languageContext.lang)
      ),
    [routeMapping, languageContext.lang]
  );

  const renderLogo = useCallback(
    (className) => (
      <Href to={routeMappingKeys[0].route} className={className}>
        <img src={`${assetsUrl}/2021/commons/logo.png`} alt="SheCodes Logo" />
      </Href>
    ),
    [routeMappingKeys]
  );

  return (
    <header>
      <nav className="bg-white text-xs xl:text-base fixed py-5 z-50 hidden lg:w-auto lg:grid lg:grid-cols-3 lg:items-center">
        <ul className="grid grid-cols-3 items-center justify-items-center">
          {routeMappingKeys.slice(1, routeMappingKeys.length / 2 + 1).map(map)}
        </ul>
        {renderLogo(
          "block mx-auto w-1/3 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
        )}
        <ul className="grid grid-cols-3 items-center justify-items-center">
          {routeMappingKeys.slice(routeMappingKeys.length / 2 + 1).map(map)}
        </ul>
      </nav>
      <nav className="bg-white text-base fixed z-50 py-1 px-2 lg:hidden">
        <div className="flex justify-between items-center">
          {renderLogo(
            "block w-1/4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          )}
          <button onClick={handleToggleMenu}>
            <img
              className="w-5"
              src={menuOpened ? closeIcon : menuIcon}
              alt="Menu Icon"
            />
          </button>
        </div>
        <ul
          className={`text-right text-xl ${
            menuOpened
              ? "transition duration-100 ease-in transform opacity-100 h-screen visible leading-10 pt-10"
              : "transition duration-100 ease-out transform opacity-0 h-0 invisible"
          }`}
        >
          {routeMappingKeys.slice(1).map(map)}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
