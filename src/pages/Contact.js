import { useContext } from "react";

import LanguageContext from "./../contexts/Language";
import { assetsUrl } from "./../config.json";
import { configLanguage, languageBasedDisplay } from "./../utils/language";

const contacts = [
  {
    name: configLanguage("MAI PHƯƠNG THỦY TIÊN", "MAI PHUONG THUY TIEN"),
    email: "tienmai.shecodes@gmail.com",
    image: `${assetsUrl}/2021/contact/tien.jpg`,
  },
  {
    name: configLanguage("NGUYỄN HUYỀN MY", "NGUYEN HUYEN MY"),
    email: "huyenmy.shecodes@gmail.com",
    image: `${assetsUrl}/2021/contact/my.jpg`,
  },
];

function Contact() {
  const languageContext = useContext(LanguageContext);

  return (
    <>
      <article className="md:h-screen">
        <section className="flex flex-col justify-center h-full">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {contacts.map((contact, index) => (
              <div className="relative group" key={index}>
                <img
                  className="block w-full h-full"
                  src={contact.image}
                  alt={contact.name}
                />
                <div
                  className="
                opacity-0 
                transition 
                duration-500 
                ease-in-out 
                transform 
                group-hover:opacity-100 
                absolute 
                top-0 
                left-0 
                z-40 
                w-full 
                h-full 
                bg-black 
                bg-opacity-60
                flex
                flex-col
                justify-center
              "
                >
                  <div className="text-center text-gray-50">
                    <h2 className="text-2xl">
                      MS.{" "}
                      {languageBasedDisplay(contact.name, languageContext.lang)}
                    </h2>
                    <address>
                      <a
                        className="hover:underline"
                        href={`mailto:${contact.email}`}
                      >
                        {contact.email}
                      </a>
                    </address>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}

export default Contact;
