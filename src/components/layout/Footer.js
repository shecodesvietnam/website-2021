import { useContext } from "react";

import { configLanguage, languageBasedDisplay } from "./../../utils/language";
import LanguageContext from "../../contexts/Language";
import LangPicker from "../lang/LangPicker";
import fbLogo from "./../../assets/facebook.svg";
import instaLogo from "./../../assets/instagram.svg";
import linkedinLogo from "./../../assets/linkedin.svg";
import emailIcon from "./../../assets/gmail.svg";

const socialMedia = [
  {
    link: "https://www.facebook.com/shecodesvietnam/",
    icon: fbLogo,
  },
  {
    link: "https://www.instagram.com/Shecodes.vietnam/",
    icon: instaLogo,
  },
  {
    link: "https://www.linkedin.com/company/shecodeshackathon/",
    icon: linkedinLogo,
  },
  {
    link: "mailto:tienmai.shecodes@gmail.com",
    icon: emailIcon,
  },
];

function Footer() {
  const languageContext = useContext(LanguageContext);

  return (
    <footer className="bg-gray-50">
      <div className="mt-2 sm:mt-0 sm:grid sm:grid-cols-3 2xl:px-10 py-2 w-11/12 mx-auto border-t border-gray-200">
        <div className="flex justify-center sm:justify-start sm:grid sm:grid-cols-2 sm:w-1/2 md:w-full md:flex items-center">
          {socialMedia.map((platform, index) => (
            <a key={index} href={platform.link} className="block mr-3">
              <img
                src={platform.icon}
                alt="Facebook Logo"
                className="w-7 h-7 md:w-6 md:h-6 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              />
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
        <p className="text-center">
          &copy;{" "}
          {languageBasedDisplay(
            configLanguage(
              "Thiết kế và phát triển với 💖 bởi SheCodes Hà Nội",
              "Design and Develop with 💖 by SheCodes Hanoi"
            ),
            languageContext.lang
          )}
        </p>
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
    </footer>
  );
}

export default Footer;
