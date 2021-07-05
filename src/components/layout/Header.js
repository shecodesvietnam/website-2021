import { useContext, useCallback, useState } from "react";
import { Link as Href } from "react-router-dom";

import { configLanguage, languageBasedDisplay } from "./../../utils/language";
import LanguageContext from "../../contexts/Language";
import { assetsUrl } from "../../config.json";
import LangPicker from "../lang/LangPicker";
import { Facebook, Instagram, Linkedin, Gmail } from "./../icons";

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
  {
    link: "mailto:tienmai.shecodes@gmail.com",
    Icon: Gmail,
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
    (obj, index) =>
      createLink(
        index,
        `mx-auto
        text-gray-300 
        transition 
        duration-500 
        ease-in-out 
        transform 
        hover:text-gray-50`,
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
    <>
      <div className="hidden px-2 py-1 lg:grid lg:grid-cols-2 lg:col-span-3 bg-gray-50">
        <div className="flex justify-center sm:justify-start sm:grid sm:grid-cols-2 sm:w-1/2 md:w-full md:flex items-center">
          {socialMedia.map(({ link, Icon }, index) => (
            <a key={index} href={link} className="block mr-3">
              <Icon className="w-7 h-7 md:w-6 md:h-6 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" />
            </a>
          ))}
        </div>
        <div className="sm:hidden flex justify-center my-3">
          <p className="mr-5">
            {languageBasedDisplay(
              configLanguage("Chọn ngôn ngữ", "Choose a language"),
              languageContext.lang
            )}
          </p>
          <LangPicker className="justify-end" />
        </div>
        <div className="hidden sm:flex flex-col md:flex-row items-end justify-center md:justify-end">
          <p className="md:mr-5">
            {languageBasedDisplay(
              configLanguage("Chọn ngôn ngữ", "Choose a language"),
              languageContext.lang
            )}
          </p>
          <LangPicker className="justify-end" />
        </div>
      </div>
      <header className="bg-black bg-opacity-90 sticky top-0 z-50">
        <nav className="text-xs xl:text-base hidden lg:w-auto lg:grid lg:grid-cols-3 lg:items-center">
          <ul className="grid grid-cols-3 items-center justify-items-center">
            {routeMappingKeys
              .slice(1, routeMappingKeys.length / 2 + 1)
              .map(map)}
          </ul>
          {renderLogo(
            "block mx-auto w-1/3 transition duration-500 ease-in-out transform hover:scale-110"
          )}
          <ul className="grid grid-cols-3 items-center justify-items-center">
            {routeMappingKeys.slice(routeMappingKeys.length / 2 + 1).map(map)}
          </ul>
        </nav>
        <nav className="text-base py-1 px-2 lg:hidden">
          <div className="relative z-50 flex justify-between items-center">
            {renderLogo(
              "block w-1/4 transition duration-500 ease-in-out transform hover:scale-110"
            )}
            <button onClick={handleToggleMenu}>
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
            className={`absolute pr-2 leading-9 bg-black bg-opacity-90 z-0 w-screen left-0 h-screen text-right text-xl ${
              menuOpened
                ? "transition duration-500 ease-in transform translate-y-0"
                : "transition duration-500 ease-out transform -translate-y-full"
            }`}
          >
            <ul>{routeMappingKeys.slice(1).map(map)}</ul>
            <div className="bg-transparent mt-2">
              <div className="flex justify-end items-center mb-2">
                {socialMedia.map(({ link, Icon }, index) => {
                  let className = "block ";
                  if (index !== socialMedia.length - 1) className += "mr-3";

                  return (
                    <a key={index} href={link} className={className}>
                      <Icon
                        color="#ededed"
                        className="w-7 h-7 md:w-6 md:h-6 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
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
