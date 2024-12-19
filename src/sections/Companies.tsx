import Express from "../assets/images/Express.svg";
import ReactLogo from "../assets/images/react.svg";
import Javascript from "../assets/images/JavaScript.svg";
import Typescript from "../assets/images/TypeScript.svg";
import Mango from "../assets/images/MongoDB.svg";
import Node from "../assets/images/Node.js.svg";
import Mysql from "../assets/images/MySQL.svg";
import Tailwind from "../assets/images/Tailwind CSS.svg";
import HTML from "../assets/images/HTML5.svg";
import CSS from "../assets/images/CSS3.svg";
import { SectionBorder } from "@/components/SectionBorder";
import { SectionContent } from "@/components/SectionContent";
import { Button } from "@/components/Button";

export const companies = [
  {
    name: "HTML",
    logo: HTML,
  },
  {
    name: "CSS",
    logo: CSS,
  },
  {
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
    name: "Mysql",
    logo: Mysql,
  },
  {
    name: "Typescript",
    logo: Typescript,
  },
  {
    name: "Tailwind",
    logo: Tailwind,
  },
  {
    name: "React",
    logo: ReactLogo,
  },
];
const Footer = () => {
  return (
    <footer className="bg-gray-950 border-t border-b border-gray-200/20 text-gray-100 py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
        <p className="text-sm mt-2">
          Built with <span className="text-blue-500">love</span> and creativity.
        </p>
      </div>
    </footer>
  );
};
export const Companies = () => {
  return (
    <section className="py-0">
      <div className="container mx-auto">
        <SectionBorder>
          <div className=" flex items-center justify-center pt-12 w-full ">
            <Button className="   ">
              Are you Ready to learn and share your thoughts?
            </Button>
          </div>
          <SectionContent>
            <h2 className="text-3xl text-center font-semibold mb-8">
              Empowering users to ask, answer, and collaborate on tackling
              complex challenges.
            </h2>
            <div className="flex justify-center items-center gap-6 flex-wrap">
              {companies.map(({ logo: Logo, name }) => (
                <div
                  key={name}
                  className="w-16 h-16 flex justify-center items-center"
                >
                  <Logo className="w-full h-full" />
                </div>
              ))}
            </div>
          </SectionContent>
          <Footer />
        </SectionBorder>
      </div>
    </section>
  );
};

export default Companies;
