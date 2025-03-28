"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

interface Props {
  src: string; // Use lowercase `string`
  width: number; // Use lowercase `number`
  height: number; // Use lowercase `number`
  index: number; // Use lowercase `number`
}

const SkillDataProvider = ({ src, width, height, index }: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  const animationDelay = 0.3;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay }}
    >
      <Image alt="skill image" src={src} width={width} height={height} />
    </motion.div>
  );
};

export default SkillDataProvider;