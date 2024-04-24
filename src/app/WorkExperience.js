// page.js
import React from 'react';
import Popup from './popup'; 
import Image from "next/image";
import Head from "next/head";
import { AiFillLinkedin, AiOutlineGithub, AiOutlineMail } from "react-icons/ai";
import { FaPhone } from 'react-icons/fa';
import jeevan from "../../public/Jeevan_2.png";
import { DiDotnet, DiJava, DiJsBadge, DiPython, DiJqueryLogo, DiMysql, DiMsqlServer, DiReact, DiRedis, DiAws, DiMongodb, DiNodejs, DiGithub, DiGit, DiSass, DiHtml5, DiCss3, DiVisualstudio } from "react-icons/di";
import Icon from '@mdi/react';
import { mdiApacheKafka } from '@mdi/js';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jeevan Dsouza Portfolio</title>
      </Head>

      <main className="bg-cover bg-center bg-no-repeat bg-fixed bg-opacity-50 relative text-black px-10" style={{ backgroundImage: "url('/background_pic.jpg')" }}>
        <Image src={jeevan} className="absolute top-0 right-0 rounded-full w-60 h-60" />

        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <div className="text-center p-10">
              <h2 className="text-5xl py-2 text-teal-600 font-medium">Jeevan Dsouza</h2>
              <h3 className="text-2xl py-2">Software Engineer</h3>
              <div className="text-4xl flex items-center justify-center gap-1">
                <a href="tel:+19452161677" style={{ padding: '0.5rem' }}>
                  <FaPhone />
                </a>
                <a href="mailto:jeevanjd97@gmail.com" style={{ padding: '0.5rem' }}>
                  <AiOutlineMail />
                </a>
                <a href="https://www.linkedin.com/in/jeevan-dsouza-jd/" style={{ padding: '0.5rem' }}>
                  <AiFillLinkedin />
                </a>
                <a href="https://github.com/jeevandsouza" style={{ padding: '0.5rem' }}>
                  <AiOutlineGithub />
                </a>
                <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md text-base" href="#">
                  Resume
                </a>
              </div>
              <p className="text-md py-5 leading-8 font-burtons text-gray-800">
                I have a master's degree in Computer Science and nearly 3 years of software development work experience. I have worked at a high growth startup and have experience
                in both frontend and backend technologies. I am actively searching for new software Engineer roles.
              </p>
              <div>
                <h1 className="text-2xl py-2 text-teal-600 font-medium">Technical Skills</h1>
              </div>
              <div className="flex">
  <div className="flex items-center flex-col mr-4">
    <DiDotnet size={45} />
    <span>DOT Net(C#)</span>
  </div>
  <div className="flex items-center flex-col px-2">
    <DiJava size={45} />
    <span>Java</span>
    </div>
    <div className="flex items-center flex-col px-2">
    <DiJsBadge size={45} />
    <span>Javascript</span>
    </div>
    <div className="flex items-center flex-col px-2">
    <DiPython size={45} />
    <span>Python</span>
    </div>
    <div className="flex items-center flex-col px-2">
    <DiJqueryLogo size={45} />
    <span>Jquery</span>
    </div>
    <div className="flex items-center flex-col px-2">
    <DiMysql size={45} />
    <span>MySQL</span>
    </div>
    <div className="flex items-center flex-col px-2">
    <DiMsqlServer size={45} />
    <span>SQL server</span>
    </div>
    <div className="flex items-center flex-col px-2">
    <DiReact size={45} />
    <span>React</span>
    </div>
    <div className="flex items-center flex-col px-2">
    <DiRedis size={45} />
    <span>Redis</span>
    </div>
    <div className="flex items-center flex-col px-2">
    <Icon path={mdiApacheKafka} size={2} />
    <span>kafka</span>
    </div>
    <div className="flex items-center flex-col px-2">
    <DiAws size={45} />
    <span>AWS,Azure</span>
    </div>
    <div className="flex items-center flex-col px-2">
    <DiMongodb size={45} />
    <span>MongoDB</span>
    </div>
    <div className="flex items-center flex-col px-2">
    <DiNodejs size={45} />
    <span>Nodejs</span>
    </div>
    <div className="flex items-center flex-col px-2">
    <DiGithub size={45} />
    <span>Github</span>
    </div>
    <div className="flex items-center flex-col px-2">
    <DiGit size={45} />
    <span>Git</span>
    </div>
    <div className="flex items-center flex-col px-2">
    <DiSass size={45} />
    <span>SASS</span>
    </div>
    <div className="flex items-center flex-col px-2">
    <DiHtml5 size={45} />
    <span>HTML</span>
    </div>
    <div className="flex items-center flex-col px-2">
    <DiCss3 size={45} />
    <span>CSS</span>
    </div>
    <div className="flex items-center flex-col px-2">
    <DiVisualstudio size={45} />
    <span>visual studio</span>
    </div>
  </div>
              <div>
                <h1 className="text-2xl py-2 text-teal-600 font-medium">Work Experience</h1>
              </div>
              <div className="flex flex-wrap">
                <div className="w-1/2 px-4">
                  <div className="border border-red-800 p-4 mb-4 rounded-lg">
                    <a href="https://brightmindenrichment.org/" target="_blank" rel="noopener noreferrer" className="text-xl font-medium text-blue-600 hover:underline">Brightmind Enrichment</a>
                    <span className="block">Software Developer</span>
                    <span className="block">Feb 2024 - Present</span>
                    <button id="showModalBrightmind" className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2">Show Roles and Responsibilities</button>

                  </div>
                </div>
                <div className="w-1/2 px-4">
                  <div className="border border-red-800 p-4 mb-4 rounded-lg">
                    <a href="https://www.aurigo.com/company/" target="_blank" rel="noopener noreferrer" className="text-xl font-medium text-blue-600 hover:underline">Aurigo Software</a>
                    <span className="block">Software Engineer</span>
                    <span className="block">Jan 2019 - Apr 2021</span>
                    <Popup />

                    

                  </div>
                </div>
              </div>
            </div>
          </nav>
        </section>
      </main>
    </div>
  );
}

