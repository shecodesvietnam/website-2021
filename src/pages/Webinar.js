import { useContext } from "react";

import LanguageContext from "../contexts/Language";
import { languageBasedDisplay } from "./../utils/language";
import { contents } from "./contents";

function Webinar() {
  const languageContext = useContext(LanguageContext);

  return (
    <>
      <article className="bg-black px-2 lg:px-20 xl:px-28 py-16">
        <header className="mb-16 mt-10 text-gray-50">
          <h2 className="text-center">
            <span className="block tracking-widest mb-3 text-4xl sm:text-6xl font-semibold">
              {contents.programs.webinar.title}
            </span>
          </h2>
        </header>
        <p className="text-gray-50 text-xl text-justify px-5 w-full xl:w-3/4 2xl:w-2/3 mx-auto">
          {languageBasedDisplay(
            contents.programs.webinar.description,
            languageContext.lang
          )}
        </p>
      </article>
      <article className="bg-black-light"></article>
      <article className="h-60 bg-black"></article>
      <article className="h-60 bg-black"></article>
      <article className="h-60 bg-black"></article>
      <article className="h-60 bg-black"></article>
    </>
  );
}

export default Webinar;
