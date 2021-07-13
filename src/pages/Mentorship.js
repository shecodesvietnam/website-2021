import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck";
import { useContext } from "react";
import { useFormik } from "formik";

import LanguageContext from "../contexts/Language";
import { assetsUrl } from "./../config.json";
import { configLanguage, languageBasedDisplay } from "./../utils/language";
import { contents } from "./contents";
import Button from "./../components/layout/Button";

const features = [
  configLanguage(
    "Lựu chọn mentor 1-1 có trải nghiệm và background phù hợp với nhu cầu của bạn",
    "Lựu chọn mentor 1-1 có trải nghiệm và background phù hợp với nhu cầu của bạn"
  ),
  configLanguage(
    "Nhận lời khuyên về lộ trình hướng nghiệp, các kỹ năng cần chuẩn bị, ...",
    "Nhận lời khuyên về lộ trình hướng nghiệp, các kỹ năng cần chuẩn bị, ..."
  ),
  configLanguage(
    "Được chia sẻ về cách tự học và phát triền trong lĩnh vực mà bạn mong muốn",
    "Được chia sẻ về cách tự học và phát triền trong lĩnh vực mà bạn mong muốn"
  ),
  configLanguage(
    "Liên lạc với mentor linh hoạt, không ràng buộc về thời gian",
    "Liên lạc với mentor linh hoạt, không ràng buộc về thời gian"
  ),
];

function Mentorship() {
  const languageContext = useContext(LanguageContext);
  const {
    handleSubmit,
    handleBlur,
    handleChange,
    values: { name, email, workOrSchool, positionOrMajor },
  } = useFormik({
    initialValues: {
      email: "",
      name: "",
      workOrSchool: "",
      positionOrMajor: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <article className="bg-black h-full px-2 lg:px-20 xl:px-28 pt-16 pb-28">
        <header className="mb-16 mt-10 text-gray-50">
          <h2 className="text-center">
            <span className="block mb-3 text-4xl sm:text-6xl font-semibold">
              {contents.programs.mentorship.title}
            </span>
          </h2>
        </header>
        <p className="text-gray-50 text-xl text-justify px-5 w-full xl:w-3/4 2xl:w-2/3 mx-auto">
          {languageBasedDisplay(
            contents.programs.mentorship.description,
            languageContext.lang
          )}
        </p>
      </article>
      <article className="bg-black-light px-5 sm:px-14 py-16 sm:py-24">
        <section className="relative rounded-3xl">
          <img
            className="block rounded-3xl min-h-full"
            src={`${assetsUrl}/2021/mentorship/landing.jpeg`}
            alt="Mentored"
          />
          <div className="absolute top-0 left-0 w-full h-full rounded-3xl bg-black bg-opacity-60 z-40" />
        </section>
        <section className="mt-24 md:mt-44">
          <h3 className="text-gray-50 text-center text-3xl sm:text-5xl font-semibold">
            Find a mentor who believes in you, your life will change forever
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 px-2 sm:px-14 lg:px-32 mt-20 text-xl">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start text-gray-50">
                <FontAwesomeIcon icon={faCheck} />
                <p className="ml-5">
                  {languageBasedDisplay(feature, languageContext.lang)}
                </p>
              </div>
            ))}
          </div>
        </section>
      </article>
      <article className="px-5 sm:px-14 py-16 sm:py-24 text-gray-50">
        <h3 className="text-center text-3xl sm:text-5xl font-semibold">
          {languageBasedDisplay(
            configLanguage(
              "Nhận thông báo về chương trình",
              "Register to get notified"
            ),
            languageContext.lang
          )}
        </h3>
        <form
          onSubmit={handleSubmit}
          className="w-full md:w-5/6 lg:w-2/3 xl:w-7/12 mx-auto"
        >
          <div className="mb-10 mt-16">
            <label htmlFor="email" className="block text-sm font-bold mb-2">
              Email
            </label>
            <input
              className="bg-transparent appearance-none border border-gray-800 focus:border-gray-400 rounded w-full py-2 px-3 leading-tight focus:outline-none"
              id="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={email}
            />
          </div>
          <div className="mb-10">
            <label htmlFor="name" className="block text-sm font-bold mb-2">
              {languageBasedDisplay(
                configLanguage("Họ Tên", "Full Name"),
                languageContext.lang
              )}
            </label>
            <input
              className="bg-transparent appearance-none border border-gray-800 focus:border-gray-400 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={name}
            />
          </div>
          <div className="mb-10">
            <label
              htmlFor="workOrSchool"
              className="block text-sm font-bold mb-2"
            >
              {languageBasedDisplay(
                configLanguage("Trường học/Công ty làm việc", "School/Company"),
                languageContext.lang
              )}
            </label>
            <input
              className="bg-transparent appearance-none border border-gray-800 focus:border-gray-400 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="workOrSchool"
              name="workOrSchool"
              onChange={handleChange}
              onBlur={handleBlur}
              value={workOrSchool}
            />
          </div>
          <div className="mb-10">
            <label
              htmlFor="positionOrMajor"
              className="block text-sm font-bold mb-2"
            >
              {languageBasedDisplay(
                configLanguage("Vị trí làm việc/Ngành học", "Position/Major"),
                languageContext.lang
              )}
            </label>
            <input
              className="bg-transparent appearance-none border border-gray-800 focus:border-gray-400 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="positionOrMajor"
              name="positionOrMajor"
              onChange={handleChange}
              onBlur={handleBlur}
              value={positionOrMajor}
            />
          </div>
          <div className="flex justify-center">
            <Button type="submit" className="px-7">
              {languageBasedDisplay(
                configLanguage("Gửi", "Submit"),
                languageContext.lang
              )}
            </Button>
          </div>
        </form>
      </article>
    </>
  );
}

export default Mentorship;
