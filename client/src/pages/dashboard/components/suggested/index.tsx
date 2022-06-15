import React from "react";
import { API } from "types/client";
import FollowerBox from "./FollowerBox";

interface Props {
  suggested: API.Data.Suggested[];
}

const Suggested: React.FC<Props> = ({ suggested }) => {
  return (
    <div className="p-5 rounded bg-primaryLight">
      <h4 className="text-white mb-4 text-xl">Suggested</h4>
      <div>
        {suggested.map((follower) => (
          <FollowerBox key={follower.id} {...follower} />
        ))}
      </div>
    </div>
  );
};

export default Suggested;
