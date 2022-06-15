import { Button } from "components";
import React from "react";

interface Props {
  image: string;
  name: string;
}

const FollowerBox: React.FC<Props> = ({ image, name }) => {
  return (
    <div className="flex justify-between items-center mb-3">
      <div className="flex items-center">
        <div className="w-8 h-8 mr-3 rounded-full overflow-hidden">
          <img className="object-cover w-full" src={image} alt="" />
        </div>
        <h5 className="text-offWhite">{name}</h5>
      </div>
      <div>
        <Button>Follow</Button>
      </div>
    </div>
  );
};

export default FollowerBox;
