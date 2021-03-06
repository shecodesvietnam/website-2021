import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck";
import { useContext, useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { toast } from "react-toastify";
import * as Yup from "yup";

import LanguageContext from "../contexts/Language";
import { assetsUrl, mentorshipRegistrationSysUrl } from "./../config.json";
import { configLanguage, languageBasedDisplay } from "./../utils/language";
import Button from "./../components/layout/Button";

const features = [
  configLanguage(
    "Lựa chọn mentor 1-1 có trải nghiệm và background phù hợp với nhu cầu của bạn",
    "Select a one-on-one mentor with the right experience and background to suit your needs"
  ),
  configLanguage(
    "Nhận lời khuyên về lộ trình hướng nghiệp, các kỹ năng cần chuẩn bị, ...",
    "Get advice on career paths, skills to prepare,..."
  ),
  configLanguage(
    "Được chia sẻ về cách tự học và phát triền trong lĩnh vực mà bạn mong muốn",
    "Share about how to self-study and develop in the field you want"
  ),
  configLanguage(
    "Liên lạc với mentor linh hoạt, không ràng buộc về thời gian",
    "Contact with a flexible mentor, no time constraints"
  ),
];

function Mentorship() {
  const languageContext = useContext(LanguageContext);
  const [loading, setLoading] = useState(false);

  const {
    handleSubmit,
    handleBlur,
    handleChange,
    values: { name, email, age, companyOrSchool, positionOrMajor },
    errors,
    touched,
  } = useFormik({
    initialValues: {
      email: "",
      name: "",
      age: 0,
      companyOrSchool: "",
      positionOrMajor: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email().required(),
      name: Yup.string().min(2).max(25).required(),
      age: Yup.number().min(0).required(),
      companyOrSchool: Yup.string().min(5).max(100).required(),
      positionOrMajor: Yup.string().min(5).max(100).required(),
    }),
    onSubmit: async (values) => {
      setLoading(true);
      const data = {};

      data.email = values.email;
      data.name = values.name;
      data.age = values.age;
      data.company_or_school = values.companyOrSchool;
      data.position_or_major = values.positionOrMajor;

      console.log(data);

      try {
        await axios.post(
          `${mentorshipRegistrationSysUrl}/api/registrations`,
          data,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        toast.success(
          languageBasedDisplay(
            configLanguage(
              "Thông tin của bạn đã được lưu thành công",
              "Your information has been registered"
            ),
            languageContext.lang
          )
        );
      } catch (exc) {
        toast.error(
          languageBasedDisplay(
            configLanguage(
              "Có lỗi xảy ra trong quá trình đăng ký, xin bạn vui lòng liên hệ với chúng tôi để được hỗ trợ!",
              "An error has occurred, please contact to us to get supports!"
            ),
            languageContext.lang
          )
        );
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <>
      <article
        className="bg-black relative h-screen"
        style={{
          backgroundImage: `url("${assetsUrl}/2021/mentorship/IMG_5889.JPG")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <h2 className="flex flex-col bg-black bg-opacity-70 px-10 sm:px-24 md:px-56 lg:px-60 xl:px-64 2xl:px-72 justify-center absolute top-0 left-0 h-full w-full text-gray-50 text-3xl sm:text-5xl font-semibold">
          {languageBasedDisplay(
            configLanguage(
              "Tìm một người mentor tin tưởng vào bạn, và cuộc đời bạn có thể thay đổi mãi mãi!",
              "Find a mentor who believes in you, your life will change forever"
            ),
            languageContext.lang
          )}
        </h2>
      </article>
      <article className="bg-black-light px-5 sm:px-14 py-16 sm:py-24">
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 px-2 sm:px-14 lg:px-32 text-xl">
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
              Email *
            </label>
            <input
              className={`block bg-transparent appearance-none border border-gray-800 ${
                errors.email && touched.email && "border-red-600"
              } focus:border-gray-400 rounded w-full py-2 px-3 leading-tight focus:outline-none`}
              id="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={email}
              required
            />
          </div>
          <div className="mb-10 grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-4">
            <div>
              <label htmlFor="name" className="block text-sm font-bold mb-2">
                {languageBasedDisplay(
                  configLanguage("Họ Tên", "Full Name"),
                  languageContext.lang
                )}{" "}
                *
              </label>
              <input
                className={`block bg-transparent appearance-none border border-gray-800 ${
                  errors.name && touched.name && "border-red-600"
                } focus:border-gray-400 rounded w-full py-2 px-3 leading-tight focus:outline-none`}
                id="name"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={name}
                required
              />
            </div>
            <div>
              <label htmlFor="age" className="block text-sm font-bold mb-2">
                {languageBasedDisplay(
                  configLanguage("Tuổi", "Age"),
                  languageContext.lang
                )}{" "}
                *
              </label>
              <input
                className={`block bg-transparent appearance-none border border-gray-800 ${
                  errors.age && touched.age && "border-red-600"
                } focus:border-gray-400 rounded w-full py-2 px-3 leading-tight focus:outline-none`}
                id="age"
                name="age"
                type="number"
                min={0}
                onChange={handleChange}
                onBlur={handleBlur}
                value={age}
                required
              />
            </div>
          </div>
          <div className="mb-10">
            <label
              htmlFor="companyOrSchool"
              className="block text-sm font-bold mb-2"
            >
              {languageBasedDisplay(
                configLanguage("Trường học/Công ty làm việc", "School/Company"),
                languageContext.lang
              )}{" "}
              *
            </label>
            <input
              className={`block bg-transparent appearance-none border border-gray-800 ${
                errors.companyOrSchool &&
                touched.companyOrSchool &&
                "border-red-600"
              } focus:border-gray-400 rounded w-full py-2 px-3 leading-tight focus:outline-none`}
              id="companyOrSchool"
              name="companyOrSchool"
              onChange={handleChange}
              onBlur={handleBlur}
              value={companyOrSchool}
              required
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
              )}{" "}
              *
            </label>
            <input
              className={`block bg-transparent appearance-none border border-gray-800 ${
                errors.positionOrMajor &&
                touched.positionOrMajor &&
                "border-red-600"
              } focus:border-gray-400 rounded w-full py-2 px-3 leading-tight focus:outline-none`}
              id="positionOrMajor"
              name="positionOrMajor"
              onChange={handleChange}
              onBlur={handleBlur}
              value={positionOrMajor}
              required
            />
          </div>
          <div className="mb-10">
            <p>
              (*){" "}
              {languageBasedDisplay(
                configLanguage("Bắt buộc", "Required"),
                languageContext.lang
              )}
            </p>
          </div>
          <div className="flex justify-center">
            <Button
              type="submit"
              className={`px-7 ${loading ? "disabled:opacity-50" : ""}`}
              disabled={loading}
            >
              {languageBasedDisplay(
                configLanguage("Gửi", "Submit"),
                languageContext.lang
              )}
            </Button>
          </div>
          {loading && (
            <p className="mt-5 text-center">
              {languageBasedDisplay(
                configLanguage(
                  "Quá trình đăng ký có thể lên đến 2-3 phút, xin bạn vui lòng đợi!",
                  "The registration process might take up to 2-3 minutes, please wait!"
                ),
                languageContext.lang
              )}
            </p>
          )}
        </form>
      </article>
    </>
  );
}

export default Mentorship;
