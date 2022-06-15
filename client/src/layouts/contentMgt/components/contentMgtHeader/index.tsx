import { FormField, Logo } from "components";
import { useDebounce } from "hooks";
import { Path } from "notifications/routes";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

const variants = {
  initial: {
    y: -100,
  },
  animate: {
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const ContentMgtHeader = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearch(e.target.value);

  const debouncedValue = useDebounce(search);
  console.log(debouncedValue);
  return (
    <motion.header
      variants={variants}
      initial="initial"
      animate="animate"
      className="bg-primaryLight shadow mb-8 sticky top-0 z-10"
    >
      <div className="container flex justify-between items-center gap-20 py-4">
        <button className="focus:focus-ring-secondary rounded">
          <Link to={Path.Dashboard}>
            <Logo />
          </Link>
        </button>
        <div className="flex-1 hidden md:block">
          <FormField
            name="search"
            type="search"
            placeholder="Search..."
            onChange={handleSearch}
            value={search}
          />
        </div>
        <Navbar />
      </div>
    </motion.header>
  );
};

export default ContentMgtHeader;
