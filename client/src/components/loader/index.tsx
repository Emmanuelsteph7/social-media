import Logo from "components/logo";
import React from "react";

const Loader = () => {
  return (
    <div
      className="flex justify-center items-center h-screen bg-body"
      style={{
        backgroundColor: "#1a1a2a",
        backgroundImage: `linear-gradient(
        60deg,
        rgba(50, 66, 133, 0.2) 61%,
        transparent
      ),
      linear-gradient(
        120deg,
        rgb(241, 78, 35, 0.2) 2%,
        transparent 68%,
        rgb(26, 26, 42)
      )`,
      }}
    >
      <Logo animate variant="lg" />
    </div>
  );
};

export default Loader;
