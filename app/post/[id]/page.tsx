import { findPostById, findUserById } from "@/app/action/action";
import { postType, userType } from "@/app/types/type";
import PostTemplate from "@/components/template/PostTemplate";
import React from "react";

const DetailPage = ({ params }: { params: { id: string } }) => {
  const post: postType | undefined = findPostById(params.id);
  const user: userType | undefined = findUserById(
    post?.userId ? post.userId : ""
  );

  return (
    <PostTemplate>
      <h1 className="font-bold text-4xl">{post?.title}</h1>
      <div className="flex flex-row self-stretch gap-2 text-white text-xs overflow-x-auto">
        {post?.tags.map((tag, i) => {
          return (
            <>
              <div
                className="odd:bg-primary even:bg-secondary rounded-xl px-4 py-1"
                key={i}
              >
                {tag}
              </div>
            </>
          );
        })}
      </div>
      <div className="flex flex-row justify-between items-center pb-2 border-b">
        <p>3 Request</p>
        <p>{post?.createdAt.toLocaleDateString()}</p>
      </div>
      <p className="whitespace-normal text-justify">
        HackFest Indonesia is Indonesia’s hackathonheld by GDSC Indonesia where
        university studentsof different skills from all over Indonesia can
        cometogether to experiment and develop impactful software or hardware
        based onUnited Nation 17 SDGs.
        <br />
        <br />
        Finding the right team members for projects or competitions is a common
        challenge, as we've experienced firsthand. Existing methods are often
        time-consuming and rely on personal networks, limiting the pool of
        potential collaborators. To address this, we're working on a
        user-friendly platform that streamlines the process, making it easy for
        individuals and teams to connect based on specific skills and roles. Our
        goal is to enhance efficiency, diversity, and collaboration in team
        formation, ultimately improving the success rates of various
        initiatives.
        <br />
        <br />
        Our solution is aligned with United Nations' Sustainable Development
        Goal 4: Quality Education, specifically focusing on Target 4.7, which
        emphasizes the importance of promoting sustainable development through
        education.
        <br />
        <br />
        Candidate criteria:{" "}
        <ul className="pl-6 list-disc">
          <li>Active Students</li>
          <li>Understand Software Development</li>
          <li>Understand Business Development</li>
          <li>Understand Design Process</li>
        </ul>
      </p>
      <div className="flex items-stretch gap-2 px-1 py-2 bg-white rounded-xl shadow-md">
        <img
          src={user?.imageUrl}
          alt={user?.name}
          className="flex-1 max-w-14 max-h-14 aspect-square rounded-full"
        />
        <div className="flex flex-col justify-between text-xs overflow-hidden">
          <h3 className="font-bold truncate">{user?.name}</h3>
          <p className="truncate">{user?.email}</p>
          <p className="truncate">
            {user?.majors.faculty}/{user?.majors.name}
          </p>
        </div>
      </div>
    </PostTemplate>
  );
};

export default DetailPage;
