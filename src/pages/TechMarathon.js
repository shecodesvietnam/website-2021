import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons/faTimesCircle";
import { faPhoneSquareAlt } from "@fortawesome/free-solid-svg-icons/faPhoneSquareAlt";
import Slider from "react-slick";

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

const testimonial = {
  img: {
    src: `${assetsUrl}/2021/tm/ngocdiep.png`,
    alt: "Nguyen Ngoc Diep",
  },
  qa: {
    1: {
      q: configLanguage(
        "Bạn có thể giới thiệu một chút về bản thân và lý do bạn đăng ký khóa Tech Marathon năm ngoái được không?",
        "Can you tell us a little bit about yourself and why you signed up for the Tech Marathon course last year?"
      ),
      a: configLanguage(
        `Mình là Nguyễn Ngọc Diệp, hiện tại đang học lớp 12 trường THPT Chuyên Ngoại 
        ngữ, Hà Nội. Thời điểm này năm ngoái là lúc mình đang chuẩn bị apply du học 
        và có định hướng theo học một ngành về tech nên có tìm hiểu các khóa học 
        coding trên mạng. Mình tình cờ biết đến SheCodes Vietnam và khi đó fanpage 
        thông báo mở lớp Tech Marathon nên mình đã đăng ký luôn.`,
        `My name is Nguyen Ngoc Diep, currently studying in grade 12 at Foreign 
        Language High School, Hanoi. This time last year was when I was preparing 
        to apply to study abroad and was oriented to study a major in tech, so I 
        studied coding courses online. I happened to know SheCodes Vietnam and then 
        the fanpage announced the opening of Tech Marathon class, so I signed up.`
      ),
    },
    2: {
      q: configLanguage(
        "Bạn có thể chia sẻ trải nghiệm của mình với khóa học này không?",
        "Can you share your experience with this course?"
      ),
      a: configLanguage(
        `Ban đầu khi tham gia khóa học, mình nghĩ sẽ chỉ đơn giản học về coding, 
        nhưng thực tế mình thấy rất thú vị khi còn có cơ hội nói chuyện với những 
        người có kinh nghiệm về tech. Vào giờ nghỉ giữa buổi hay cuối buổi học, mọi 
        người thường trò chuyện với anh giảng viên về tech và coding, kể cả những 
        kiến thức không hề liên quan để buổi học. Mình đã được giải đáp rất nhiều 
        thắc mắc và đồng thời mở rộng hiểu biết về lĩnh vực này. Anh giảng viên rất 
        nhiệt tình và sau buổi học anh vẫn giúp đỡ mình nhiều về coding. Mình còn 
        nhớ buổi học cuối còn có một webinar nhỏ với diễn giả là các anh chị làm việc 
        trong ngành đã chia sẻ rất nhiều về hướng đi của IT hay CS ở bậc đại học, và 
        các cơ hội nghề nghiệp trong lĩnh vực này.`,
        `Initially, when I joined the course, I thought I would simply learn about 
        coding, but in fact, I found it very interesting to have the opportunity to 
        talk with people who have experience in tech. At the break in the middle or 
        at the end of the class, people often chat with the lecturer about tech and 
        coding, even the knowledge that is not related to the lesson. I have had a 
        lot of questions answered and at the same time broadened my understanding of 
        the field. The lecturer is very enthusiastic and after the lesson he still 
        helps me a lot with coding. I still remember the last class, there was also 
        a small webinar with the speakers who are working in the industry who shared 
        a lot about the direction of IT or CS at university level, and career 
        opportunities in this field.`
      ),
    },
    3: {
      q: configLanguage(
        "Bạn có điều gì muốn nhắn gửi đến các bạn học viên của khóa Tech Marathon sắp tới không?",
        "Do you have something to say to the students of the upcoming Tech Marathon course?"
      ),
      a: configLanguage(
        `Đăng ký học TM là 1 quyết định rất đúng đắn của mình. Nếu các bạn còn ngần 
        ngại đăng ký thì đừng lo lắng, vì mình tin chắc là các bạn sẽ học được rất 
        nhiều điều mới mẻ sau khóa học này và có thêm động lực để tiếp tục học code. 
        Chúc các bạn có những trải nghiệm thú vị với lập trình ở Tech Marathon nhé!`,
        `Enrolling in TM is a very right decision of mine. If you still hesitate to 
        register, don't worry, because I'm sure you will learn a lot of new things 
        after this course and have more motivation to continue learning to code. 
        Wish you have interesting experiences with programming at Tech Marathon!`
      ),
    },
  },
};

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
  const [testimonialOpened, setTestimonialOpened] = useState(false);

  return (
    <>
      <div
        className={`fixed top-0 left-0 z-90 w-full h-screen bg-black text-gray-50 transition duration-500 ease-in-out transform ${
          testimonialOpened ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <FontAwesomeIcon
          icon={faTimesCircle}
          className="fixed top-2 left-2 z-100 cursor-pointer"
          color="white"
          size="lg"
          onClick={() => setTestimonialOpened(false)}
        />
        <div className="h-screen grid grid-cols-1 md:grid-cols-2 gap-2 px-12 sm:px-24 py-10">
          <div className="flex flex-col justify-center mb-10 md:mb-0">
            <h3 className="font-semibold w-2/3 text-5xl sm:text-7xl">
              {languageBasedDisplay(
                configLanguage("Chia sẻ từ học viên cũ", "Testimonial"),
                languageContext.lang
              )}
            </h3>
          </div>
          <div className="overflow-y-auto">
            {Object.keys(testimonial.qa).map((n) => (
              <div key={n} className="mb-5">
                <h4 className="text-lg font-semibold">
                  {languageBasedDisplay(
                    testimonial.qa[n].q,
                    languageContext.lang
                  )}
                </h4>
                <p>
                  {languageBasedDisplay(
                    testimonial.qa[n].a,
                    languageContext.lang
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <article className="bg-black px-2 lg:px-20 xl:px-28 pt-16 pb-28">
        <header className="mb-16 mt-10 text-gray-50">
          <h2 className="text-center">
            <span className="block mb-3 text-4xl sm:text-6xl font-semibold">
              {languageBasedDisplay(
                configLanguage("Lấy học viên làm trung tâm", "Student-centric"),
                languageContext.lang
              )}
            </span>
          </h2>
        </header>
        <p className="text-gray-50 text-xl text-justify px-5 w-full xl:w-3/4 2xl:w-2/3 mx-auto">
          {languageBasedDisplay(
            contents.programs.techMarathon.description,
            languageContext.lang
          )}
        </p>
      </article>
      <article className="bg-black-light px-5 sm:px-14 py-16 sm:pt-24 sm:pb-5">
        <section className="bg-black md:px-5 lg:px-20 py-10 sm:py-24 mb-4 sm:mb-8 md:mb-16 grid grid-cols-2 text-gray-50">
          <img
            className="block"
            src={testimonial.img.src}
            alt={testimonial.img.alt}
          />
          <div className="flex flex-col justify-center pr-2">
            <h3 className="font-semibold text-2xl sm:text-4xl mb-5">
              {languageBasedDisplay(
                configLanguage("Chia sẻ từ học viên cũ", "Testimonial"),
                languageContext.lang
              )}
            </h3>
            <div>
              <button
                className="text-sm sm:text-base hover:underline"
                onClick={() => setTestimonialOpened(true)}
              >
                {languageBasedDisplay(
                  configLanguage("Đọc thêm", "Read more"),
                  languageContext.lang
                )}
                {" >"}
              </button>
            </div>
          </div>
        </section>
        <section className="mb-4 sm:mb-8 md:mb-16  bg-gradient-to-br from-malibu via-lavender to-illusion md:px-5 lg:px-20 py-24">
          <div className="hidden md:grid md:grid-cols-5 md:gap-3 items-center">
            {classBuildingProgress.map((step, index) => (
              <div
                key={index}
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
          <Slider
            dots={false}
            infinite
            speed={500}
            slidesToShow={1}
            slidesToScroll={1}
            className="block md:hidden w-5/6 lg:w-3/4 mx-auto"
          >
            {classBuildingProgress.map((step, index) => (
              <div key={index} className="px-2 rounded-2xl">
                <img
                  src={step}
                  alt={`step-${index}`}
                  className="block rounded-2xl w-2/3 sm:w-1/2 mx-auto"
                />
              </div>
            ))}
          </Slider>
          <h3 className="text-gray-800 text-center mt-14 md:mt-20 px-2">
            <span className="block font-semibold text-3xl sm:text-5xl">
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
        <section className="text-gray-50 md:px-5 lg:px-20 py-24">
          <div className="flex flex-col justify-center items-center mb-5">
            <FontAwesomeIcon icon={faPhoneSquareAlt} size="3x" />
          </div>
          <div className="flex flex-col justify-center px-2 text-center">
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
            <address>
              <p>{contact.phone}</p>
              <a href={`mailto:${contact.email}`} className="hover:underline">
                {contact.email}
              </a>
            </address>
          </div>
        </section>
      </article>
    </>
  );
}

export default TechMarathon;
