import React, { useEffect, useState, useRef } from "react";
import {
  FaReact,
  FaCss3Alt,
  FaNodeJs,
  FaWordpress,
  FaFire,
  FaGithub,
} from "react-icons/fa";
import { DiMongodb, DiJavascript1 } from "react-icons/di";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiNestjs,
} from "react-icons/si";
import Card from "./Card";
import Info from "./Info";
import DOTS from "vanta/dist/vanta.dots.min";

const message = "Hi, I am Filip!";

function App() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [showCard, setShowCard] = useState(false);
  const [activeTab, setActiveTab] = useState("about");

  useEffect(() => {
    if (index < message.length) {
      const timeout = setTimeout(() => {
        setText(text + message[index]);
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => setShowCard(true), 800);
    }
  }, [index, text]);
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const myRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        DOTS({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0xffffff,
          backgroundColor: 0x0,
          size: 3.2,
          spacing: 23.0,
          showLines: false,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <div
      ref={myRef}
      className="bg-black text-blue-400 font-mono p-4 h-screen w-screen flex justify-center align-center"
    >
      {!showCard ? (
        <div className="text-xl flex  justify-center items-center">
          <span className="text-3xl animate-waving-hand">👋</span>
          <span className="ml-2">{text}</span>
          <span className="animate-blink">_</span>
        </div>
      ) : (
        <div className="flex flex-col justify-center gap-4 items-center ">
          <Info />
          <Card activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
      )}
    </div>
  );
}

export default App;
