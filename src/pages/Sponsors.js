import { useContext } from "react";

import LanguageContext from "./../contexts/Language";
import { assetsUrl } from "./../config.json";
import { configLanguage, languageBasedDisplay } from "./../utils/language";

const partners = [
  {
    imgSrc: `${assetsUrl}/2021/sponsors/AI4E.png`,
    alt: "AI4E",
  },
  {
    imgSrc: `${assetsUrl}/2021/sponsors/Babson_College_logo.svg.png`,
    alt: "Babson College",
  },
  {
    imgSrc: `${assetsUrl}/2021/sponsors/CSDS%20logo_final%20with%20slogan.jpg`,
    alt: "CSDS",
  },
  {
    imgSrc: `${assetsUrl}/2021/sponsors/Logo%20Rudicaf.png`,
    alt: "Rudicaf",
  },
  {
    imgSrc: `${assetsUrl}/2021/sponsors/%5Bđơn%20vị%20đồng%20hành%5D%20HCHVLive.png`,
    alt: "HCHVLive",
  },
  {
    imgSrc: `${assetsUrl}/2021/sponsors/OSAM.png`,
    alt: "OSAM",
  },
  {
    imgSrc: `${assetsUrl}/2021/sponsors/Shopee-logo.jpg`,
    alt: "Shopee",
  },
  {
    imgSrc: `${assetsUrl}/2021/sponsors/WTM%20logo_horiz_rgb.png`,
    alt: "Women Tech Maker",
  },
  {
    imgSrc: `${assetsUrl}/2021/sponsors/%5BNTT%20bạc%5D%20lucky%20uniform.jpg`,
    alt: "Lucky Uniform",
  },
  {
    imgSrc: `${assetsUrl}/2021/sponsors/%5BNTT%20bạc%5D%20zalora.jpg`,
    alt: "Zalora",
  },
  {
    imgSrc: `${assetsUrl}/2021/sponsors/%5BNTT%20bạch%20kim%5D%20Bedrock.png`,
    alt: "Bedrock",
  },
  {
    imgSrc: `${assetsUrl}/2021/sponsors/coworking-space-logo.jpg`,
    alt: "Up",
  },
  {
    imgSrc: `${assetsUrl}/2021/sponsors/%5BNTT%20vang%5D%20AWS.png`,
    alt: "AWS Vietnam User Group",
  },
  {
    imgSrc: `${assetsUrl}/2021/sponsors/%5BNTT%20vàng%5D%20coderschool.jpg`,
    alt: "Coderschool",
  },
  {
    imgSrc: `${assetsUrl}/2021/sponsors/%5BNTT%20vàng%5D%20summit.png`,
    alt: "Summit",
  },
  {
    imgSrc: `${assetsUrl}/2021/sponsors/%5Bmedia%20partner%5D%20Global%20Entre.png`,
    alt: "Global Entrepreneur",
  },
  {
    imgSrc: `${assetsUrl}/2021/sponsors/bkup.PNG`,
    alt: "BKUp",
  },
  {
    imgSrc: `${assetsUrl}/2021/sponsors/cinnamon-ai-labs-logo.jpg`,
    alt: "Cinnamon",
  },
  {
    imgSrc: `${assetsUrl}/2021/sponsors/colorme-logo.jpg`,
    alt: "ColorMe",
  },
  {
    imgSrc: `${assetsUrl}/2021/sponsors/cốc%20cốc%20logo.jpg`,
    alt: "Cốc Cốc",
  },
  {
    imgSrc: `${assetsUrl}/2021/sponsors/gears.png`,
    alt: "Gears",
  },
  {
    imgSrc: `${assetsUrl}/2021/sponsors/globalcare-logo.jpg`,
    alt: "Global Care",
  },
  {
    imgSrc: `${assetsUrl}/2021/sponsors/gấu%20logo.png`,
    alt: "Gấu",
  },
  {
    imgSrc: `${assetsUrl}/2021/sponsors/innovatube%20logo.png`,
    alt: "Innovatube",
  },
  {
    imgSrc: `${assetsUrl}/2021/sponsors/lan-logo.jpg`,
    alt: "Ian",
  },
  {
    imgSrc: `${assetsUrl}/2021/sponsors/logo-ebiv-.jpg`,
    alt: "EBIV",
  },
  {
    imgSrc: `${assetsUrl}/2021/sponsors/openm-logo.jpg`,
    alt: "OpenM",
  },
  {
    imgSrc: `${assetsUrl}/2021/sponsors/sutunam-logo.jpg`,
    alt: "Sutunam",
  },
  {
    imgSrc: `${assetsUrl}/2021/sponsors/techkids-coding-school-5839bff44088b.jpg`,
    alt: "TechKid",
  },
  {
    imgSrc: `${assetsUrl}/2021/sponsors/true%20juice%20logo.png`,
    alt: "True Juice",
  },
  {
    imgSrc: `${assetsUrl}/2021/sponsors/umbala-network-logo.jpg`,
    alt: "Umbala Network",
  },
  {
    imgSrc: `${assetsUrl}/2021/sponsors/wise%20vietnam.png`,
    alt: "Wise Vietnam",
  },
  {
    imgSrc: `${assetsUrl}/2021/sponsors/yseaiLogoVer.png`,
    alt: "YSEALI",
  },
  {
    imgSrc: `${assetsUrl}/2021/sponsors/Chợ Tốt - Bạch Kim.png`,
    alt: "Chợ Tốt",
  },
  {
    imgSrc: `${assetsUrl}/2021/sponsors/axon delta black.png`,
    alt: "Axon",
  },
  {
    imgSrc: `${assetsUrl}/2021/sponsors/FUNiX- NTT HIỆN VẬT.png`,
    alt: "FUNiX",
  },
  {
    imgSrc: `${assetsUrl}/2021/sponsors/Netcompany_Đồng tổ chức.png`,
    alt: "netcompany",
  },
  {
    imgSrc: `${assetsUrl}/2021/sponsors/USA-Flag (trái).jpg`,
    alt: "US Embassy",
  },
];

function Sponsors() {
  const languageContext = useContext(LanguageContext);

  return (
    <>
      <article className="relative">
        <section className="bg-white grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-8 2xl:grid-cols-9">
          {partners.map(({ imgSrc, alt }, index) => (
            <div className="flex flex-col justify-center">
              <img
                key={index}
                className="block w-full"
                src={imgSrc}
                alt={alt}
              />
            </div>
          ))}
        </section>
        <section className="fixed top-0 left-0 z-40 w-full h-full bg-black bg-opacity-80">
          <div className="flex flex-col justify-center h-full">
            <p className="text-gray-50 px-10 sm:px-32 text-2xl text-justify">
              {languageBasedDisplay(
                configLanguage(
                  `SheCodes Việt Nam chân thành cảm ơn sâu sắc các nhà tài trợ, các
              doanh nghiệp, tổ chức đã, đang và sẽ đồng hành cùng chúng tôi thực
              hiện giấc mơ trao quyền, khuyến khích phái nữ dấn thân vào lĩnh
              vực công nghệ, gia tăng nguồn nhân lực chất lượng, nhiệt huyết,
              đóng góp tích cực vào công cuộc chuyển đổi số hoá tại Việt Nam.`,
                  `SheCodes Vietnam sincerely thanks the sponsors, businesses and 
              organizations that have been and will be accompanying us to realize 
              the dream of empowering and encouraging women to engage in the field 
              of technology, which increase qualified and enthusiastic human 
              resources, actively contribute to the digital transformation in Vietnam.`
                ),
                languageContext.lang
              )}
            </p>
          </div>
        </section>
      </article>
    </>
  );
}

export default Sponsors;
