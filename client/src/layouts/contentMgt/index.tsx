import React, { ReactNode } from "react";
import { ContentMgtHeader } from "./components";

interface Props {
  children: ReactNode;
}

const ContentMgtLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <ContentMgtHeader />
      <div className="container">{children}</div>
    </>
  );
};

export default ContentMgtLayout;
