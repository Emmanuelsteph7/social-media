import { ContentMgtLayout } from "layouts";
import React from "react";
import { PostCard, SharePost, Suggested, Trends } from "./components";
import { followers, posts, trends } from "./postsData";

const Dashboard = () => {
  return (
    <ContentMgtLayout>
      <div className="flex gap-5">
        <div className="w-60 h-48 sticky top-28 bg-primary">Column</div>
        <div className="flex-1">
          <SharePost />
          <div className="my-5 bg-primaryLight h-1" />
          <div>
            {posts.map((post) => (
              <PostCard key={post.id} {...post} />
            ))}
          </div>
        </div>
        <div className="w-72 h-48 sticky top-28 ">
          <Trends trends={trends} />
          <Suggested suggested={followers} />
        </div>
      </div>
    </ContentMgtLayout>
  );
};

export default Dashboard;
