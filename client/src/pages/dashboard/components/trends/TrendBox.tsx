import React from "react";
import { Link } from "react-router-dom";

interface Props {
  trend: string;
}

const TrendBox: React.FC<Props> = ({ trend }) => {
  return (
    <div className="flex justify-between items-center mb-3">
      <Link to="/" className="text-offWhite">
        {trend}
      </Link>
    </div>
  );
};

export default TrendBox;
