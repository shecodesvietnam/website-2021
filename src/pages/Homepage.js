import { useContext } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import LanguageContext from "../contexts/Language";
import { assetsUrl } from "../config.json";
import { configLanguage, languageBasedDisplay } from "../utils/language";
import { simplify } from "../utils/text";
import Button from "../components/layout/Button";
import { contents } from "./contents";

function Homepage() {
  const languageContext = useContext(LanguageContext);

  return (
    <>
      <article className="bg-black px-2 lg:px-20 xl:px-28 py-16">
        <header className="mb-16 mt-10 text-gray-50">
          <h2 className="text-center">
            <span className="block mb-3 font-semibold text-6xl">
              SheCodes Vietnam
            </span>
            <span className="block text-2xl sm:text-4xl">
              {languageBasedDisplay(
                contents.intro.header.subtitle,
                languageContext.lang
              )}
            </span>
          </h2>
        </header>
        <p className="text-gray-50 text-xl text-justify px-5 w-full xl:w-3/4 2xl:w-2/3 mx-auto">
          {languageBasedDisplay(
            contents.intro.description,
            languageContext.lang
          )}
        </p>
        <div className="mt-16 flex flex-col items-center justify-center">
          <Button>
            <Link to="/hackathon/2021">
              {languageBasedDisplay(
                configLanguage(
                  "Tham gia Hackathon 2021",
                  "Join Hackathon 2021"
                ),
                languageContext.lang
              )}
            </Link>
          </Button>
        </div>
      </article>
      <article className="grid grid-cols-4 xl:grid-cols-3 gap-6 bg-black-light px-5 sm:px-14 py-16 sm:py-24">
        <section className="object-cover relative col-span-4 xl:col-span-3">
          <Link
            to={contents.programs.hackathon.link}
            className="block group hover:shadow-2xl transition duration-500 ease-in-out transform hover:-translate-y-2"
          >
            <img
              src={contents.programs.hackathon.imgSrc}
              className="rounded-3xl min-h-full"
              alt="Hackathon"
            />
            <div className="absolute top-0 left-0 z-40 w-full h-full bg-black bg-opacity-60 rounded-3xl">
              <div className="text-gray-50 w-1/3 pl-5 pt-6">
                <h3 className="text-xl sm:text-4xl lg:text-5xl mb-1 sm:mb-4">
                  <strong>{contents.programs.hackathon.title}</strong>
                </h3>
                <p className="text-justify text-lg hidden lg:block">
                  {simplify(
                    languageBasedDisplay(
                      contents.programs.hackathon.description,
                      languageContext.lang
                    ),
                    40
                  )}
                  {" ..."}
                </p>
              </div>
            </div>
          </Link>
        </section>
        <section className="object-cover col-span-4 xl:col-span-2 relative">
          <Link
            to={contents.programs.mentorship.link}
            className="block group hover:shadow-2xl transition duration-500 ease-in-out transform hover:-translate-y-2"
          >
            <img
              src={contents.programs.mentorship.imgSrc}
              className="rounded-3xl min-h-full"
              alt="Mentorship"
            />
            <div className="flex flex-col md:flex-row justify-end md:text-right absolute top-0 left-0 z-40 w-full h-full bg-black bg-opacity-60 rounded-3xl">
              <div className="text-gray-50 w-1/2 pl-5 md:pr-5 pb-6 md:pt-6">
                <h3 className="text-xl sm:text-4xl lg:text-5xl mb-1 sm:mb-4">
                  <strong>{contents.programs.mentorship.title}</strong>
                </h3>
                <p className="text-justify text-lg hidden lg:block">
                  {simplify(
                    languageBasedDisplay(
                      contents.programs.mentorship.description,
                      languageContext.lang
                    ),
                    40
                  )}
                  {" ..."}
                </p>
              </div>
            </div>
          </Link>
        </section>
        <section className="object-cover relative col-span-4 md:col-span-2 xl:col-auto">
          <Link
            to={contents.programs.techMarathon.link}
            className="block group hover:shadow-2xl transition duration-500 ease-in-out transform hover:-translate-y-2"
          >
            <img
              src={contents.programs.techMarathon.imgSrc}
              className="rounded-3xl min-h-full"
              alt="Tech Marathon"
            />
            <div className="absolute top-0 left-0 z-40 w-full h-full bg-black bg-opacity-60 rounded-3xl">
              <div className="text-gray-50 px-5 pt-6">
                <h3 className="text-xl sm:text-4xl lg:text-5xl mb-1 sm:mb-4">
                  <strong>{contents.programs.techMarathon.title}</strong>
                </h3>
                <p className="text-justify text-lg hidden lg:block">
                  {simplify(
                    languageBasedDisplay(
                      contents.programs.techMarathon.description,
                      languageContext.lang
                    ),
                    40
                  )}
                  {" ..."}
                </p>
              </div>
            </div>
          </Link>
        </section>
        <section className="object-cover relative col-span-4 md:col-span-2 xl:col-auto">
          <Link
            to={contents.programs.webinar.link}
            className="block group hover:shadow-2xl transition duration-500 ease-in-out transform hover:-translate-y-2"
          >
            <img
              src={contents.programs.webinar.imgSrc}
              className="rounded-3xl min-h-full"
              alt="Webinar"
            />
            <div className="flex flex-col justify-end absolute top-0 left-0 z-40 w-full h-full bg-black bg-opacity-60 rounded-3xl">
              <div className="text-gray-50 px-5 pb-6">
                <h3 className="text-xl sm:text-4xl lg:text-5xl mb-1 sm:mb-4">
                  <strong>{contents.programs.webinar.title}</strong>
                </h3>
                <p className="text-justify text-lg hidden lg:block">
                  {simplify(
                    languageBasedDisplay(
                      contents.programs.webinar.description,
                      languageContext.lang
                    ),
                    40
                  )}
                  {" ..."}
                </p>
              </div>
            </div>
          </Link>
        </section>
        <section className="object-cover col-span-4 xl:col-span-2 relative">
          <Link
            to={contents.programs.talentConnector.link}
            className="block group hover:shadow-2xl transition duration-500 ease-in-out transform hover:-translate-y-2"
          >
            <img
              src={contents.programs.talentConnector.imgSrc}
              className="rounded-3xl"
              alt="Talent Connector"
            />
            <div className="flex flex-col justify-end absolute top-0 left-0 z-40 w-full h-full bg-black bg-opacity-60 rounded-3xl">
              <div className="text-gray-50 w-1/2 pl-5 pb-6">
                <h3 className="text-xl sm:text-4xl lg:text-5xl mb-1 sm:mb-4">
                  <strong>{contents.programs.talentConnector.title}</strong>
                </h3>
                <p className="text-justify text-lg hidden lg:block">
                  {simplify(
                    languageBasedDisplay(
                      contents.programs.talentConnector.description,
                      languageContext.lang
                    ),
                    40
                  )}
                  {" ..."}
                </p>
              </div>
            </div>
          </Link>
        </section>
        <section className="text-gray-800 col-span-4 xl:col-span-3 bg-gradient-to-br from-malibu via-lavender to-illusion text-left sm:text-justify rounded-3xl p-14">
          <p className="text-xl sm:text-4xl">
            {languageBasedDisplay(
              configLanguage(
                `Ch??ng t??i lu??n c??? g???ng t???o ra nh???ng ch????ng tr??nh b??? ??ch, th???c t??? qua
              ???? gi??p b???n c?? ???????c nh???ng tr???i nghi???m tuy???t v???i nh???t`,
                `We always try to create useful and practical programs through which 
              to help you get the best experience.`
              ),
              languageContext.lang
            )}
          </p>
        </section>
      </article>
      <article
        className="bg-black-light"
        style={{
          backgroundImage: `url("${assetsUrl}/2020/media/homepage-secondary.png")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="bg-black bg-opacity-60 w-full h-auto py-32 sm:grid sm:grid-cols-2 text-gray-50">
          <header className="col-span-full mb-20">
            <h3 className="text-center px-2 lg:px-0 leading-tight sm:leading-none text-5xl font-semibold">
              {languageBasedDisplay(
                configLanguage(
                  `Nh???ng Con S??? Qua T???ng N??m`,
                  `The Numbers Throughout The Years`
                ),
                languageContext.lang
              )}
            </h3>
          </header>
          {contents.theNumbers.map((theNumber, index) => (
            <section key={index} className="text-center mb-12 w-2/3 mx-auto">
              <p className="text-6xl">{theNumber.quantity}</p>
              <p className="text-2xl w-2/3 mx-auto">
                {languageBasedDisplay(theNumber.title, languageContext.lang)}
              </p>
            </section>
          ))}
        </div>
      </article>
    </>
  );
}

export default Homepage;
