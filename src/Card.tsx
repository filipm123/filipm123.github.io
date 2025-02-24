import { FaReact, FaNodeJs, FaWordpress, FaFire } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiNestjs,
} from "react-icons/si";

interface CardProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

function Card({ activeTab, setActiveTab }: CardProps) {
  return (
    <div
      className={`mb-4 lg:min-w-3xl mdlg:min-w-3xl w-full bg-black h-lg  text-slate-300 p-4 rounded-2xl  max-w-3xl transition-opacity duration-500 shadow-xl border border-stone-800 animate-fade-in`}
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
          ⚙️ Technologies
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
                I'm a Master's student in **Applied Informatics** with a passion
                for **building useful and meaningful projects**. I enjoy
                problem-solving, working on innovative tech, and creating tools
                that help people. In my free time, I explore **music
                production** and new technologies.
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
              <p className="text-lg">Here’s what I’m working on 🚀</p>
              <ul className="list-disc list-inside space-y-2">
                <li>🔧 Building web apps that solve real-world problems</li>
                <li>📚 Exploring AI & automation</li>
                <li>💡 Always learning new tech & frameworks</li>
              </ul>

              {/* Highlighted Vetsi Section */}
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
                <div className="p-6 border rounded-lg bg-slate-800 text-slate-100 hover:scale-110 hover:rotate-3 transition-all duration-300 ease-in-out transform flex items-center justify-center flex-col">
                  <FaReact className="text-4xl transition-transform duration-300 ease-in-out" />
                  <p className="mt-2 text-sm">React</p>
                </div>

                <div className="p-6 border rounded-lg bg-slate-800 text-slate-100 hover:scale-110 hover:rotate-3 transition-all duration-300 ease-in-out transform flex items-center justify-center flex-col">
                  <SiTailwindcss className="text-4xl transition-transform duration-300 ease-in-out" />
                  <p className="mt-2 text-sm">TailwindCSS</p>
                </div>

                <div className="p-6 border rounded-lg bg-slate-800 text-slate-100 hover:scale-110 hover:rotate-3 transition-all duration-300 ease-in-out transform flex items-center justify-center flex-col">
                  <SiTypescript className="text-4xl transition-transform duration-300 ease-in-out" />
                  <p className="mt-2 text-sm">Typescript</p>
                </div>

                <div className="p-6 border rounded-lg bg-slate-800 text-slate-100 hover:scale-110 hover:rotate-3 transition-all duration-300 ease-in-out transform flex items-center justify-center flex-col">
                  <SiNextdotjs className="text-4xl transition-transform duration-300 ease-in-out" />
                  <p className="mt-2 text-sm">NextJS</p>
                </div>

                <div className="p-6 border rounded-lg bg-slate-800 text-slate-100 hover:scale-110 hover:rotate-3 transition-all duration-300 ease-in-out transform flex items-center justify-center flex-col">
                  <DiMongodb className="text-4xl transition-transform duration-300 ease-in-out" />
                  <p className="mt-2 text-sm">MongoDB</p>
                </div>

                <div className="p-6 border rounded-lg bg-slate-800 text-slate-100 hover:scale-110 hover:rotate-3 transition-all duration-300 ease-in-out transform flex items-center justify-center flex-col">
                  <FaFire className="text-4xl transition-transform duration-300 ease-in-out" />
                  <p className="mt-2 text-sm">Firebase</p>
                </div>

                <div className="p-6 border rounded-lg bg-slate-800 text-slate-100 hover:scale-110 hover:rotate-3 transition-all duration-300 ease-in-out transform flex items-center justify-center flex-col">
                  <FaWordpress className="text-4xl transition-transform duration-300 ease-in-out" />
                  <p className="mt-2 text-sm">WordPress</p>
                </div>

                <div className="p-6 border rounded-lg bg-slate-800 text-slate-100 hover:scale-110 hover:rotate-3 transition-all duration-300 ease-in-out transform flex items-center justify-center flex-col">
                  <FaNodeJs className="text-4xl transition-transform duration-300 ease-in-out" />
                  <p className="mt-2 text-sm">Node.js</p>
                </div>

                <div className="p-6 border rounded-lg bg-slate-800 text-slate-100 hover:scale-110 hover:rotate-3 transition-all duration-300 ease-in-out transform flex items-center justify-center flex-col">
                  <SiNestjs className="text-4xl transition-transform duration-300 ease-in-out" />
                  <p className="mt-2 text-sm">NestJS</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
