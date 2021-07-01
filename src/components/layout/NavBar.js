import { useContext, useCallback } from "react";
import { Link as Href } from "react-router-dom";

import LanguageContext from "../../contexts/Language";
import { languageBasedDisplay } from "./../../utils/language";

function createLink(key, className, to, content) {
  return (
    <li key={key} className={className}>
      <Href to={to}>{content}</Href>
    </li>
  );
}

function NavBar({ routeMapping }) {
  const languageContext = useContext(LanguageContext);
  const routeMappingKeys = Object.keys(routeMapping);

  const map = useCallback(
    (obj, index) =>
      createLink(
        index,
        "mx-auto",
        routeMapping[obj].route,
        languageBasedDisplay(routeMapping[obj].name, languageContext.lang)
      ),
    [routeMapping, languageContext.lang]
  );

  const renderLogo = useCallback(
    (className) => (
      <Href to={routeMappingKeys[0].route}>
        <img
          className={className}
          src="https://raw.githubusercontent.com/shecodesvietnam/assets/master/2020/media/logo-2020.png"
          alt="SheCodes Logo"
        />
      </Href>
    ),
    [routeMappingKeys]
  );

  return (
    <>
      <nav className="text-white fixed z-50 p-5 hidden min-w-full xl:grid xl:grid-cols-3">
        <ul className="grid grid-cols-3">
          {routeMappingKeys.slice(1, routeMappingKeys.length / 2 + 1).map(map)}
        </ul>
        {renderLogo("block mx-auto")}
        <ul className="grid grid-cols-3">
          {routeMappingKeys.slice(routeMappingKeys.length / 2 + 1).map(map)}
        </ul>
      </nav>
      <nav className="text-white fixed z-50 p-5 min-w-full xl:hidden">
        {renderLogo("block")}
        <ul>{routeMappingKeys.map(map)}</ul>
      </nav>
    </>
  );
}

export default NavBar;
