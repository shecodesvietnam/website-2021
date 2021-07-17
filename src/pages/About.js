import { useContext } from "react";
import Slider from "react-slick";

import LanguageContext from "./../contexts/Language";
import { assetsUrl } from "./../config.json";
import { configLanguage, languageBasedDisplay } from "./../utils/language";

function About() {
  const languageContext = useContext(LanguageContext);

  return (
    <>
      <article
        className="text-gray-50 h-screen relative"
        style={{
          backgroundImage: `url("${assetsUrl}/2021/about/IMG_6536.JPG")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <section className="bg-black bg-opacity-80 fixed top-0 left-0 w-full h-full flex flex-col justify-center px-5 pb-10 sm:pb-0 sm:px-10 md:px-32 text-base sm:text-lg md:text-xl">
          <Slider
            dots={false}
            infinite
            speed={500}
            slidesToShow={1}
            slidesToScroll={1}
            className="px-2 mx-2"
          >
            <p className="px-5">
              {languageBasedDisplay(
                configLanguage(
                  `SheCodes Việt Nam là một tổ chức phi lợi nhuận, nhằm khuyến khích
            phái nữ tham gia vào lĩnh vực Công nghệ thông tin, qua đó dần dần
            xóa bỏ khoảng cách giới tính trong lĩnh vực này. Năm 2018, SheCodes
            Việt Nam được triển khai lần đầu tiên tại TP Hà Nội, Việt Nam với sự
            kiện tiên phong mang tên SheCodes Hackathon cùng sự tham gia của hơn
            200 bạn nữ CNTT. Hiện nay, SheCodes đã mở rộng các chương trình hoạt
            động tại cả thành phố Hà Nội và Hồ Chí Minh; thu hút hơn 6000 bạn
            trẻ quan tâm trên khắp cả nước.`,
                  `SheCodes Vietnam is a non-profit organization, aiming to encourage women 
            to participate in the field of Information Technology, thereby gradually 
            closing the gender gap in this field. In 2018, SheCodes Vietnam was first 
            deployed in Hanoi, Vietnam with a pioneering event called SheCodes Hackathon 
            with the participation of more than 200 female IT friends. Currently, SheCodes 
            has expanded its programs to both Hanoi and Ho Chi Minh City; attracted more 
            than 6000 interested young people across the country.`
                ),
                languageContext.lang
              )}
            </p>
            <p className="px-5">
              {languageBasedDisplay(
                configLanguage(
                  `Chúng tôi muốn thay đổi tư duy của mọi người về phái nữ trong Công
            nghệ thông tin và tạo ra một môi trường dám thử sức - dám thất bại
            để phái nữ có thể thoải mái sáng tạo, học hỏi về công nghệ. Chúng
            tôi hi vọng chính những người tham dự của SheCodes sẽ tạo nên một
            tương lai cho nền công nghệ tại Việt Nam.`,
                  `We want to change people's thinking about women in Information 
            Technology and create an environment that dares to try - dare to fail 
            so that women can freely create and learn about technology. We hope that 
            SheCodes attendees will create a future for the technology industry in Vietnam.`
                ),
                languageContext.lang
              )}
            </p>
          </Slider>
        </section>
      </article>
    </>
  );
}

export default About;
