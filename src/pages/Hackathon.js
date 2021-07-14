import { useContext } from "react";
import { Link } from "react-router-dom";
import { Player } from "video-react";

import LanguageContext from "../contexts/Language";
import { assetsUrl } from "./../config.json";
import { configLanguage, languageBasedDisplay } from "./../utils/language";
import { contents } from "./contents";

function Hackathon() {
  const languageContext = useContext(LanguageContext);

  return (
    <>
      {/* <article className="bg-black px-2 lg:px-20 xl:px-28 pt-16 pb-28">
        <header className="mb-16 mt-10 text-gray-50">
          <h2 className="text-center">
            <span className="block mb-3 text-4xl sm:text-6xl font-semibold">
              {contents.programs.hackathon.title}
            </span>
          </h2>
        </header>
        <p className="text-gray-50 text-xl text-justify px-5 w-full xl:w-3/4 2xl:w-2/3 mx-auto">
          {languageBasedDisplay(
            contents.programs.hackathon.description,
            languageContext.lang
          )}
        </p>
      </article>
      <article className="grid grid-cols-1 lg:grid-cols-2 gap-6 bg-black-light px-5 sm:px-14 py-16 sm:py-24">
        <header className="lg:col-span-2">
          <h3 className="text-gray-50 text-center mb-20">
            <span className="block font-semibold text-5xl">
              {languageBasedDisplay(
                configLanguage(
                  "Hackathon Qua Các Năm",
                  "Hackathon Throughout the Years"
                ),
                languageContext.lang
              )}
            </span>
          </h3>
        </header>
        <section className="object-cover relative">
          <Link
            to="/hackathon/2021"
            className="block group hover:shadow-2xl transition duration-500 ease-in-out transform hover:-translate-y-2"
          >
            <img
              src={`${assetsUrl}/2021/hackathon/2021.png`}
              className="rounded-3xl min-h-full"
              alt="Hackathon"
            />
            <div className="pb-3 flex flex-col justify-end absolute top-0 left-0 z-40 w-full h-full bg-black bg-opacity-60 rounded-3xl">
              <div className="text-gray-50 w-1/3 pl-5 pt-6">
                <h3 className="text-xl sm:text-4xl lg:text-5xl mb-1 sm:mb-4">
                  <strong>2021</strong>
                </h3>
              </div>
            </div>
          </Link>
        </section>
        <section className="object-cover relative">
          <Link
            to="/hackathon/2020"
            className="block group hover:shadow-2xl transition duration-500 ease-in-out transform hover:-translate-y-2"
          >
            <img
              src={`${assetsUrl}/2021/hackathon/2020.png`}
              className="rounded-3xl min-h-full"
              alt="Hackathon"
            />
            <div className="pb-3 flex flex-col justify-end absolute top-0 left-0 z-40 w-full h-full bg-black bg-opacity-60 rounded-3xl">
              <div className="text-gray-50 w-1/3 pl-5 pt-6">
                <h3 className="text-xl sm:text-4xl lg:text-5xl mb-1 sm:mb-4">
                  <strong>2020</strong>
                </h3>
              </div>
            </div>
          </Link>
        </section>
        <section className="object-cover relative">
          <Link
            to="/hackathon/2019"
            className="block group hover:shadow-2xl transition duration-500 ease-in-out transform hover:-translate-y-2"
          >
            <img
              src={`${assetsUrl}/2021/hackathon/2019.png`}
              className="rounded-3xl min-h-full"
              alt="Hackathon"
            />
            <div className="pb-3 flex flex-col justify-end absolute top-0 left-0 z-40 w-full h-full bg-black bg-opacity-60 rounded-3xl">
              <div className="text-gray-50 w-1/3 pl-5 pt-6">
                <h3 className="text-xl sm:text-4xl lg:text-5xl mb-1 sm:mb-4">
                  <strong>2019</strong>
                </h3>
              </div>
            </div>
          </Link>
        </section>
        <section className="object-cover relative">
          <Link
            to="/hackathon/2018"
            className="block group hover:shadow-2xl transition duration-500 ease-in-out transform hover:-translate-y-2"
          >
            <img
              src={`${assetsUrl}/2021/hackathon/2018.png`}
              className="rounded-3xl min-h-full"
              alt="Hackathon"
            />
            <div className="pb-3 flex flex-col justify-end absolute top-0 left-0 z-40 w-full h-full bg-black bg-opacity-60 rounded-3xl">
              <div className="text-gray-50 w-1/3 pl-5 pt-6">
                <h3 className="text-xl sm:text-4xl lg:text-5xl mb-1 sm:mb-4">
                  <strong>2018</strong>
                </h3>
              </div>
            </div>
          </Link>
        </section>
      </article> */}
      <article>
        <Player
          fluid
          playsInline
          autoPlay
          src={`${assetsUrl}/2021/hackathon/SheCodesHackathon2019.mp4`}
        />
      </article>
    </>
  );
}

export default Hackathon;
