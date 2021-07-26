import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons/faTimesCircle";
import { faChalkboardTeacher } from "@fortawesome/free-solid-svg-icons/faChalkboardTeacher";
import { faVenusMars } from "@fortawesome/free-solid-svg-icons/faVenusMars";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons/faLaptopCode";
import { faDoorOpen } from "@fortawesome/free-solid-svg-icons/faDoorOpen";
import { faDoorClosed } from "@fortawesome/free-solid-svg-icons/faDoorClosed";
import { faDirections } from "@fortawesome/free-solid-svg-icons/faDirections";
import { faUserFriends } from "@fortawesome/free-solid-svg-icons/faUserFriends";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons/faPlayCircle";
import { faCode } from "@fortawesome/free-solid-svg-icons/faCode";
import { faFistRaised } from "@fortawesome/free-solid-svg-icons/faFistRaised";
import { faWalking } from "@fortawesome/free-solid-svg-icons/faWalking";
import { faMicrophoneAlt } from "@fortawesome/free-solid-svg-icons/faMicrophoneAlt";
import { faUpload } from "@fortawesome/free-solid-svg-icons/faUpload";
import { faEye } from "@fortawesome/free-solid-svg-icons/faEye";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import LanguageContext from "./../../contexts/Language";
import Button from "../../components/layout/Button";
import { assetsUrl } from "./../../config.json";
import { contents } from "./../contents";
import { configLanguage, languageBasedDisplay } from "./../../utils/language";

const QAs = [
  {
    q: configLanguage(
      `Mình chỉ mới hứng thú với ngành công nghệ thông tin gần đây và khả năng lập 
      trình lập trình còn kém thì có thể tham gia cuộc thi được không?`,
      `I just recently became interested in the information technology industry and 
      my programming skills are still low, can I participate in the contest?`
    ),
    a: configLanguage(
      `Trong một team, không nhất thiết là tất cả các thành viên đều phải có khả năng 
      lập trình. Các kỹ năng khác như design UX/UI, thuyết trình, làm việc nhóm, quản 
      lý thời gian đóng vai trò không kém phần quan trọng trong việc tạo nên sản phẩm 
      của nhóm. Hơn nữa, ngoài tiêu chí công nghệ, sản phẩm của các đội còn được dựa trên các 
      tiêu chí: Tính hữu dụng & thực tế, Tính sáng tạo, Tính công nghệ & Kỹ thuật, mức 
      độ hoàn thành của sản phẩm. Trong thời gian thi đấu, sẽ có một đội ngũ mentors 
      nhiệt tình luôn sẵn sàng trả lời câu hỏi và giúp đỡ đội của bạn trong quá trình 
      xây dựng sản phẩm. SheCodes Vietnam cũng tổ chức các Workshop, Techtalk, 
      Networking session nhằm hỗ trợ cao nhất cho các thí sinh dự thi về mặt kiến 
      thức cũng như kỹ năng. Do đó đây không chỉ là cơ hội để tham gia thi đấu mà còn 
      là cơ hội để giao lưu, học hỏi và nuôi dưỡng đam mê lập trình của các bạn. 
      `,
      `In a team, it is not necessary that all members have programming skills. Other 
      skills such as UX/UI design, presentation, teamwork, time management play an 
      equally important role in creating the team's product. Moreover, in addition 
      to technology criteria, the products of the teams are also based on the 
      following criteria: Usability & practicality, Creativity, Technological & 
      Technical features, product completion level. During the competition, there 
      will be a team of enthusiastic mentors always ready to answer questions and 
      help your team in the product building process. SheCodes Vietnam also organizes 
      Workshops, Techtalk, Networking sessions to provide the best support for 
      contestants in terms of knowledge and skills. Therefore, this is not only an 
      opportunity to participate in the competition but also an opportunity to 
      exchange, learn and nurture your passion for programming.`
    ),
  },
  {
    q: configLanguage(
      `Mình chưa có đồng đội để tham gia thi chung thì có thể tham gia cuộc thi được không?`,
      "I don't have a teammate to join the competition, can I join the contest?"
    ),
    a: configLanguage(
      `Một đội dự thi có thể có từ 1-5 thành viên, nghĩa là bạn có thể thi cá nhân 
      hoặc theo team tối đa 5 người bạn. Trường hợp bạn muốn thi đấu theo team thì 
      mỗi thành viên trong đội của bạn đều phải điền một đơn đăng ký riêng. Nếu như 
      bạn vẫn chưa có teammate thì SheCodes sẽ có một hoạt động riêng để kết nối các 
      thí sinh lại với nhau. Bạn sẽ nhanh chóng tìm được các mảnh ghép ăn ý còn thiếu 
      để cùng nhau công phá cuộc thi lần này ngay thôi.`,
      `A competition team can have from 1-5 members, which means you can compete 
      individually or in teams of up to 5 friends. In case you want to compete as a 
      team, each member of your team must fill out a separate registration form. If 
      you still do not have a teammate, SheCodes will have a separate activity to 
      connect the contestants together. You will quickly find the missing pieces of 
      the puzzle to break this contest together.`
    ),
  },
  {
    q: configLanguage(
      "Hình thức thi năm nay là online nên các bạn du học sinh có thể tham gia thi đấu được không?",
      "This year's format is online, so can international students participate in the competition?"
    ),
    a: configLanguage(
      `Một điểm cộng lớn cho hình thức thi năm nay chính là sẽ không giới hạn một 
      không gian địa lý nào. Do đó dù bạn có sinh sống ở Việt Nam hay nước ngoài 
      thì đều có thể tham gia cuộc thi, yêu cầu cần chỉ là một tinh thần nhiệt 
      huyết, đam mê với lập trình và khát khao cháy bỏng muốn học hỏi, trải nghiệm, 
      chấp nhận thử thách vượt qua vùng an toàn để hoàn thiện bản thân mình mà thôi.`,
      `A big plus for this year's format is that it will not be limited to any 
      geographical space. Therefore, whether you live in Vietnam or abroad, you can 
      participate in the contest, the only requirement is an enthusiastic spirit, 
      passion for programming and a burning desire to learn, experience, accepting 
      the challenge of overcoming your comfort zone to perfect yourself.`
    ),
  },
  {
    q: configLanguage(
      "Làm sao để biết mình đã đăng ký thành công? Có phải trải qua các vòng chọn lọc tiếp theo không?",
      "How do I know if I have successfully registered? Does it have to go through the next round of selection?"
    ),
    a: configLanguage(
      `Bạn cần điền các thông tin yêu cầu ở form đăng kí của cuộc thi, BTC sẽ gửi 
      email hướng dẫn nộp phí cho các bạn (100% phí tham dự sẽ dùng để từ thiện cho 
      Hội Từ Thiện Giáo Dục Trẻ Em - CEF). Sau khi nộp phí thành công, các bạn sẽ 
      nhận được email xác nhận từ BTC.`,
      `You need to fill in the required information in the registration form of the 
      contest, BTC will send you an email with instructions to pay the fee (100% of 
      the participation fee will be used to charity for Children's Education 
      Charity - CEF). After successfully paying the fee, you will receive a 
      confirmation email from BTC.`
    ),
  },
  {
    q: configLanguage(
      "Nam giới có thể làm tham gia 𝐒𝐇𝐄𝐂𝐎𝐃𝐄𝐒 𝐕𝐈𝐑𝐓𝐔𝐀𝐋 𝐇𝐀𝐂𝐊𝐀𝐓𝐇𝐎𝐍 𝟐𝟎𝟐𝟏 được không?",
      "Can men join 𝐒𝐇𝐄𝐂𝐎𝐃𝐄𝐒 𝐕𝐈𝐑𝐓𝐔𝐀𝐋 𝐇𝐀𝐂𝐊𝐀𝐓𝐇𝐎𝐍 𝟐𝟎𝟐𝟏?"
    ),
    a: configLanguage(
      `Rất tiếc là bạn không thể đăng ký trở thành thí sinh của Hackathon. Tuy nhiên, 
      các bạn nam có thể tham gia làm mentor cho thí sinh, tình nguyện viên cuộc thi 
      để hỗ trợ các thí sinh thi đấu và sẽ có những quyền lợi riêng dành cho các vị 
      trí này. Hãy theo dõi fanpage của chúng mình để cập nhật thông tin nhé!`,
      `Unfortunately, you cannot register to be a Hackathon contestant. However, 
      men can participate as mentors for contestants, become volunteers to support 
      contestants and will have their own benefits for these positions. Follow our 
      fanpage for updates!`
    ),
  },
];

const keyNotes = [
  {
    icon: faChalkboardTeacher,
    note: configLanguage("Trang Bị Kiến Thức", "Provide Knowledge"),
    description: configLanguage(
      "Cung cấp kiến thức cơ bản đồng thời định hướng nghề nghiệp về những ngành nghề liên quan đến công nghệ thông tin, giúp người tham gia bước ra khỏi vùng an toàn của mình và khám phá tiềm năng của bản thân.",
      "Providing basic knowledge and career orientation on careers related to information technology, helping participants step out of their comfort zone and discover their potential."
    ),
  },
  {
    icon: faVenusMars,
    note: configLanguage("Tạo Sự Công Bằng", "Create Equality"),
    description: configLanguage(
      "Mang đến cơ hội để phái nữ, không kể có kinh nghiệm lập trình hay chưa, đều được học hỏi và phát triển qua đó tạo ra một xã hội công bằng giữa phái nam và phái nữ.",
      "Provide opportunities for women, regardless of programming experience, to learn and develop thereby creating an equitable society between men and women."
    ),
  },
  {
    icon: faLaptopCode,
    note: configLanguage(
      "Nhận Thức Sức Mạnh Công Nghệ",
      "Knowledge Of Technology Power"
    ),
    description: configLanguage(
      "Giúp phái nữ nhận thức được tầm quan trọng của công nghệ thông tin trong việc giải quyết những vấn đề xã hội và tạo nên ảnh hưởng tích cực tới cộng đồng.",
      "Helping women realize the importance of information technology in solving social problems and making a positive impact on the community."
    ),
  },
];

const agenda = [
  {
    duration: {
      startTime: configLanguage("Thứ Năm 12/8 20:00", "Thursday 12/8 20:00"),
      endTime: configLanguage("Thứ Năm 12/8 20:30", "Thursday 12/8 20:30"),
    },
    name: [configLanguage("Lễ khai mạc chương trình", "Opening Ceremony")],
    icon: faDoorOpen,
  },
  {
    duration: {
      startTime: configLanguage("Thứ Năm 12/8 20:30", "Thursday 12/8 20:30"),
      endTime: configLanguage("Thứ Năm 12/8 21:30", "Thursday 12/8 21:30"),
    },
    name: [
      configLanguage("Buổi định hướng chương trình", "Orientation Session"),
    ],
    icon: faDirections,
  },
  {
    duration: {
      startTime: configLanguage("Thứ Năm 12/8 21:30", "Thursday 12/8 21:30"),
      endTime: configLanguage("Thứ Năm 12/8 22:00", "Thursday 12/8 22:00"),
    },
    name: [configLanguage("Ghép đội", "Team Formation")],
    icon: faUserFriends,
  },
  {
    duration: {
      startTime: configLanguage("Thứ Sáu 13/8 20:00", "Friday 13/8 20:00"),
      endTime: configLanguage("Thứ Sáu 13/8 20:30", "Friday 13/8 20:30"),
    },
    name: [
      configLanguage(
        "Phát biểu diễn giả chính + Thời gian hacking bắt đầu",
        "Opening Keynote + Hacking starts"
      ),
    ],
    icon: faPlayCircle,
  },
  {
    duration: {
      startTime: configLanguage("Thứ Sáu 13/8 20:30", "Friday 13/8 20:30"),
      endTime: configLanguage("Thứ Sáu 13/8 21:30", "Friday 13/8 21:30"),
    },
    name: [
      configLanguage(
        "Workshop 1: Tổng quan về phát triển web",
        "Workshop 1: Web development overview"
      ),
      configLanguage(
        "Workshop 4: Cách biến ý tưởng thành hiện thực",
        "Workshop 4: How to turn ideas to reality"
      ),
    ],
    icon: faCode,
  },
  {
    duration: {
      startTime: configLanguage("Thứ Sáu 13/8 21:30", "Friday 13/8 21:30"),
      endTime: configLanguage("Thứ Sáu 13/8 22:00", "Friday 13/8 22:00"),
    },
    name: [configLanguage("Team building Game", "Team building Game")],
    icon: faFistRaised,
  },
  {
    duration: {
      startTime: configLanguage("Thứ Bảy 14/8 9:00", "Saturday 14/8 9:00"),
      endTime: configLanguage("Thứ Bảy 14/8 9:20", "Saturday 14/8 9:20"),
    },
    name: [configLanguage("Thể dục buổi sáng", "Morning exercise")],
    icon: faWalking,
  },
  {
    duration: {
      startTime: configLanguage("Thứ Bảy 14/8 9:30", "Saturday 14/8 9:30"),
      endTime: configLanguage("Thứ Bảy 14/8 10:30", "Saturday 14/8 10:30"),
    },
    name: [
      configLanguage(
        "Workshop 2: Xây dựng trang web đầu tay của bạn",
        "Workshop 2: Building your first site"
      ),
      configLanguage(
        "Workshop 7: Tổng quan về phân tích dữ liệu",
        "Workshop 7: Data analysis overview"
      ),
    ],
    icon: faCode,
  },
  {
    duration: {
      startTime: configLanguage("Thứ Bảy 14/8 10:45", "Saturday 14/8 10:45"),
      endTime: configLanguage("Thứ Bảy 14/8 11:45", "Saturday 14/8 11:45"),
    },
    name: [
      configLanguage(
        "Techtalk 1: Tư duy khởi nghiệp & kinh doanh",
        "Techtalk 1: Startup & Entrepreneurship mindset"
      ),
    ],
    icon: faMicrophoneAlt,
  },
  {
    duration: {
      startTime: configLanguage("Thứ Bảy 14/8 14:00", "Saturday 14/8 14:00"),
      endTime: configLanguage("Thứ Bảy 14/8 15:00", "Saturday 14/8 15:00"),
    },
    name: [
      configLanguage(
        "Workshop 3: Giới thiệu về UI/UX",
        "Workshop 3: Introduction to UI/UX"
      ),
      configLanguage(
        "Workshop 5 (Intermediate Level): Code đẹp bug sạch",
        "Workshop 5 (Intermediate Level): Writing efficient code"
      ),
    ],
    icon: faCode,
  },
  {
    duration: {
      startTime: configLanguage("Thứ Bảy 14/8 16:30", "Saturday 14/8 16:30"),
      endTime: configLanguage("Thứ Bảy 14/8 17:30", "Saturday 14/8 17:30"),
    },
    name: [
      configLanguage(
        "Techtalk 3: Những 1% điều khác biệt bạn có thể làm khi tìm việc",
        "Techtalk 3: How to stand out in the recruiting process"
      ),
    ],
    icon: faMicrophoneAlt,
  },
  {
    duration: {
      startTime: configLanguage("Thứ Bảy 14/8 20:00", "Saturday 14/8 20:00"),
      endTime: configLanguage("Thứ Bảy 14/8 21:00", "Saturday 14/8 21:00"),
    },
    name: [
      configLanguage(
        "Workshop 6 (Intermediate Level): CI/CD pipeline",
        "Workshop 6 (Intermediate Level): CI/CD pipeline"
      ),
      configLanguage(
        "Workshop 8: Làm sạch dữ liệu với Python",
        "Workshop 8: Importing & cleaning data with Python"
      ),
    ],
    icon: faCode,
  },
  {
    duration: {
      startTime: configLanguage("Thứ Bảy 14/8 21:15", "Saturday 14/8 21:15"),
      endTime: configLanguage("Thứ Bảy 14/8 22:15", "Saturday 14/8 22:15"),
    },
    name: [
      configLanguage(
        "Workshop 9: Xử lý và phân tích dữ liệu với Python",
        "Workshop 9: Manipulating & visualizing data with Python + deploying"
      ),
    ],
    icon: faCode,
  },
  {
    duration: {
      startTime: configLanguage("Thứ Bảy 14/8 22:30", "Saturday 14/8 22:30"),
      endTime: configLanguage("Thứ Bảy 14/8 23:00", "Saturday 14/8 23:00"),
    },
    name: [configLanguage("Team building Game", "Team building Game")],
    icon: faFistRaised,
  },
  {
    duration: {
      startTime: configLanguage("Chủ Nhật 15/8 9:00", "Sunday 15/8 9:00"),
      endTime: configLanguage("Chủ Nhật 15/8 9:30", "Sunday 15/8 9:30"),
    },
    name: [configLanguage("Morning Yoga", "Morning Yoga")],
    icon: faFistRaised,
  },
  {
    duration: {
      startTime: configLanguage("Chủ Nhật 15/8 9:30", "Sunday 15/8 9:30"),
      endTime: configLanguage("Chủ Nhật 15/8 10:00", "Sunday 15/8 10:00"),
    },
    name: [
      configLanguage(
        "Nộp dự án lên trang web SheCodes (Hacking kết thúc)",
        "Submitting project to SheCodes website (Hacking ends)"
      ),
    ],
    icon: faUpload,
  },
  {
    duration: {
      startTime: configLanguage("Chủ Nhật 15/8 10:30", "Sunday 15/8 10:30"),
      endTime: configLanguage("Chủ Nhật 15/8 11:30", "Sunday 15/8 11:30"),
    },
    name: [
      configLanguage(
        "Techtalk 2: Câu chuyện chuyển ngành",
        "Techtalk 2: From xxx to Data Scientist/Software Engineer"
      ),
    ],
    icon: faMicrophoneAlt,
  },
  {
    duration: {
      startTime: configLanguage("Chủ Nhật 15/8 13:45", "Sunday 15/8 13:45"),
      endTime: configLanguage("Chủ Nhật 15/8 14:45", "Sunday 15/8 14:45"),
    },
    name: [
      configLanguage(
        "Techtalk 4: #IamRemarkable",
        "Techtalk 4: #IamRemarkable"
      ),
    ],
    icon: faMicrophoneAlt,
  },
  {
    duration: {
      startTime: configLanguage("Chủ Nhật 15/8 15:15", "Sunday 15/8 15:15"),
      endTime: configLanguage("Chủ Nhật 15/8 16:30", "Sunday 15/8 16:30"),
    },
    name: [
      configLanguage(
        "Giới thiệu dự án + 5 câu hỏi và trả lời trực tiếp hàng đầu từ ban giám khảo",
        "Project showcases + Top 5 Live Q&A from judges"
      ),
    ],
    icon: faEye,
  },
  {
    duration: {
      startTime: configLanguage("Chủ Nhật 15/8 16:45", "Sunday 15/8 16:45"),
      endTime: configLanguage("Chủ Nhật 15/8 17:30", "Sunday 15/8 17:30"),
    },
    name: [configLanguage("Lễ bế mạc", "Closing Ceremony")],
    icon: faDoorClosed,
  },
];

function Hackathon2021() {
  const languageContext = useContext(LanguageContext);
  const [featuresOpened, setFeaturesOpened] = useState(false);
  const [newsOpened, setNewsOpened] = useState(false);
  const [qaOpened, setQAOpened] = useState(false);
  const [agendaOpened, setAgendaOpened] = useState(false);

  return (
    <>
      <article className="bg-black px-5 sm:px-14 py-16 sm:py-24 text-gray-50">
        <header className="mb-16 mt-10 text-gray-50">
          <h2 className="text-center mb-3 text-4xl sm:text-6xl font-semibold">
            Unlock The Coding Pow
            <span className="font-mono italic">&lt;Her&gt;</span>
          </h2>
        </header>
        <p className="text-gray-50 text-xl sm:text-justify px-5 w-full xl:w-3/4 2xl:w-2/3 mx-auto">
          {languageBasedDisplay(
            contents.programs.hackathon.description,
            languageContext.lang
          )}
        </p>
        <div className="mt-16 flex flex-col items-center justify-center">
          <Button>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdYwv4QqpgBI7wPDIW1MuW_jkAE16TozzOsTIzStmXQIElhjQ/viewform?pli=1"
              target="_blank"
              rel="noreferrer"
            >
              {languageBasedDisplay(
                configLanguage("Đăng ký tham gia", "Register"),
                languageContext.lang
              )}
            </a>
          </Button>
        </div>
      </article>
      <article className="bg-black-light px-5 sm:px-14 py-16 sm:py-24">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <img
            src={`${assetsUrl}/2021/hackathon/coverevent.png`}
            alt="schedule: start date: 12/08/2021, end date: 15/08/2021"
            className="block w-full h-full rounded-3xl md:col-span-2"
          />
          <img
            src={`${assetsUrl}/2021/hackathon/prize.png`}
            alt="prize"
            className="block w-full h-full rounded-3xl"
          />
          <button
            className="hover:shadow-2xl transition duration-500 ease-in-out transform hover:-translate-y-2"
            onClick={() => setNewsOpened(true)}
          >
            <img
              src={`${assetsUrl}/2021/hackathon/0718/1.png`}
              alt="new things at this hackathon"
              className="block w-full h-full rounded-3xl"
            />
          </button>
          <button
            className="hover:shadow-2xl transition duration-500 ease-in-out transform hover:-translate-y-2"
            onClick={() => setFeaturesOpened(true)}
          >
            <img
              src={`${assetsUrl}/2021/hackathon/0723/1.png`}
              alt="features"
              className="block w-full h-full rounded-3xl"
            />
          </button>
          <button
            className="hover:shadow-2xl transition duration-500 ease-in-out transform hover:-translate-y-2"
            onClick={() => setQAOpened(true)}
          >
            <img
              src={`${assetsUrl}/2021/hackathon/QNA.png`}
              alt="questions and answers"
              className="block w-full h-full rounded-3xl"
            />
          </button>
          <img
            src={`${assetsUrl}/2021/hackathon/unlock.png`}
            alt="elevator pitch"
            className="block w-full h-full rounded-3xl md:col-span-2 lg:col-span-3"
          />
        </section>
        <section className="text-gray-50 mt-52 px-5 sm:px-10">
          <h2 className="text-center text-4xl lg:text-6xl font-semibold mb-20">
            {languageBasedDisplay(
              configLanguage(
                "Đánh Thức Tiềm Năng Công Nghệ",
                "Awakening the Potential of Technology"
              ),
              languageContext.lang
            )}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {keyNotes.map(({ icon, note, description }, index) => (
              <div key={index}>
                <div className="mb-5">
                  <FontAwesomeIcon icon={icon} color="white" size="3x" />
                  <h3 className="text-2xl lg:text-3xl font-semibold mt-2">
                    {languageBasedDisplay(note, languageContext.lang)}
                  </h3>
                </div>
                <p>{languageBasedDisplay(description, languageContext.lang)}</p>
              </div>
            ))}
          </div>
        </section>
      </article>
      <article className="bg-black px-5 sm:px-14 py-16 sm:py-24 text-gray-50">
        <h2 className="text-center text-4xl lg:text-6xl font-semibold mb-16">
          {languageBasedDisplay(
            configLanguage("Nội Dung Chương Trình", "Agenda"),
            languageContext.lang
          )}
        </h2>
        <div className="flex justify-center">
          <button
            className="btn outline-none bg-transparent hover:text-gray-900 border-2 border-gray-50 transition duration-100 ease-in-out transform hover:bg-gray-50"
            onClick={() => setAgendaOpened(true)}
          >
            {languageBasedDisplay(
              configLanguage("Xem thêm", "Read More"),
              languageContext.lang
            )}
          </button>
        </div>
      </article>
      <article
        className="bg-black-light w-full h-screen"
        style={{
          backgroundImage: `url("${assetsUrl}/2020/media/hackathon-mixed.png")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />
      <div
        className={`fixed top-0 left-0 z-90 w-full h-screen bg-black text-gray-50 transition duration-500 ease-in-out transform ${
          newsOpened ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <FontAwesomeIcon
          icon={faTimesCircle}
          className="fixed top-2 left-2 z-100 cursor-pointer"
          color="white"
          size="lg"
          onClick={() => setNewsOpened(false)}
        />
        <div className="h-screen px-12 lg:px-24 py-10 flex flex-col justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 overflow-auto">
            <img
              src={`${assetsUrl}/2021/hackathon/0718/2.png`}
              alt="fullfill passion"
              className="block w-full h-full rounded-3xl"
            />
            <img
              src={`${assetsUrl}/2021/hackathon/0718/3.png`}
              alt="virtual competing, real awards"
              className="block w-full h-full rounded-3xl"
            />
            <img
              src={`${assetsUrl}/2021/hackathon/0718/4.png`}
              alt="bonus prizes"
              className="block w-full h-full rounded-3xl"
            />
          </div>
        </div>
      </div>
      <div
        className={`fixed top-0 left-0 z-90 w-full h-screen bg-black text-gray-50 transition duration-500 ease-in-out transform ${
          featuresOpened ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <FontAwesomeIcon
          icon={faTimesCircle}
          className="fixed top-2 left-2 z-100 cursor-pointer"
          color="white"
          size="lg"
          onClick={() => setFeaturesOpened(false)}
        />
        <div className="h-screen px-12 lg:px-24 py-10 flex flex-col justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 overflow-auto p-5">
            <img
              src={`${assetsUrl}/2021/hackathon/0723/2.png`}
              alt="techtalk"
              className="block w-full h-full rounded-3xl"
            />
            <img
              src={`${assetsUrl}/2021/hackathon/0723/3.png`}
              alt="workshop"
              className="block w-full h-full rounded-3xl"
            />
            <img
              src={`${assetsUrl}/2021/hackathon/0723/4.png`}
              alt="networking session"
              className="block w-full h-full rounded-3xl"
            />
            <img
              src={`${assetsUrl}/2021/hackathon/0723/5.png`}
              alt="always-on snack"
              className="block w-full h-full rounded-3xl"
            />
            <img
              src={`${assetsUrl}/2021/hackathon/0723/6.png`}
              alt="morning yoga"
              className="block w-full h-full rounded-3xl"
            />
            <img
              src={`${assetsUrl}/2021/hackathon/0723/7.png`}
              alt="orientation session"
              className="block w-full h-full rounded-3xl"
            />
            <img
              src={`${assetsUrl}/2021/hackathon/0723/8.png`}
              alt="team-building game"
              className="block w-full h-full rounded-3xl"
            />
          </div>
        </div>
      </div>
      <div
        className={`fixed top-0 left-0 z-90 w-full h-screen bg-black text-gray-50 transition duration-500 ease-in-out transform ${
          qaOpened ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <FontAwesomeIcon
          icon={faTimesCircle}
          className="fixed top-2 left-2 z-100 cursor-pointer"
          color="white"
          size="lg"
          onClick={() => setQAOpened(false)}
        />
        <div className="h-screen px-5 md:px-12 lg:px-24 py-10 flex flex-col justify-center">
          <div className="overflow-auto p-5">
            {QAs.map(({ q, a }, index) => (
              <div
                key={index}
                className={`${index !== QAs.length - 1 && "mb-7"}`}
              >
                <h3 className="text-lg font-semibold">
                  Q: {languageBasedDisplay(q, languageContext.lang)}
                </h3>
                <p>
                  <span className="text-lg font-semibold">A:</span>{" "}
                  {languageBasedDisplay(a, languageContext.lang)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        className={`fixed top-0 left-0 z-90 bg-black text-gray-50 transition duration-500 ease-in-out transform ${
          agendaOpened
            ? "opacity-100 visible w-full h-screen"
            : "opacity-0 invisible w-0 h-0"
        }`}
      >
        <FontAwesomeIcon
          icon={faTimesCircle}
          className="fixed top-2 left-2 z-100 cursor-pointer"
          color="white"
          size="lg"
          onClick={() => setAgendaOpened(false)}
        />
        <div className="h-screen px-5 md:px-12 lg:px-24 py-10 flex flex-col justify-center">
          <div className="overflow-auto p-5">
            <VerticalTimeline>
              {agenda.map(({ duration, name, icon }, index) => (
                <VerticalTimelineElement
                  key={index}
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background: "#151516",
                    color: "#fff",
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid #151516",
                  }}
                  date={`${languageBasedDisplay(
                    duration.startTime,
                    languageContext.lang
                  )} - ${languageBasedDisplay(
                    duration.endTime,
                    languageContext.lang
                  )}`}
                  iconStyle={{
                    background: "#55a9dd",
                    color: "#fff",
                  }}
                  icon={
                    <FontAwesomeIcon
                      icon={icon}
                      color="white"
                      size="lg"
                      onClick={() => setAgendaOpened(false)}
                    />
                  }
                >
                  {name.map((n, index) => (
                    <p key={index}>
                      {languageBasedDisplay(n, languageContext.lang)}
                    </p>
                  ))}
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hackathon2021;
