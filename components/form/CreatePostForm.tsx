import React, { useRef } from "react";
import TextBox from "./TextBox";
import Link from "next/link";

const CreatePostForm = () => {
  return (
    <>
      <TextBox labelText="Post title" type="text" placeholder="Title here..." />
      <TextBox labelText="Tags" type="text" placeholder="Tags here..." />
      <div className={"flex flex-col gap-1"}>
        <label
          className="block text-gray-600  mb-2 text-xs lg:text-sm xl:text-base"
          htmlFor="txt"
        >
          Description
        </label>
        <div className="flex items-stretch">
          <textarea
            id="txt"
            autoComplete="off"
            className={`border border-border disabled:border-slate-100 w-full block outline-none py-3 px-4 transition-all text-base  bg-white focus:shadow focus:shadow-blue-500 rounded-xl`}
            placeholder={"Description here..."}
            rows={4}
          ></textarea>
        </div>
      </div>
      <Link
        href={"/explore"}
        className="flex justify-center items-center font-bold text-white bg-primary py-3 rounded-xl"
      >
        Post
      </Link>
    </>
  );
};

export default CreatePostForm;
