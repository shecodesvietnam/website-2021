import { useContext } from "react";

import LanguageContext from "../../contexts/Language";
import theUKFlag from "./../../assets/Flag_of_the_United_Kingdom.svg";
import vietnamFlag from "./../../assets/Flag_of_Vietnam.svg";

function LangPicker({ className = "" }) {
  const languageContext = useContext(LanguageContext);

  function handleVietnamese() {
    languageContext.setLang("vn");
  }

  function handleEnglish() {
    languageContext.setLang("en");
  }

  return (
    <div className={`flex ${className}`}>
      <button className="w-8 mr-2" onClick={handleVietnamese}>
        <img
          className="min-w-full h-auto rounded transition duration-500 ease-in-out transform hover:scale-110"
          src={vietnamFlag}
          alt="vietnam flag"
        />
      </button>
      <button className="w-8" onClick={handleEnglish}>
        <img
          className="min-w-full h-auto rounded transition duration-500 ease-in-out transform hover:scale-110"
          src={theUKFlag}
          alt="the uk flag"
        />
      </button>
    </div>
  );
}

export default LangPicker;
