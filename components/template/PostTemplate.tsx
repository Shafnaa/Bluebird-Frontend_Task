import React from "react";
import Applybar from "../navigation/Applybar";
import TopNavbar from "../navigation/TopNavbar";

const PostTemplate = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="flex flex-col gap-6 px-6 pt-6 py-24">
        <TopNavbar />
        {children}
      </div>
      <Applybar />
    </>
  );
};

export default PostTemplate;
