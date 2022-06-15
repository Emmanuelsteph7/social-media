import { ContentMgtLayout } from "layouts";
import React from "react";
import { SharePost } from "./components";

const Dashboard = () => {
  return (
    <ContentMgtLayout>
      <div className="flex gap-10">
        <div className="w-60 h-48 bg-primary">Column</div>
        <div className="flex-1">
          <SharePost />
        </div>
        <div className="w-60 h-48 bg-primary">Column</div>
      </div>
    </ContentMgtLayout>
  );
};

export default Dashboard;
