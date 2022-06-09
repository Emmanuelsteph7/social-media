import React from "react";
import { TiSocialAtCircular } from "react-icons/ti";
import cs from "classnames";
import { motion } from "framer-motion";

interface Props {
  variant?: "normal" | "lg";
  animate?: boolean;
}

const Logo: React.FC<Props> = ({ variant = "normal", animate = false }) => {
  const classes = cs(
    "bg-offWhite flex justify-center items-center rounded-full shadow-xl relative",
    {
      "w-12 h-12": variant === "normal",
      "w-20 h-20": variant === "lg",
    }
  );

  const textClasses = cs("text-primary", {
    "text-4xl": variant === "normal",
    "text-6xl": variant === "lg",
  });

  const bounceTransition = {
    y: {
      duration: 0.4,
      yoyo: Infinity,
      ease: "easeOut",
      times: [0, 0.2, 1],
    },
  };

  const animateOptions = {
    y: ["17px", "0px"],
  };

  const isAnimate = animate ? animateOptions : false;
  return (
    <div className={classes}>
      <motion.div transition={bounceTransition} animate={isAnimate}>
        <TiSocialAtCircular className={textClasses} />
      </motion.div>
    </div>
  );
};

export default Logo;
