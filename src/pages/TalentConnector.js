import { useContext } from "react";

import LanguageContext from "../contexts/Language";
import { languageBasedDisplay } from "./../utils/language";
import { contents, comingSoon } from "./contents";

function TalentConnector() {
  const languageContext = useContext(LanguageContext);

  return (
    <>
      <article className="bg-black px-2 lg:px-20 xl:px-28 py-16">
        <header className="mb-16 mt-10 text-gray-50">
          <h2 className="text-center">
            <span className="block mb-3 text-4xl sm:text-6xl font-semibold">
              {contents.programs.talentConnector.title}
            </span>
          </h2>
        </header>
        <p className="text-gray-50 text-xl text-justify px-5 w-full xl:w-3/4 2xl:w-2/3 mx-auto">
          {languageBasedDisplay(
            contents.programs.talentConnector.description,
            languageContext.lang
          )}
        </p>
        <p className="text-gray-50 flex justify-center text-4xl mt-16 pb-12">
          {languageBasedDisplay(comingSoon, languageContext.lang)}
        </p>
      </article>
      <article className="h-32 bg-black"></article>
    </>
  );
}

export default TalentConnector;
