import { Logo } from "components";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface Props {
  image: string;
  imageText: string;
  children?: ReactNode;
}

const variants = {
  initial: { x: "100%" },
  animate: {
    x: 0,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
  exit: {
    x: "-100%",
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

const AuthLayout: React.FC<Props> = ({ image, children, imageText }) => {
  return (
    <motion.div
      exit="exit"
      initial="initial"
      animate="animate"
      variants={variants}
      className="min-h-screen flex"
    >
      <div className="container h-full flex relative">
        <div className="relative lg:m-auto w-full flex flex-col items-center h-full py-5">
          <div className="mb-8 lg:hidden">
            <Logo />
          </div>
          <div className="w-full md:w-3/4 max-w-2xl lg:max-w-none lg:w-full relative lg:flex lg:rounded-2xl overflow-hidden lg:bg-offWhite lg:bg-opacity-20 lg:h-600px">
            <div
              className="hidden lg:flex w-5/12 h-full items-end p-5"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${image})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPositionY: "center",
              }}
            >
              <h1 className="text-white text-6xl text-center">{imageText}</h1>
            </div>
            {children}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AuthLayout;
