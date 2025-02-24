import React, { useEffect, ReactNode } from "react";

// Array of rainbow colors
const colors: string[] = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "violet",
];

interface RainbowElementProps {
  children: ReactNode;
}

const RainbowElement: React.FC<RainbowElementProps> = ({ children }) => {
  const wrapTextNodes = (element: Node | null): void => {
    if (!element || element.nodeType !== Node.ELEMENT_NODE) return;

    element.childNodes.forEach((node) => {
      if (node.nodeType === Node.TEXT_NODE && node.nodeValue?.trim() !== "") {
        const text = node.nodeValue;
        if (!text) return;
        const wrappedLetters = text.split("").map((char) => {
          const span = document.createElement("span");
          span.textContent = char;
          span.style.position = "initial";
          span.style.transition = "color 0.3s ease-in-out";

          span.addEventListener("mouseover", () => {
            span.style.color =
              colors[Math.floor(Math.random() * colors.length)];
          });

          span.addEventListener("mouseleave", () => {
            span.style.color = "";
          });

          return span;
        });

        const fragment = document.createDocumentFragment();
        wrappedLetters.forEach((span) => fragment.appendChild(span));
        node.replaceWith(fragment);
      } else {
        wrapTextNodes(node);
      }
    });
  };

  useEffect(() => {
    const textElement = document.querySelector(".rainbow-text");
    if (textElement) {
      wrapTextNodes(textElement);
    }
  }, []);

  return <span className="rainbow-text static!">{children}</span>;
};

export default RainbowElement;
