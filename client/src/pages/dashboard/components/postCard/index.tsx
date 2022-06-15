import React from "react";
import Options from "./Options";

interface Props {
  image: string;
  name: string;
  time: string;
  description: string;
}

const PostCard: React.FC<Props> = ({ description, image, name, time }) => {
  return (
    <div className="p-5 rounded bg-primaryLight mb-5">
      <div className="flex justify-between items-center mb-5">
        <div className="flex items-center">
          <div className="w-14 h-14 mr-3 rounded-full overflow-hidden">
            <img className="object-cover w-full" src={image} alt="" />
          </div>
          <div>
            <h5 className="mb-1 text-offWhite">{name}</h5>
            <span className="text-offWhite text-opacity-70 text-xs">
              {time}
            </span>
          </div>
        </div>
        <Options />
      </div>
      <p className="text-offWhite">{description}</p>
    </div>
  );
};

export default PostCard;
