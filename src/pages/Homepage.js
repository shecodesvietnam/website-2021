import { useContext } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import LanguageContext from "./../contexts/Language";
import { assetsUrl } from "./../config.json";
import { configLanguage, languageBasedDisplay } from "./../utils/language";
import { simplify } from "./../utils/text";
import Button from "./../components/layout/Button";

const contents = {
  intro: {
    header: {
      subtitle: configLanguage(
        "nơi phái nữ được là chính mình",
        "be yourself!"
      ),
    },
    description: configLanguage(
      `Chúng tôi khuyến khích phái nữ tham gia vào lĩnh vực CNTT, qua đó dần
    xóa bỏ khoảng cách giới tính, thay đổi tư duy của mọi người về phái nữ
    và tạo ra một môi trường dám thử sức - dám thất bại,khích lệ sự sáng
    tạo, học hỏi công nghệ.`,
      `We encourage women to take part in the Tech industry with the aim to narrow 
    the gender gap, reduce prejudice and create a supportive environment for 
    creativity and thirst for knowledge.`
    ),
  },
  programs: {
    hackathon: {
      imgSrc: `${assetsUrl}/2020/media/hackathon.jpg`,
      title: "HACKATHON",
      description: configLanguage(
        `SheCodes Hackathon là hackathon đầu tiên dành riêng cho phái nữ tại Việt Nam, 
      với mục tiêu phá vỡ rào cản công nghệ gần với cuộc sống và cung cấp một sân chơi 
      để người tham gia thể hiện sự sáng tạo của mình thông qua sự trợ giúp của công 
      nghệ. SheCodes Hackathon còn là nơi giúp các bạn nữ trở nên tự tin, dám nghĩ 
      dám làm qua làm việc nhóm và hiểu rõ hơn về các ngành nghề trong lĩnh vực công 
      nghệ cũng như những xu hướng công nghệ hàng đầu . Đối với nhà tài trợ, SheCodes 
      Hackathon tạo cơ hội tiếp cận và tuyển dụng các bạn trẻ trong ngành IT, đặc biệt 
      là phái nữ, từ đó đẩy mạnh bình đẳng giới trong doanh nghiệp.`,
        `SheCodes Hackathon is the first Hackathon for females in Vietnam, aims to 
      remove technological barriers in daily lives anda playground for participants 
      to express their creativity through the assistance of technology.  SheCodes 
      Hackathon aspires to empower female students to be more confident, risk-taking 
      through teamwork and more aware of the different career paths and leading trends 
      in the tech industry. For sponsors, SheCodes Hackathon also creates opportunities 
      to approach and recruit young people in the IT industry, especially women, thereby 
      promoting gender equality in businesses.`
      ),
      link: "/hackathon",
    },
    techMarathon: {
      imgSrc: `${assetsUrl}/2020/media/precoding-1.png`,
      title: "TECH MARATHON",
      description: configLanguage(
        `Tech Marathon là chuỗi các lớp học "crash course" dành cho những người chưa có 
      kinh nghiệm lập trình, tập trung vào hai mảng: Kỹ năng lập trình (Technical 
      skills) & Định hướng nghề nghiệp (Career Exploration). Học viên sẽ được học 
      lập trình dựa trên dự án và kèm cặp sát sao cùng mentor. Sau Tech Marathon, 
      học viên sẽ có được kỹ năng lập trình căn bản và định hướng để tiếp tục theo 
      đuổi ngành lập trình một cách chuyên sâu và phù hợp với bản thân. `,
        `Tech Marathon is a series of "crash course" classes for the non-tech, focusing 
      n Technical skills & Career Exploration. Students will learn project-based 
      programming with 1-1 assistance from our mentors. After each Tech Marathon class, 
      students will gain basic programming skills and assistance in navigating their 
      career.`
      ),
      link: "/tech-marathon",
    },
    talentConnector: {
      imgSrc: `${assetsUrl}/2020/hackathon/IMG_6217.JPG`,
      title: "TALENT CONNECTOR",
      description: configLanguage(
        `Với mục tiêu đẩy mạnh sự đa dạng và thu hẹp khoảng cách giới tính trong lĩnh 
      vực công nghệ, chương trình SheCodes Talent Connector ra đời nhằm kết nối các 
      nữ sinh viên năm ba, năm tư theo học lĩnh vực công nghệ tại các trường đại học 
      tại Việt Nam với những cơ hội thực tập 3 tới 6 tháng tại các doanh nghiệp hàng 
      đầu trong lĩnh vực công nghệ. Người tham dự sẽ có cơ hội trải nghiệm, nhận được 
      mentorship và training các kĩ năng cần thiết trong quá trình làm việc.`,
        `With the goal to promote diversity and bridge the gender gap in the 
      technology sector in Vietnam, SheCodes Talent Connector Program is built to 
      connect outstanding third-year and fourth-year female undergraduate students 
      with 3-to-6-month internship opportunities offered by Vietnam's leading 
      companies in the technology sector. During the course of the program, 
      participants will have opportunities to get mentorship and training.`
      ),
      link: "/talent-connector",
    },
    mentorship: {
      imgSrc: `${assetsUrl}/2020/media/precoding-2.png`,
      title: "MENTORSHIP",
      description: configLanguage(
        `Chương trình SheCodes Mentorship được xây dựng để giúp các bạn nữ (mentees) 
      phát triển kiến thức, kỹ năng chuyên môn và cơ hội nghề nghiệp trong lĩnh vực 
      công nghệ thông qua sự hướng dẫn của những người cố vấn (mentors). Khi tham 
      gia chương trình, mentees không chỉ nhận được những lời khuyên, định hướng, 
      kinh nghiệm từ mentors của mình mà còn được tham gia vào các hoạt động kết nối 
      với các mentees khác và đặc biệt là các nhà tuyển dụng trong lĩnh vực công nghệ.`,
        `The SheCodes Mentorship Program gears towards helping Vietnamese females 
      (mentees) enhance knowledge and professional skills and pursue technology 
      careers by connecting them with mentors with various skillsets and expertise. 
      Further, becoming  SheCodes mentees provides females with exclusive activities 
      to connect with other talented mentees and companies partnered with SheCodes.`
      ),
      link: "/mentorship",
    },
    webinar: {
      imgSrc: `${assetsUrl}/2019/hackathon/event.jpg`,
      title: "WEBINAR",
      description: configLanguage(
        `Webinar là chuỗi các hội thảo được tổ chức trực tuyến nhằm cung cấp cho các 
      bạn cái nhìn cụ thể về các ngành nghề trong lĩnh vực công nghệ. Mỗi Webinar 
      sẽ có sự tham gia của các diễn giả có kinh nghiệm lâu năm để cung cấp cho các 
      bạn cái nhìn tổng quan nhất và đưa ra những bài học quý giá. Thông qua các 
      webinars, SheCodes hy vọng sẽ mang đến một môi trường chia sẻ, hỏi-đáp hữu ích 
      nhằm giúp người tham gia xác định được con đường nghề nghiệp phù hợp trong 
      tương lai.`,
        `Webinar is an online workshop held in Zoom/Discord about a specific field or 
      career that attracts people’s attention at that time. For each webinar, we 
      would invite 2 or 3 guest speakers who have a wide experience in that area to 
      provide an overview and helpful lessons. Shecodes hopes to bring an open 
      sharing environment, which may help participants have a clear plan for their 
      future career paths.`
      ),
      link: "/webinar",
    },
  },
  founderQuotes: {
    tien: {
      imgSrc: `${assetsUrl}/2020/staffs/HN/Director_Mai_Phuong_Thuy_Tien.jpg`,
      text: configLanguage(
        `Khi các bên đối tác hỏi SheCodes rằng liệu có đủ phái nữ thích công nghệ để 
      mà thực hiện chương trình không thì câu trả lời sẽ luôn là có. Luôn có một nguồn 
      nhân lực nữ đam mê tự học về IT, say sưa với từng dòng code, nhưng đơn giản là họ 
      chưa tìm thấy đất dụng võ cho mình. SheCodes sẽ tạo ra một network để nữ giới 
      phá bỏ các rào cản cá nhân và xã hội để can trường dấn thân vào lĩnh vực công 
      nghệ này.`,
        `When partners ask SheCodes if there are enough tech-savvy women to run the 
      program, the answer will always be yes. There is always a female human resource 
      who is passionate about self-studying about IT, passionate about each line of 
      code, but they simply have not found the land to use martial arts for 
      themselves. SheCodes will create a network for women to break down personal and 
      social barriers to bravely enter this technology field.`
      ),
      fullCaption: configLanguage(
        "Mai Phương Thủy Tiên (Đồng sáng lập SheCodes Việt Nam)",
        "Mai Phuong Thuy Tien (Co-Founder of SheCodes Vietnam"
      ),
    },
    my: {
      imgSrc: `${assetsUrl}/2020/staffs/HN/PM_Nguyen_Huyen_My.jpg`,
      text: configLanguage(
        `Khi các bên đối tác hỏi SheCodes rằng liệu có đủ phái nữ thích công nghệ để 
      mà thực hiện chương trình không thì câu trả lời sẽ luôn là có. Luôn có một nguồn 
      nhân lực nữ đam mê tự học về IT, say sưa với từng dòng code, nhưng đơn giản là họ 
      chưa tìm thấy đất dụng võ cho mình. SheCodes sẽ tạo ra một network để nữ giới 
      phá bỏ các rào cản cá nhân và xã hội để can trường dấn thân vào lĩnh vực công 
      nghệ này.`,
        `Some of the questions that arise are “Why SheCodes, not HeCodes? Are you 
      missing the opportunity of the other gender?” At SheCodes Vietnam, our efforts 
      are always devoted to the goal of respecting and creating conditions for 
      everyone to be free to do what they like regardless of gender. Realizing the 
      great difficulties of women entering the IT field, our team here, both men and 
      women, is ready to support you to overcome your fears and barriers.`
      ),
      fullCaption: configLanguage(
        "Nguyễn Huyền My (Đồng sáng lập SheCodes Việt Nam)",
        "Nguyen Huyen My (Co-Founder of SheCodes Vietnam)"
      ),
    },
    ha: {
      imgSrc: `${assetsUrl}/2020/staffs/HN/PM_Nguyen_Vu_Ngan_Ha.jpg`,
      text: configLanguage(
        `Chỉ cần có định hướng và những cơ hội phù hợp, phái nữ có thể tiến xa hơn bất kì 
      ai. Vì vậy, tôi tin Tech Marathon là một chương trình có thể đem đến cơ hội và sự 
      định hướng đó cho những bạn nữ - nhất là những người đang phân vân giữa những ngã 
      rẽ nghề nghiệp, giúp họ tự tin hơn để theo đuổi ngành công nghệ thông tin.`,
        `With the right direction and opportunities, women can go further than anyone 
      else. Therefore, I believe Tech Marathon is a program that can bring that 
      opportunity and orientation to women - especially those who are confused between 
      career paths, helping them to be more confident to pursue their career. Information 
      Technology.`
      ),
      fullCaption: configLanguage(
        "Nguyễn Vũ Ngân Hà (Trưởng chương trình Tech Marathon)",
        "Nguyen Vu Ngan Ha (Head of Tech Marathon)"
      ),
    },
  },
  theNumbers: [
    {
      quantity: "30+",
      title: configLanguage("Sự kiện", "Events"),
    },
    {
      quantity: "3000+",
      title: configLanguage("Người tham gia sự kiện", "Event Participants"),
    },
    {
      quantity: "45+",
      title: configLanguage(
        "Diễn giả và các đối tác công ty công nghệ hàng đầu",
        "Guest Speakers and Technology Partners"
      ),
    },
    {
      quantity: "10000+",
      title: configLanguage(
        "Người theo dõi các hoạt động, chương trình của Shecodes Việt Nam",
        "Activity/Event Followers"
      ),
    },
  ],
};

const readMore = configLanguage("Đọc thêm", "Read More");

function Homepage({ history }) {
  const languageContext = useContext(LanguageContext);

  function moveToHackathonPage() {
    history.push("/hackathon");
  }

  return (
    <>
      <article className="bg-light px-2 lg:px-20 xl:px-28 py-16 mb-2">
        <header className="mb-16">
          <h2 className="text-center font-title">
            <span className="block tracking-widest mb-3 text-4xl sm:text-6xl font-title">
              SheCodes Vietnam
            </span>
            <span className="block leading-tight text-2xl sm:text-4xl">
              {languageBasedDisplay(
                contents.intro.header.subtitle,
                languageContext.lang
              )}
            </span>
          </h2>
        </header>
        <p className="text-2xl text-justify px-5 w-full xl:w-3/4 2xl:w-2/3 mx-auto">
          {languageBasedDisplay(
            contents.intro.description,
            languageContext.lang
          )}
        </p>
        <div className="mt-16 flex justify-center">
          <Button onClick={moveToHackathonPage}>
            {languageBasedDisplay(
              configLanguage("Tham gia Hackathon", "Join Hackathon"),
              languageContext.lang
            )}
          </Button>
        </div>
      </article>
      <article className="pt-32 py-5 bg-black">
        <h3 className="text-center text-5xl leading-tight sm:leading-none px-2 lg:px-0 font-semibold text-gray-50">
          {languageBasedDisplay(
            configLanguage(
              `Đôi Lời Chia Sẻ Từ Những Nhà Sáng Lập`,
              `A Few Thoughts From Our Founders`
            ),
            languageContext.lang
          )}
        </h3>
        <Slider
          dots={false}
          infinite
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
          className="w-5/6 lg:w-3/4 mx-auto"
        >
          {Object.keys(contents.founderQuotes).map((key, index) => (
            <figure key={index} className="text-justify">
              <div className="py-12 px-6">
                <img
                  className="block rounded-full mx-auto w-36 h-36 mb-5"
                  src={contents.founderQuotes[key].imgSrc}
                  alt={key}
                />
                <blockquote className="mb-4 text-2xl">
                  <p className="text-gray-50">
                    {languageBasedDisplay(
                      contents.founderQuotes[key].text,
                      languageContext.lang
                    )}
                  </p>
                </blockquote>
                <figcaption className="flex justify-center mb-2 italic text-lg text-gray-50">
                  <div>
                    -{" "}
                    {languageBasedDisplay(
                      contents.founderQuotes[key].fullCaption,
                      languageContext.lang
                    )}
                  </div>
                </figcaption>
              </div>
            </figure>
          ))}
        </Slider>
      </article>
      <article className="px-2 pt-2 lg:grid lg:grid-cols-2 lg:gap-2 lg:items-center">
        {Object.keys(contents.programs).map((key, index) => (
          <section key={index} className="relative group mb-2 lg:mb-0">
            <img
              className="w-full h-auto object-cover"
              src={contents.programs[key].imgSrc}
              alt={contents.programs[key].title}
            />
            <div
              className="
                flex
                flex-col
                justify-end
                px-5 
                py-4 
                text-gray-50 
                text-xs
                sm:text-xl 
                absolute 
                top-0 
                left-0 
                w-full 
                h-full 
                transition 
                duration-500 
                ease-in-out 
                opacity-0 
                group-hover:opacity-100 
                transform 
                group-hover:bg-black
                group-hover:bg-opacity-60
              "
            >
              <h3 className="text-xl sm:text-5xl mb-4 font-title">
                <strong>{contents.programs[key].title}</strong>
              </h3>
              <p className="text-justify">
                {simplify(
                  languageBasedDisplay(
                    contents.programs[key].description,
                    languageContext.lang
                  ),
                  40
                )}
                {" ..."}
              </p>
              <div className="block mt-7">
                <Link
                  className="hover:underline"
                  to={contents.programs[key].link}
                >
                  {languageBasedDisplay(readMore, languageContext.lang)} {">"}
                </Link>
              </div>
            </div>
          </section>
        ))}
        <section className="text-justify lg:text-left px-10 py-10 lg:py-0 h-full flex flex-col justify-center bg-light">
          <p className="text-2xl">
            {languageBasedDisplay(
              configLanguage(
                `Chúng tôi luôn cố gắng tạo ra những chương trình bổ ích, thực tế qua
              đó giúp bạn có được những trải nghiệm tuyệt vời nhất`,
                `We always try to create useful and practical programs through which 
              to help you get the best experience.`
              ),
              languageContext.lang
            )}
          </p>
        </section>
      </article>
      <article
        className="mb-2"
        style={{
          backgroundImage: `url("${assetsUrl}/2020/media/homepage-secondary.png")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="bg-black bg-opacity-60 w-full h-auto mt-2 py-32 sm:grid sm:grid-cols-2 text-gray-50">
          <header className="col-span-full mb-20">
            <h3 className="text-center px-2 lg:px-0 leading-tight sm:leading-none text-5xl font-semibold">
              {languageBasedDisplay(
                configLanguage(
                  `Những Con Số Qua Từng Năm`,
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
