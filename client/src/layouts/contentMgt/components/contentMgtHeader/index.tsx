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
    <header>
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
        {/* <nav className="flex items-center">
          <button className="focus:focus-ring-secondary rounded hidden lg:flex">
            <IoMailSharp className="text-offWhite text-4xl hover:text-secondary duration-150 hover:scale-125 cursor-pointer" />
          </button>
          <Menu as="div" className="relative">
            <Menu.Button className="flex focus:focus-ring-secondary rounded items-center lg:ml-10 cursor-pointer">
              <div className="w-14 h-14 rounded-full overflow-hidden">
                <img
                  className="object-cover w-full"
                  src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?cs=srgb&dl=pexels-pixabay-415829.jpg&fm=jpg"
                  alt=""
                />
              </div>
              <h6 className="text-offWhite mx-3">Joshua</h6>
              <span>
                <MdKeyboardArrowDown className="text-white text-lg" />
              </span>
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-50"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-50"
            >
              <Menu.Items className="absolute top-full flex flex-col right-0 bg-offWhite rounded">
                <Menu.Item>
                  {({ active }) => (
                    <LinkTag
                      to="/"
                      className={cs(
                        "py-3 px-8 w-full min-w-max flex items-center hover:text-offWhite hover:bg-primary hover:bg-opacity-50 duration-150",
                        {
                          "hover:text-offWhite hover:bg-primary duration-150":
                            active,
                        }
                      )}
                    >
                      <ImProfile className="mr-2" />
                      <span>My Profile</span>
                    </LinkTag>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <LinkTag
                      to="/"
                      className={cs(
                        "py-3 px-8 w-full min-w-max flex lg:hidden items-center hover:text-offWhite hover:bg-primary hover:bg-opacity-50 duration-150",
                        {
                          "hover:text-offWhite hover:bg-primary duration-150":
                            active,
                        }
                      )}
                    >
                      <IoMailSharp className="mr-2" />
                      <span>Messages</span>
                    </LinkTag>
                  )}
                </Menu.Item>
                <Menu.Item>
                  <button className="py-3 px-8 w-full min-w-max flex items-center hover:text-offWhite hover:bg-primary hover:bg-opacity-50 duration-150">
                    <BiLogOutCircle className="mr-2" />
                    <span>Log out</span>
                  </button>
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </nav> */}
      </div>
    </header>
  );
};

export default ContentMgtHeader;
