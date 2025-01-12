import { Link } from "react-router-dom";
import Illustration from "./Illustration";
import { Helmet, HelmetProvider } from "react-helmet-async";
import resume from '../../assets/resume/MD. Tahsin Ferdous Resume.pdf';
function Home() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>MD. Tahsin Ferdous | Home</title>
      </Helmet>

      <div className="relative  flex  min-h-[75svh]  items-center overflow-hidden ">
        <div className="absolute left-10 z-10   gap-y-0 text-[12rem] font-extrabold leading-none text-bgText max-sm:hidden">
          <h1>I BUILD</h1>
          <h1>WEBSITES</h1>
        </div>
        <div className="relative z-20 flex flex-col items-start p-4 gap-y-10 md:w-full md:flex-row md:items-start md:justify-between md:px-28">
          <div>
            <h2 className="text-3xl font-bold text-[#eee] md:text-5xl  xl:text-8xl">
              MD. Tahsin Ferdous
            </h2>
            <div className="w-max">
              <h2 className="text-xl font-bold text-[#eee] md:text-3xl ">
                I love to code stuff..
              </h2>
            </div>
            <div>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href={resume} download="MD. Tahsin Ferdous Resume">
                <button className="border-2 border-accentColor px-6 py-2.5 font-medium text-white transition-all hover:bg-accentColor hover:text-gray-900 md:px-9 md:text-xl">
                  Download Resume
                </button>
              </a>
              <Link to="/projects">
                <button className="bg-accentColor px-6 py-2.5 font-medium text-gray-900 transition-all hover:bg-accentColor-hover hover:text-white md:px-9 md:text-xl">
                  View Work
                </button>
              </Link>
              <Link to="/contact">
                <button className="border-2 border-accentColor px-6 py-2.5 font-medium text-white transition-all hover:bg-gray-900 hover:text-accentColor md:px-9 md:text-xl">
                  Contact Me
                </button>
              </Link>
            </div>
          </div>
          <Illustration />
        </div>
      </div>
    </HelmetProvider>
  );
}

export default Home;