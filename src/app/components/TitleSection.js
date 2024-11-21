"use client";
import { motion } from "framer-motion"

function TitleSection({ title, style }) {
  return (
    <motion.h2 className={style} whileInView={{ y: [-100, 0], opacity: [0, 1] }} transition={{ duration: 0.6, ease: "easeInOut" }} viewport={{ once: true }}>
        {title}
    </motion.h2>
  )
}

export default TitleSection