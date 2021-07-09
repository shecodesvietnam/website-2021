import Button from "../components/layout/Button";
// import { assetsUrl } from "./../config.json";
import { useHeader } from "./../hooks/header";

function TechMarathon() {
  useHeader();

  return (
    <>
      <aside className="bg-black-light bg-opacity-95 py-3 mt-0 bg-blur-lg w-auto sticky top-0 z-40 border-b border-gray-800">
        <nav className="lg:w-11/12 xl:w-10/12 lg:mx-auto lg:flex lg:items-center lg:justify-between px-2">
          <h2 className="text-gray-50">Tech Marathon</h2>
          <div className="flex justify-center items-center">
            <ul className="flex justify-center mr-10 text-gray-50">
              <li className="mr-5">Tổng quan</li>
              <li>Cổng thông tin học tập</li>
            </ul>
            <Button small={true}>Đăng ký</Button>
          </div>
        </nav>
      </aside>
      <article className="h-60 bg-black"></article>
      <article className="h-60 bg-black"></article>
      <article className="h-60 bg-black"></article>
      <article className="h-60 bg-black"></article>
      <article className="h-60 bg-black"></article>
      <article className="h-60 bg-black"></article>
    </>
  );
}

export default TechMarathon;
