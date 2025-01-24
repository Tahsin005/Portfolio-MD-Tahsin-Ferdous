import { Helmet, HelmetProvider } from "react-helmet-async";
import react_icon from "../../assets/icons/react.svg";
import html_icon from "../../assets/icons/icons8-html-5-96.svg";
import css_icon from "../../assets/icons/icons8-css3-96.svg";
import js_icon from "../../assets/icons/javascript.svg";
import tailwind_icon from "../../assets/icons/tailwindcss.svg";
import python_icon from "../../assets/icons/icons8-python.svg";
import c_icon from '../../assets/icons/icons8-c.svg';
import cpp_icon from '../../assets/icons/icons8-c (1).svg';
import django from '../../assets/icons/icons8-django.svg';
import mysql from '../../assets/icons/icons8-mysql.svg';
import postgresql from '../../assets/icons/icons8-postgresql.svg';
import git from '../../assets/icons/git.svg';
import github from '../../assets/icons/github.svg';

import codeforces from '../../assets/icons/icons8-codeforces.-programming-competitions-and-contests,-programming-community.-24.png';
import codechef from '../../assets/icons/icons8-codechef-50.png';
import leetcode from '../../assets/icons/icons8-level-up-your-coding-skills-and-quickly-land-a-job-24.png';
import icpc1 from '../../assets/icons/icpc1.png';


function About() {
  const techStack = [
    html_icon,
    css_icon,
    react_icon,
    tailwind_icon,
    c_icon,
    cpp_icon,
    js_icon,
    python_icon,
    django,
    mysql,
    postgresql,
    git,
    github,
  ];

  const cpStack = [
    { icon: codeforces, link: 'https://codeforces.com/profile/tahsin_ferdous' },
    { icon: codechef, link: 'https://www.codechef.com/users/tahsinferdous3' },
    { icon: leetcode, link: 'https://leetcode.com/u/md-tahsin-ferdous/' },
    { icon: icpc1, link: 'https://icpc.global/ICPCID/UTK72W6QMRFY' },
  ];

  return (
    <HelmetProvider>
      <Helmet>
        <title>MD. Tahsin Ferdous | About</title>
      </Helmet>
      <div className="flex flex-col items-center md:items-start justify-center p-8 gap-y-4 text-textColor xl:gap-y-8">
        <div className="flex flex-col items-center justify-center w-full gap-x-48 xl:flex-row">
          <div className=" xl:order-2 w-full flex items-center justify-center">
            <div className=" box border-4 border-accentColor xl:h-[300px] xl:w-[300px] "></div>
          </div>
          <div className="w-full md:flex md:flex-col md:items-center">
            <h1 className="text-3xl font-extrabold text-white xl:text-start xl:text-6xl">
              Full Stack <br /> Web Developer
            </h1>
            <h2 className="text-xl">
              Dhaka, Bangladesh. 📍
            </h2>
          </div>
        </div>

        <div className="xl:flex xl:gap-x-24 w-full">
          <div className="order-1 space-y-4 text-center xl:w-1/2 ">
            <h2 className="text-2xl font-semibold text-accentColor xl:text-3xl">
              About me:
            </h2>
            <p className="text-lg font-medium leading-tight text-left text-slate-400 xl:text-xl">
            I study Computer Science and Engineering and work on web development. I use Django for the backend and HTML, CSS, Tailwind CSS, JavaScript, and React for the frontend to build web applications.
            </p>
          </div>
          <div className=" xl:w-1/2">
            <h3 className="my-4 text-2xl font-semibold text-center text-accentColor underline-offset-4 max-sm:underline xl:text-3xl">
              Tech Stack{" "}
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-6">
              {techStack.map((item, i) => (
                <img
                  className="p-3 bg-white rounded-full shadow-md cursor-pointer hover:scale-105 transition-transform h-16 w-16"
                  key={i}
                  src={item}
                  alt="tech-stack"
                />
              ))}
            </div>
          </div>
        </div>


        <div className="xl:flex xl:gap-x-24 w-full">
          <div className="order-1 space-y-4 text-center xl:w-1/2 ">
            <h2 className="text-2xl font-semibold text-accentColor xl:text-3xl">
              Experience:
            </h2>
            <h3 className="text-lg font-semibold text-left text-accentColor xl:text-xl">
            Python Developer - Stealth Startup (Oct 2024 - Nov 2024, Remote){" "}
            </h3>
            <ul className="text-left list-disc list-inside text-slate-400 xl:text-lg">
              <li>Developed and optimized backend systems using Python and Django REST Framework.</li>
            </ul>
          </div>
          <div className=" xl:w-1/2">
            <h3 className="my-4 text-2xl font-semibold text-center text-accentColor underline-offset-4 max-sm:underline xl:text-3xl">
              Competitive Programming{" "}
            </h3>
            <div className="mt-4 text-lg text-center text-white md:text-xl">
              <p>Codeforces <span className="text-green-600">Pupil</span></p>
              <p><span className="text-sky-400">3 Star</span> at CodeChef</p>
              <p><span className="text-blue-500">I</span><span className="text-red-500">C</span ><span className="text-yellow-500">P</span><span>C</span> Dhaka Regional 2024 Contestant</p>
              <p className="font-semibold">Total <span className="text-purple-500">1500+</span> problems solved</p>
            </div>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
}
export default About;
