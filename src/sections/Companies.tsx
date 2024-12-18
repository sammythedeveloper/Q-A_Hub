import Express from "../assets/images/Express.svg";
import React from "../assets/images/react.svg";
import Javascript from "../assets/images/JavaScript.svg";
import Typescript from "../assets/images/TypeScript.svg";
import Mango from "../assets/images/MongoDB.svg";
import Node from "../assets/images/Node.js.svg";
import mysql from "../assets/images/MySQL.svg";
import tailwind from "../assets/images/Tailwind CSS.svg";
import HTML from "../assets/images/HTML5.svg";
import CSS from "../assets/images/CSS3.svg";
import { div } from "framer-motion/client";

export const companies = [
  
  {
    name: "HTML",
    logo: HTML,
  },
  {
    name: "CSS",
    logo: CSS,
  },{
    name: "Javascript",
    logo: Javascript,
  },
  {
    name: "Mango",
    logo: Mango,
  },
  {
    name: "Node",
    logo: Node,
  },
  {
    name: "mysql",
    logo: mysql,
  },
  {
    name: "Typescript",
    logo: Typescript,
  },
  {
    name: "tailwind",
    logo: tailwind,
  },
  {
    name: "React",
    logo: React,
  },
];

export const Companies = () => {
  return <section className=" pb-[1000px]" >
    <div className="container" >
      <div className=" flex justify-center  " >
        <h2 className=" text-2xl text-center font-semibold " >Empowering users to ask, answer, and collaborate on tackling complex challenges.</h2>
      </div>
      <div className=" flex justify-center  " >
      <div className=" size-10 " >
      {companies.map(({ logo:Logo, name }) => (
        <div key={name} >
          <Logo/>
          
       </div> 
      ))}
      </div>
      </div>
    </div>
  </section>;
};

export default Companies;
