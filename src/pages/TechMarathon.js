import { useContext } from "react";

import LanguageContext from "../contexts/Language";
import { assetsUrl } from "./../config.json";
import { configLanguage, languageBasedDisplay } from "./../utils/language";
import { contents } from "./contents";

const classBuildingProgress = [
  `${assetsUrl}/2021/tm/93265432_656191225162276_6934266618272808960_n.jpg`,
  `${assetsUrl}/2021/tm/92849689_656191321828933_3275045960589246464_n.jpg`,
  `${assetsUrl}/2021/tm/92925834_656191301828935_2429852566318743552_n.jpg`,
  `${assetsUrl}/2021/tm/92600035_656191315162267_3416413404682780672_n.jpg`,
  `${assetsUrl}/2021/tm/93060859_656191435162255_5702867140520968192_n.jpg`,
];

const contact = {
  name: configLanguage("Nguyễn Vũ Ngân Hà", "Nguyen Vu Ngan Ha"),
  img: {
    src: `${assetsUrl}/2021/tm/nganha.png`,
    alt: "Nguyen Vu Ngan Ha, the Program Manager",
  },
  phone: "0356640776",
  email: "hanguyen.shecodes@gmail.com",
};

function TechMarathon() {
  const languageContext = useContext(LanguageContext);

  return (
    <>
      <article className="bg-black px-2 lg:px-20 xl:px-28 py-16">
        <header className="mb-16 mt-10 text-gray-50">
          <h2 className="text-center font-title">
            <span className="block tracking-widest mb-3 text-4xl sm:text-6xl font-title">
              {contents.programs.techMarathon.title}
            </span>
          </h2>
        </header>
        <p className="text-gray-50 text-2xl text-justify px-5 w-full xl:w-3/4 2xl:w-2/3 mx-auto">
          {languageBasedDisplay(
            contents.programs.techMarathon.description,
            languageContext.lang
          )}
        </p>
      </article>
      <article className="bg-black px-5 sm:px-14 py-16 sm:pt-24 sm:pb-5">
        <section className="bg-black-light px-20 py-24">
          <div className="grid grid-cols-5 gap-3 items-center">
            {classBuildingProgress.map((step, index) => (
              <div
                className={`transform ${
                  index % 2 === 0 ? "-translate-y-5" : "translate-y-5"
                }`}
              >
                <img
                  key={index}
                  src={step}
                  alt={`step-${index}`}
                  className="block rounded-2xl"
                />
              </div>
            ))}
          </div>
          <h3 className="text-gray-50 text-center mt-20">
            <span className="block font-semibold text-5xl">
              {languageBasedDisplay(
                configLanguage(
                  "Quy Trình Tạo Ra Lớp Học",
                  "Class-Building Progress"
                ),
                languageContext.lang
              )}
            </span>
            <span className="block mt-3 text-xl">
              {languageBasedDisplay(
                configLanguage("Lấy học viên làm trung tâm", "Student-centric"),
                languageContext.lang
              )}
            </span>
          </h3>
        </section>
      </article>
      {/* <article className="bg-black px-5 sm:px-14 sm:pb-5">
        <section className="bg-black-light grid grid-cols-2 text-gray-50 rounded-3xl">
          <img src={contact.img.src} alt={contact.img.alt} className="block" />
          <div className="flex flex-col justify-center">
            <h3 className="text-4xl font-semibold mb-7">
              {languageBasedDisplay(
                configLanguage(
                  "Mọi thắc mắc xin vui lòng liên hệ",
                  "Please contact to"
                ),
                languageContext.lang
              )}
            </h3>
            <p className="text-2xl mb-2">
              {languageBasedDisplay(contact.name, languageContext.lang)}
            </p>
            <p>{contact.phone}</p>
            <p>{contact.email}</p>
          </div>
        </section>
      </article> */}
    </>
  );
}

export default TechMarathon;
