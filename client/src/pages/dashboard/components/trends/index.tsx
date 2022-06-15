import React from "react";
import { API } from "types/client";
import TrendBox from "./TrendBox";

interface Props {
  trends: API.Data.Trends[];
}

const Trends: React.FC<Props> = ({ trends }) => {
  return (
    <div className="p-5 rounded bg-primaryLight mb-4">
      <h4 className="text-white mb-4 text-xl">Trends</h4>
      <div>
        {trends.map((trend) => (
          <TrendBox key={trend.id} {...trend} />
        ))}
      </div>
    </div>
  );
};

export default Trends;
