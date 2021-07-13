import { useContext, useCallback, useState } from "react";
import { Link as Href } from "react-router-dom";

import { configLanguage, languageBasedDisplay } from "./../../utils/language";
import LanguageContext from "../../contexts/Language";
import { assetsUrl } from "../../config.json";
import LangPicker from "../lang/LangPicker";
import { Facebook, Instagram, Linkedin } from "./../icons";

const socialMedia = [
  {
    link: "https://www.facebook.com/shecodesvietnam/",
    Icon: Facebook,
  },
  {
    link: "https://www.instagram.com/Shecodes.vietnam/",
    Icon: Instagram,
  },
  {
    link: "https://www.linkedin.com/company/shecodeshackathon/",
    Icon: Linkedin,
  },
];

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
    (className) => (obj, index) =>
      createLink(
        index,
        `mx-auto
        text-xl
        mb-2
        lg:text-xs
        xl:text-sm
        text-gray-300 
        transition 
        duration-500 
        ease-in-out 
        transform 
        hover:text-gray-50
        hover:scale-110 
        ${className ? className : ""}`,
        routeMapping[obj].route,
        languageBasedDisplay(routeMapping[obj].name, languageContext.lang)
      ),
    [routeMapping, languageContext.lang]
  );

  const renderLogo = useCallback(
    (className) => (
      <Href to={routeMapping[routeMappingKeys[0]].route} className={className}>
        <img src={`${assetsUrl}/2021/commons/logo.png`} alt="SheCodes Logo" />
      </Href>
    ),
    [routeMappingKeys, routeMapping]
  );

  return (
    <>
      <header
        id="header"
        className="bg-black bg-opacity-80 bg-blur-lg sticky top-0 z-50 py-1 px-2 w-auto"
      >
        <nav className="text-xs xl:text-base hidden lg:w-11/12 xl:w-10/12 lg:mx-auto lg:flex lg:items-center lg:justify-between">
          {renderLogo(
            "block w-32 transition duration-500 ease-in-out transform hover:scale-110 mr-10"
          )}
          <ul className="flex justify-center">
            {routeMappingKeys
              .slice(1, routeMappingKeys.slice(1).length)
              .map(map("mr-5"))}
            {routeMappingKeys
              .slice(routeMappingKeys.slice(1).length)
              .map(map())}
          </ul>
          <div className="flex items-center">
            {socialMedia.map(({ link, Icon }, index) => (
              <a key={index} href={link} className="block mr-3">
                <Icon
                  color="#ededed"
                  className="w-7 h-7 md:w-6 md:h-6 transition duration-500 ease-in-out transform hover:scale-110"
                />
              </a>
            ))}
            <LangPicker className="justify-end" />
          </div>
        </nav>

        <nav className="text-base py-1 px-2 lg:hidden">
          <div className="relative z-50 flex justify-between items-center">
            {renderLogo(
              "block w-1/4 transition duration-500 ease-in-out transform hover:scale-110"
            )}
            <button className="outline-none" onClick={handleToggleMenu}>
              <svg
                className="w-5"
                fill={menuOpened ? "#ededed" : "#fbfbfd"}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M 3 5 A 1.0001 1.0001 0 1 0 3 7 L 21 7 A 1.0001 1.0001 0 1 0 21 5 L 3 5 z M 3 11 A 1.0001 1.0001 0 1 0 3 13 L 21 13 A 1.0001 1.0001 0 1 0 21 11 L 3 11 z M 3 17 A 1.0001 1.0001 0 1 0 3 19 L 21 19 A 1.0001 1.0001 0 1 0 21 17 L 3 17 z" />
              </svg>
            </button>
          </div>
          <div
            className={`absolute pr-2 leading-9 bg-black bg-opacity-90 bg-blur-lg z-0 w-screen left-0 h-screen text-right text-xl ${
              menuOpened
                ? "transition duration-500 ease-in transform translate-y-0 opacity-100"
                : "transition duration-500 ease-out transform -translate-y-full opacity-0"
            }`}
          >
            <ul>{routeMappingKeys.slice(1).map(map())}</ul>
            <div className="bg-transparent mt-2">
              <div className="flex justify-end items-center pb-2">
                {socialMedia.map(({ link, Icon }, index) => {
                  let className = "block ";
                  if (index !== socialMedia.length - 1) className += "mr-3";

                  return (
                    <a key={index} href={link} className={className}>
                      <Icon
                        color="#ededed"
                        className="w-7 h-7 md:w-6 md:h-6 transition duration-500 ease-in-out transform hover:scale-110"
                      />
                    </a>
                  );
                })}
              </div>
              <div className="flex justify-end">
                <p className="text-gray-50 mr-5">
                  {languageBasedDisplay(
                    configLanguage("Chọn ngôn ngữ", "Choose a language"),
                    languageContext.lang
                  )}
                </p>
                <LangPicker className="justify-end" />
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
