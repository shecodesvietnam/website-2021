import { Link } from "react-router-dom";

import { assetsUrl } from "./../config.json";

const hackathons = {
  2021: {
    img: `${assetsUrl}/2021/hackathon/2021.png`,
  },
  2020: {
    img: `${assetsUrl}/2021/hackathon/2020.png`,
    url: "https://shecodesvietnam.github.io/website-2020/#/",
  },
  2019: {
    img: `${assetsUrl}/2021/hackathon/2019.png`,
    url: "https://shecodesvietnam.github.io/SheCodesHackathon2019/",
  },
  2018: {
    img: `${assetsUrl}/2021/hackathon/2018.png`,
  },
};

function Hackathon() {
  return (
    <>
      <article className="grid grid-cols-1 md:grid-cols-2">
        <section className="relative group">
          <img
            className="block w-full h-auto"
            src={hackathons[2021].img}
            alt="hackathon 2021"
          />
          <Link
            to="/hackathon/2021"
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
            <h2 className="text-center text-gray-50 text-5xl">2021</h2>
          </Link>
        </section>
        <section className="relative group">
          <img
            className="block w-full h-auto"
            src={hackathons[2020].img}
            alt="hackathon 2020"
          />
          <a
            href={hackathons[2020].url}
            rel="noreferrer"
            target="_blank"
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
            <h2 className="text-center text-gray-50 text-5xl">2020</h2>
          </a>
        </section>
        <section className="relative group">
          <img
            className="block w-full h-auto"
            src={hackathons[2019].img}
            alt="hackathon 2019"
          />
          <a
            href={hackathons[2019].url}
            rel="noreferrer"
            target="_blank"
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
            <h2 className="text-center text-gray-50 text-5xl">2019</h2>
          </a>
        </section>
        <section className="relative group">
          <img
            className="block w-full h-auto"
            src={hackathons[2018].img}
            alt="hackathon 2018"
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
            <h2 className="text-center text-gray-50 text-5xl">2018</h2>
          </div>
        </section>
      </article>
    </>
  );
}

export default Hackathon;
