import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { BiDotsVerticalRounded, BiMessageEdit } from "react-icons/bi";
import { RiDeleteBin3Line } from "react-icons/ri";
import cs from "classnames";

const Options = () => {
  return (
    <Menu as="div" className="relative">
      <Menu.Button className="flex focus:focus-ring-primary rounded items-center lg:ml-10 cursor-pointer">
        <BiDotsVerticalRounded className="text-offWhite text-xl" />
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
              <button
                className={cs(
                  "py-3 px-8 w-full min-w-max flex items-center hover:text-offWhite hover:bg-primary hover:bg-opacity-50 duration-150",
                  {
                    "hover:text-offWhite hover:bg-primary duration-150": active,
                  }
                )}
              >
                <BiMessageEdit className="mr-2" />
                <span>Edit</span>
              </button>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button
                className={cs(
                  "py-3 px-8 w-full min-w-max flex items-center hover:text-offWhite hover:bg-primary hover:bg-opacity-50 duration-150",
                  {
                    "hover:text-offWhite hover:bg-primary duration-150": active,
                  }
                )}
              >
                <RiDeleteBin3Line className="mr-2" />
                <span>Delete</span>
              </button>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default Options;
