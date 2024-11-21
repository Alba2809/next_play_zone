"use client";
import { useState } from "react";
import { motion } from "framer-motion";

function GamesItem() {
  const [isHover, setIsHover] = useState(false);

  return (
    <li
      className="container-card flex flex-row group h-[--card-height]"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <a
        href="https://www.mythrillfiction.com/the-dark-rider"
        target="_blank"
        rel="noreferrer"
      >
        <div className="card">
          <div className="wrapper">
            <img
              src="https://ggayane.github.io/css-experiments/cards/dark_rider-cover.jpg"
              className="cover-image"
            />
          </div>
          <img
            src="https://ggayane.github.io/css-experiments/cards/dark_rider-title.png"
            className="title"
          />
          <img
            src="https://ggayane.github.io/css-experiments/cards/dark_rider-character.webp"
            className="character"
          />
        </div>
      </a>
      <motion.article
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: isHover ? "auto" : 0, opacity: isHover ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="overflow-hidden max-w-[--card-text-width]"
      >
        <h1 className="text-lg font-semibold italic">El Dark Rider</h1>
        <p className="text-base mt-3">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure eum
          cupiditate magnam iusto mollitia officiis asperiores perspiciatis
          earum, minima laudantium. Assumenda quisquam rerum nulla deleniti nam
          non nihil officiis dolorum.
        </p>
      </motion.article>
    </li>
  );
}

export default GamesItem;
