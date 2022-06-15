import { FormField, Logo } from "components";
import { useDebounce } from "hooks";
import { Path } from "notifications/routes";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const ContentMgtHeader = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearch(e.target.value);

  const debouncedValue = useDebounce(search);
  console.log(debouncedValue);
  return (
    <header className="bg-primaryLight mb-8">
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
    </header>
  );
};

export default ContentMgtHeader;
