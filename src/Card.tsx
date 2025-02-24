import { useState } from "react";
import { FaReact, FaNodeJs, FaWordpress, FaFire } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiNestjs,
} from "react-icons/si";
import explosion from "./assets/explode.gif";
import explosionsound from "./assets/explosionsound.mp3";

interface CardProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}
const techStack = [
  { Icon: FaReact, name: "React", color: "text-blue-500" },
  { Icon: SiTailwindcss, name: "TailwindCSS", color: "text-teal-400" },
  { Icon: SiTypescript, name: "Typescript", color: "text-blue-600" },
  { Icon: SiNextdotjs, name: "NextJS", color: "text-white" },
  { Icon: DiMongodb, name: "MongoDB", color: "text-green-500" },
  { Icon: FaFire, name: "Firebase", color: "text-yellow-500" },
  { Icon: FaWordpress, name: "WordPress", color: "text-blue-700" },
  { Icon: FaNodeJs, name: "Node.js", color: "text-green-600" },
  { Icon: SiNestjs, name: "NestJS", color: "text-red-600" },
];

const explosionSequence = ["React", "NestJS", "WordPress", "Typescript"];

function Card({ activeTab, setActiveTab }: CardProps) {
  const [, setClickOrder] = useState<string[]>([]);
  const [explode, setExplode] = useState(false);
  const handleTechClick = (name: string) => {
    if (explode) return;

    setClickOrder((prev) => {
      const newOrder = [...prev, name];

      if (newOrder.length > explosionSequence.length) {
        newOrder.shift();
      }

      if (JSON.stringify(newOrder) === JSON.stringify(explosionSequence)) {
        setExplode(true);

        const audio = new Audio(explosionsound);
        audio.play();

        setTimeout(() => {
          setExplode(false);
          setClickOrder([]);
        }, 1500);
      }
      return newOrder;
    });
  };
  return (
    <div
      className={`mb-4 lg:min-w-3xl mdlg:min-w-3xl w-full bg-black h-lg  text-slate-300 p-4 rounded-2xl  max-w-3xl shadow-xl border border-stone-800 animate-fade-in`}
    >
      {/* Tabs */}
      <div className="flex flex-col sm:flex-row gap-4  pb-2">
        <button
          onClick={() => setActiveTab("about")}
          className={`pb-2 px-4 text-lg font-semibold ${
            activeTab === "about" ? "text-slate-100" : "text-slate-300"
          }`}
        >
          📜 About Me
        </button>
        <button
          onClick={() => setActiveTab("projects")}
          className={`pb-2 px-4 text-lg font-semibold ${
            activeTab === "projects" ? "text-slate-100" : "text-slate-300"
          }`}
        >
          🚀 Projects
        </button>

        <button
          onClick={() => setActiveTab("tech")}
          className={`pb-2 px-4 text-lg font-semibold ${
            activeTab === "tech" ? "text-slate-100" : "text-slate-300"
          }`}
        >
          ⚙️ Tech stack
        </button>
      </div>

      {/* Tab Content */}
      <div className="mt-6 flex-grow">
        <div
          className={`transition-all duration-500 ease-in-out ${
            activeTab === "about"
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform translate-y-10"
          }`}
        >
          {activeTab === "about" && (
            <div className="animate-fade-in">
              <p className="text-lg">Hey! 👨‍💻</p>
              <p>
                I'm a Master's student in Applied Informatics with a focus on
                building useful and meaningful projects. I enjoy problem-solving
                and working on innovative technologies to create tools that make
                a positive impact. I am always eager to learn new things,
                improve my skills, and stay curious about emerging trends. In my
                free time, I love to create music.
              </p>
            </div>
          )}
        </div>

        <div
          className={`transition-all duration-500 ease-in-out ${
            activeTab === "projects"
              ? "opacity-100 transform"
              : "opacity-0 transform"
          }`}
        >
          {activeTab === "projects" && (
            <div className="animate-fade-in">
              {/* Highlighted Vetsi Section */}
              <div>Here are some projects im part of:</div>
              <div className="mt-6 p-5 bg-slate-800/20 border border-slate-600 rounded-lg shadow-lg text-slate-100">
                <h3 className="text-xl font-bold mb-2">
                  🐾 Vetsi – Online Animal Care
                </h3>
                <p>
                  Vetsi is an online service where users can schedule virtual
                  consultations with animal specialists, such as veterinarians,
                  dieticians, and more. It provides expert advice **anytime,
                  anywhere**.
                </p>
                <a
                  href="https://Vetsi.pl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-slate-300 underline hover:text-slate-400 transition-colors"
                >
                  Visit Vetsi.pl →
                </a>
              </div>
            </div>
          )}
        </div>

        <div
          className={`transition-all duration-500 ease-in-out ${
            activeTab === "music"
              ? "opacity-100 transform"
              : "opacity-0 transform"
          }`}
        ></div>

        <div
          className={`transition-all duration-500 ease-in-out h-auto ${
            activeTab === "tech"
              ? "opacity-100 transform"
              : "opacity-0 transform"
          }`}
        >
          {activeTab === "tech" && (
            <div className="animate-fade-in">
              <p className="text-lg">Here are some technologies I use ⚙️</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4 text-center">
                {techStack.map(({ Icon, name, color }) => (
                  <div
                    key={name}
                    className="p-6 border border-stone-800 rounded-lg bg-slate-800/20 text-slate-100 hover:scale-110 hover:rotate-3 transition-all duration-300 ease-in-out transform flex items-center justify-center flex-col"
                    onClick={() => handleTechClick(name)}
                  >
                    <Icon
                      className={`text-4xl transition-transform duration-300 ease-in-out ${color}`}
                    />
                    <p className="mt-2 text-sm">{name}</p>
                  </div>
                ))}
              </div>
              <AnimatePresence>
                {explode && (
                  <motion.div
                    className="absolute inset-0 flex items-center   justify-center bg-transparent"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 3, opacity: 1 }}
                    exit={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.1 }}
                  >
                    <img
                      src={explosion}
                      alt="Explosion"
                      className="w-256 h-256"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
