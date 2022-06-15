import React, { ReactNode } from "react";
import { ContentMgtHeader } from "./components";

interface Props {
  children: ReactNode;
}

const ContentMgtLayout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <ContentMgtHeader />
      <div className="container">{children}</div>
    </div>
  );
};

export default ContentMgtLayout;
