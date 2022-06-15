import { LinkTag } from "components";
import React, { Fragment } from "react";
import { IoMailSharp } from "react-icons/io5";
import { ImProfile } from "react-icons/im";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BiLogOutCircle } from "react-icons/bi";
import { Menu, Transition } from "@headlessui/react";
import cs from "classnames";

const Navbar = () => {
  return (
    <nav className="flex items-center">
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
    </nav>
  );
};

export default Navbar;
